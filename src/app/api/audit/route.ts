import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

/* ── Scoring helpers ──────────────────────────────── */

interface AuditPayload {
    industry: string;
    teamSize: string;
    techStack: string[];
    frictionPoints: {
        highContentHours: boolean;
        manualDataMovement: boolean;
        noCustomerSystem: boolean;
        contentHoursPerWeek?: number;
    };
    hourlyRate: number;
    weeklyHours: number;
    email: string;
}

function computeAnnualLoss(weeklyHours: number, hourlyRate: number): number {
    return Math.round(weeklyHours * hourlyRate * 52 * 1.25);
}

function computeMaturityScore(
    techStack: string[],
    frictionPoints: AuditPayload["frictionPoints"]
): number {
    let score = 50; // baseline

    // Tech stack bonuses
    const automationTools = ["zapier", "make", "n8n", "power automate"];
    const crmErpTools = [
        "salesforce",
        "hubspot",
        "zendesk",
        "dynamics",
        "sap",
        "oracle",
    ];

    const stackLower = techStack.map((s) => s.toLowerCase());

    if (stackLower.some((s) => crmErpTools.some((c) => s.includes(c)))) {
        score += 25;
    }
    if (stackLower.some((s) => automationTools.some((a) => s.includes(a)))) {
        score += 15;
    }

    // Friction penalties
    if (frictionPoints.highContentHours) score -= 20;
    if (frictionPoints.manualDataMovement) score -= 10;
    if (frictionPoints.noCustomerSystem) score -= 10;

    return Math.max(0, Math.min(100, score));
}

function getScoreZone(score: number): string {
    if (score <= 35) return "Manual Friction";
    if (score <= 65) return "Emerging";
    return "Optimized";
}

function pickAgentMatch(
    frictionPoints: AuditPayload["frictionPoints"],
    techStack: string[]
): string {
    if (frictionPoints.highContentHours) return "SEO Agents";
    if (frictionPoints.noCustomerSystem) return "E-Commerce Agents";
    if (frictionPoints.manualDataMovement) return "Agents for Internal Processes";

    const stackLower = techStack.map((s) => s.toLowerCase());
    if (stackLower.some((s) => s.includes("shopify") || s.includes("woo")))
        return "E-Commerce Agents";
    if (
        stackLower.some(
            (s) =>
                s.includes("instagram") ||
                s.includes("facebook") ||
                s.includes("linkedin")
        )
    )
        return "Social Media Agents";

    return "Custom Solutions";
}

/* ── System prompt ────────────────────────────────── */

function buildPrompt(data: AuditPayload, annualLoss: number, maturityScore: number, agentMatch: string): string {
    return `You are the Lead AI Strategist at LOTRINO. Your mission is to bridge the gap between AI potential and business reality.

YOUR TONE:
Professional, insightful, and slightly witty, but always grounded in human-centered values. You avoid "AI hype" and focus on transparency, collaboration, and real impact.

YOUR FRAMEWORK:
Always structure your analysis using the Lotrino 4-Pillar Process:
1. Strategy: Define the AI roadmap aligned with their goals.
2. Development: Propose a specific Custom AI solution.
3. Integration: Explain how it fits their existing infrastructure.
4. Optimization: Describe how to refine it for maximum performance.

YOUR PRODUCT CATALOG:
- SEO Agents: For content generation and search ranking.
- Social Media Agents: For crafting and scheduling social presence.
- Agents for Internal Processes: For streamlining 24/7 operations.
- E-Commerce Agents: An AI-driven OS for handling online sales.
- Custom Solutions: For unique business challenges.

BUSINESS CONTEXT:
- Industry: ${data.industry}
- Team Size: ${data.teamSize}
- Tech Stack: ${data.techStack.join(", ") || "None specified"}
- High manual content/SEO hours: ${data.frictionPoints.highContentHours ? "Yes" : "No"}
- Manual data movement between tools: ${data.frictionPoints.manualDataMovement ? "Yes" : "No"}
- No 24/7 automated customer system: ${data.frictionPoints.noCustomerSystem ? "Yes" : "No"}
- Weekly hours lost to repetitive tasks: ${data.weeklyHours}
- Average hourly cost: $${data.hourlyRate}

PRE-COMPUTED METRICS:
- Annual Inefficiency Loss: $${annualLoss.toLocaleString()}
- AI Maturity Score: ${maturityScore}/100 (Zone: "${getScoreZone(maturityScore)}")
- Recommended Agent: ${agentMatch}

OUTPUT REQUIREMENTS (respond in valid JSON only, no markdown):
{
  "gapInsight": "A 2-3 sentence analysis of their specific inefficiency gap using the dollar figure",
  "agentMatchReason": "A 2-3 sentence explanation of why the recommended agent is the best fit",
  "roadmap": {
    "strategy": "One specific bullet for their Strategy phase",
    "development": "One specific bullet for their Development phase",
    "integration": "One specific bullet for their Integration phase",
    "optimization": "One specific bullet for their Optimization phase"
  },
  "quickWin": "One actionable thing they can do today to start improving",
  "hook": "A compelling, low-friction invitation to book a 15-minute call with Jan to bridge the gap"
}`;
}

/* ── Route handler ────────────────────────────────── */

export async function POST(req: NextRequest) {
    try {
        const data: AuditPayload = await req.json();

        // Validate required fields
        if (!data.industry || !data.teamSize || !data.weeklyHours || !data.hourlyRate) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const annualLoss = computeAnnualLoss(data.weeklyHours, data.hourlyRate);
        const maturityScore = computeMaturityScore(data.techStack, data.frictionPoints);
        const agentMatch = pickAgentMatch(data.frictionPoints, data.techStack);

        const prompt = buildPrompt(data, annualLoss, maturityScore, agentMatch);
        // Call Gemini with automatic retry on rate limit
        let response;
        const MAX_RETRIES = 2;
        for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
            try {
                response = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: prompt,
                    config: {
                        responseMimeType: "application/json",
                    },
                });
                break; // success — exit loop
            } catch (err: unknown) {
                const errMsg = err instanceof Error ? err.message : String(err);
                const is429 = errMsg.includes("429") || errMsg.includes("RESOURCE_EXHAUSTED");
                if (is429 && attempt < MAX_RETRIES) {
                    // Extract retry delay from error or default to 15s
                    const delayMatch = errMsg.match(/retry in ([\d.]+)s/i);
                    const waitSec = delayMatch ? Math.ceil(parseFloat(delayMatch[1])) + 1 : 15;
                    console.log(`Rate limited. Waiting ${waitSec}s before retry ${attempt + 1}/${MAX_RETRIES}...`);
                    await new Promise((r) => setTimeout(r, waitSec * 1000));
                } else {
                    throw err; // rethrow if not 429 or out of retries
                }
            }
        }

        if (!response) {
            throw new Error("Gemini API failed after retries");
        }

        // Parse LLM JSON response
        let llmResult;
        const rawText = response.text ?? "";

        try {
            // Strip possible markdown code fences
            const cleaned = rawText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
            llmResult = JSON.parse(cleaned);
        } catch {
            // If JSON parsing fails, return raw text as insight
            console.warn("LLM JSON parse failed. Raw text:", rawText.slice(0, 500));
            llmResult = {
                gapInsight: rawText || "Analysis completed but response could not be parsed.",
                agentMatchReason: "",
                roadmap: { strategy: "", development: "", integration: "", optimization: "" },
                quickWin: "",
                hook: "",
            };
        }

        return NextResponse.json({
            annualLoss,
            maturityScore,
            scoreZone: getScoreZone(maturityScore),
            agentMatch,
            ...llmResult,
        });
    } catch (error) {
        console.error("Audit API error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "Failed to generate audit analysis", details: message },
            { status: 500 }
        );
    }
}
