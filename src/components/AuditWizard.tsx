"use client";

import { useState, useCallback } from "react";
import AuditResults from "./AuditResults";

/* ── Types ──────────────────────────────────────── */

export interface AuditFormData {
    industry: string;
    teamSize: string;
    techStack: string[];
    frictionPoints: {
        highContentHours: boolean;
        manualDataMovement: boolean;
        noCustomerSystem: boolean;
        contentHoursPerWeek: number;
    };
    hourlyRate: number;
    weeklyHours: number;
    email: string;
}

export interface AuditResponse {
    annualLoss: number;
    maturityScore: number;
    scoreZone: string;
    agentMatch: string;
    gapInsight: string;
    agentMatchReason: string;
    roadmap: {
        strategy: string;
        development: string;
        integration: string;
        optimization: string;
    };
    quickWin: string;
    hook: string;
}

const INITIAL_FORM: AuditFormData = {
    industry: "",
    teamSize: "",
    techStack: [],
    frictionPoints: {
        highContentHours: false,
        manualDataMovement: false,
        noCustomerSystem: false,
        contentHoursPerWeek: 5,
    },
    hourlyRate: 50,
    weeklyHours: 10,
    email: "",
};

const INDUSTRIES = [
    "E-commerce",
    "SaaS",
    "Professional Services",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Real Estate",
    "Education",
    "Marketing & Advertising",
    "Other",
];

const TEAM_SIZES = ["1-10", "11-50", "51-200", "200+"];

const TECH_STACK_OPTIONS = [
    "Shopify",
    "Salesforce",
    "HubSpot",
    "Zendesk",
    "Slack",
    "Zapier",
    "Make",
    "WordPress",
    "WooCommerce",
    "Dynamics 365",
    "SAP",
    "Mailchimp",
    "Google Workspace",
    "Microsoft 365",
    "Custom CRM",
    "None / Manual",
];

/* ── Wizard Component ───────────────────────────── */

const AuditWizard = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState<AuditFormData>(INITIAL_FORM);
    const [customIndustry, setCustomIndustry] = useState("");
    const [customTechStack, setCustomTechStack] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AuditResponse | null>(null);
    const [error, setError] = useState("");

    const totalSteps = 4;

    const updateForm = useCallback(
        <K extends keyof AuditFormData>(key: K, value: AuditFormData[K]) => {
            setForm((prev) => ({ ...prev, [key]: value }));
        },
        []
    );

    const toggleTechStack = useCallback((item: string) => {
        setForm((prev) => ({
            ...prev,
            techStack: prev.techStack.includes(item)
                ? prev.techStack.filter((s) => s !== item)
                : [...prev.techStack, item],
        }));
    }, []);

    const updateFriction = useCallback(
        <K extends keyof AuditFormData["frictionPoints"]>(
            key: K,
            value: AuditFormData["frictionPoints"][K]
        ) => {
            setForm((prev) => ({
                ...prev,
                frictionPoints: { ...prev.frictionPoints, [key]: value },
            }));
        },
        []
    );

    /* Email validation */
    const isValidEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    /* Resolve the actual industry value (use custom text if "Other") */
    const getEffectiveIndustry = (): string => {
        return form.industry === "Other" && customIndustry.trim()
            ? customIndustry.trim()
            : form.industry;
    };

    /* Resolve the full tech stack (include custom entry if filled) */
    const getEffectiveTechStack = (): string[] => {
        const stack = [...form.techStack];
        if (customTechStack.trim()) {
            stack.push(customTechStack.trim());
        }
        return stack;
    };

    const canAdvance = (): boolean => {
        switch (step) {
            case 0: {
                const hasIndustry =
                    form.industry === "Other"
                        ? !!customIndustry.trim()
                        : !!form.industry;
                return hasIndustry && !!form.teamSize;
            }
            case 1:
                return true; // tech stack optional
            case 2:
                return true; // friction points optional
            case 3:
                return form.weeklyHours > 0 && form.hourlyRate > 0 && isValidEmail(form.email);
            default:
                return false;
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError("");

        const submitData = {
            ...form,
            industry: getEffectiveIndustry(),
            techStack: getEffectiveTechStack(),
        };

        try {
            // 1) Call Gemini API
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submitData),
            });

            if (!res.ok) {
                const errBody = await res.text();
                console.error("API error:", res.status, errBody);
                throw new Error("Analysis failed");
            }

            const data: AuditResponse = await res.json();

            // 2) Build email message
            const emailMessage = [
                `🔍 AI Gap Audit Results`,
                ``,
                `Industry: ${submitData.industry}`,
                `Team Size: ${submitData.teamSize}`,
                `Tech Stack: ${submitData.techStack.join(", ") || "None specified"}`,
                `Weekly Hours Lost: ${submitData.weeklyHours}h`,
                `Hourly Rate: $${submitData.hourlyRate}`,
                ``,
                `📊 Annual Inefficiency Cost: $${data.annualLoss.toLocaleString()}`,
                `📈 AI Maturity Score: ${data.maturityScore}/100 (${data.scoreZone})`,
                `🤖 Recommended Agent: ${data.agentMatch}`,
                ``,
                `💡 Insight: ${data.gapInsight}`,
                ``,
                `🗺️ Roadmap:`,
                `  Strategy: ${data.roadmap.strategy}`,
                `  Development: ${data.roadmap.development}`,
                `  Integration: ${data.roadmap.integration}`,
                `  Optimization: ${data.roadmap.optimization}`,
                ``,
                `⚡ Quick Win: ${data.quickWin}`,
                ``,
                `Contact: ${form.email}`,
            ].join("\n");

            // 3) Send email to office@lotrino.com via Web3Forms
            try {
                await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                        from_name: "LOTRINO AI Gap Audit",
                        subject: `New AI Gap Audit — ${submitData.industry} (${submitData.teamSize} team)`,
                        name: form.email,
                        email: form.email,
                        message: emailMessage,
                    }),
                });
            } catch {
                console.warn("Web3Forms email (office) failed");
            }

            // 4) Send report copy to the user's email
            try {
                await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                        from_name: "LOTRINO — Your AI Gap Audit Report",
                        subject: `Your AI Gap Audit Results — ${submitData.industry}`,
                        name: "LOTRINO AI Strategist",
                        email: form.email,
                        replyto: "office@lotrino.com",
                        message: emailMessage,
                    }),
                });
            } catch {
                console.warn("Web3Forms email (user copy) failed");
            }

            setResult(data);
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    /* ── If results are ready, show them ── */
    if (result) {
        return <AuditResults data={result} email={form.email} />;
    }

    return (
        <div className="audit-page">
            {/* Background effects */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/8 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="text-center mb-10 animate-fade-in">
                    <span className="text-accent text-xs font-medium tracking-widest uppercase">
                        Free AI Audit
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3">
                        Discover Your{" "}
                        <span className="gradient-text">AI Gap</span>
                    </h1>
                    <p className="text-muted mt-4 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                        Answer a few questions and our AI strategist will calculate your
                        inefficiency cost and recommend the right solution.
                    </p>
                </div>

                {/* Progress bar */}
                <div className="audit-progress-track mb-8">
                    <div
                        className="audit-progress-fill"
                        style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                    />
                    <div className="audit-progress-label">
                        Step {step + 1} of {totalSteps}
                    </div>
                </div>

                {/* Form card */}
                <div className="audit-card animate-fade-in-up">
                    {/* Step 1: Business Profile */}
                    {step === 0 && (
                        <div className="audit-step">
                            <h2 className="audit-step-title">
                                <span className="audit-step-number">01</span>
                                Business Profile
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <label className="audit-label">Industry</label>
                                    <select
                                        id="audit-industry"
                                        value={form.industry}
                                        onChange={(e) => updateForm("industry", e.target.value)}
                                        className="audit-select"
                                    >
                                        <option value="">Select your industry</option>
                                        {INDUSTRIES.map((ind) => (
                                            <option key={ind} value={ind}>
                                                {ind}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Custom industry text field when "Other" is selected */}
                                    {form.industry === "Other" && (
                                        <input
                                            id="audit-custom-industry"
                                            type="text"
                                            value={customIndustry}
                                            onChange={(e) => setCustomIndustry(e.target.value)}
                                            placeholder="Please specify your industry"
                                            className="audit-input mt-3"
                                        />
                                    )}
                                </div>

                                <div>
                                    <label className="audit-label">Team Size</label>
                                    <div className="audit-radio-group">
                                        {TEAM_SIZES.map((size) => (
                                            <button
                                                id={`audit-team-${size}`}
                                                key={size}
                                                type="button"
                                                onClick={() => updateForm("teamSize", size)}
                                                className={`audit-radio ${form.teamSize === size ? "audit-radio--active" : ""}`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Tech Stack */}
                    {step === 1 && (
                        <div className="audit-step">
                            <h2 className="audit-step-title">
                                <span className="audit-step-number">02</span>
                                Current Tech Stack
                            </h2>
                            <p className="text-muted text-sm mb-4">
                                Select all tools your team currently uses.
                            </p>
                            <div className="audit-chip-grid">
                                {TECH_STACK_OPTIONS.map((tool) => (
                                    <button
                                        id={`audit-chip-${tool.toLowerCase().replace(/\s+/g, "-")}`}
                                        key={tool}
                                        type="button"
                                        onClick={() => toggleTechStack(tool)}
                                        className={`audit-chip ${form.techStack.includes(tool) ? "audit-chip--active" : ""}`}
                                    >
                                        {tool}
                                    </button>
                                ))}
                            </div>

                            {/* Custom tech stack text field */}
                            <input
                                id="audit-custom-techstack"
                                type="text"
                                value={customTechStack}
                                onChange={(e) => setCustomTechStack(e.target.value)}
                                placeholder="Other tools not listed above..."
                                className="audit-input mt-4"
                            />
                        </div>
                    )}

                    {/* Step 3: Friction Points */}
                    {step === 2 && (
                        <div className="audit-step">
                            <h2 className="audit-step-title">
                                <span className="audit-step-number">03</span>
                                Identifying Friction Points
                            </h2>

                            <div className="space-y-5">
                                <div className="audit-toggle-row">
                                    <div>
                                        <p className="text-sm font-medium">High Content/SEO Hours</p>
                                        <p className="text-xs text-muted mt-0.5">
                                            Does your team spend significant time creating SEO content or social posts?
                                        </p>
                                    </div>
                                    <button
                                        id="audit-friction-content"
                                        type="button"
                                        onClick={() =>
                                            updateFriction("highContentHours", !form.frictionPoints.highContentHours)
                                        }
                                        className={`audit-toggle ${form.frictionPoints.highContentHours ? "audit-toggle--active" : ""}`}
                                    >
                                        <span className="audit-toggle-knob" />
                                    </button>
                                </div>

                                <div className="audit-toggle-row">
                                    <div>
                                        <p className="text-sm font-medium">Manual Data Movement</p>
                                        <p className="text-xs text-muted mt-0.5">
                                            Do employees manually move data between different software tools?
                                        </p>
                                    </div>
                                    <button
                                        id="audit-friction-data"
                                        type="button"
                                        onClick={() =>
                                            updateFriction("manualDataMovement", !form.frictionPoints.manualDataMovement)
                                        }
                                        className={`audit-toggle ${form.frictionPoints.manualDataMovement ? "audit-toggle--active" : ""}`}
                                    >
                                        <span className="audit-toggle-knob" />
                                    </button>
                                </div>

                                <div className="audit-toggle-row">
                                    <div>
                                        <p className="text-sm font-medium">No 24/7 Customer System</p>
                                        <p className="text-xs text-muted mt-0.5">
                                            Do you lack a system that handles sales or support inquiries around the clock?
                                        </p>
                                    </div>
                                    <button
                                        id="audit-friction-customer"
                                        type="button"
                                        onClick={() =>
                                            updateFriction("noCustomerSystem", !form.frictionPoints.noCustomerSystem)
                                        }
                                        className={`audit-toggle ${form.frictionPoints.noCustomerSystem ? "audit-toggle--active" : ""}`}
                                    >
                                        <span className="audit-toggle-knob" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Pain Metric & Email */}
                    {step === 3 && (
                        <div className="audit-step">
                            <h2 className="audit-step-title">
                                <span className="audit-step-number">04</span>
                                The Pain Metric
                            </h2>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="audit-label !mb-0">
                                            Average Hourly Cost
                                        </label>
                                        <span className="text-accent font-semibold text-lg">
                                            ${form.hourlyRate}
                                        </span>
                                    </div>
                                    <input
                                        id="audit-hourly-rate"
                                        type="range"
                                        min={25}
                                        max={150}
                                        step={5}
                                        value={form.hourlyRate}
                                        onChange={(e) =>
                                            updateForm("hourlyRate", Number(e.target.value))
                                        }
                                        className="audit-slider"
                                    />
                                    <div className="flex justify-between text-xs text-muted mt-1">
                                        <span>$25/hr</span>
                                        <span>$150+/hr</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="audit-label !mb-0">
                                            Weekly Hours Lost to Repetitive Tasks
                                        </label>
                                        <span className="text-accent font-semibold text-lg">
                                            {form.weeklyHours}h
                                        </span>
                                    </div>
                                    <input
                                        id="audit-weekly-hours"
                                        type="range"
                                        min={1}
                                        max={40}
                                        step={1}
                                        value={form.weeklyHours}
                                        onChange={(e) =>
                                            updateForm("weeklyHours", Number(e.target.value))
                                        }
                                        className="audit-slider"
                                    />
                                    <div className="flex justify-between text-xs text-muted mt-1">
                                        <span>1 hour</span>
                                        <span>40+ hours</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="audit-label">Your Email</label>
                                    <input
                                        id="audit-email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => updateForm("email", e.target.value)}
                                        placeholder="your@email.com"
                                        className="audit-input"
                                    />
                                    <p className="text-xs text-muted mt-1.5">
                                        We&apos;ll send your personalized AI Gap report to this address.
                                    </p>
                                    {form.email && !isValidEmail(form.email) && (
                                        <p className="text-xs text-red-400 mt-1">
                                            Please enter a valid email address.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
                        {step > 0 ? (
                            <button
                                id="audit-back"
                                type="button"
                                onClick={() => setStep((s) => s - 1)}
                                className="audit-nav-btn"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Back
                            </button>
                        ) : (
                            <div />
                        )}

                        {step < totalSteps - 1 ? (
                            <button
                                id="audit-next"
                                type="button"
                                onClick={() => setStep((s) => s + 1)}
                                disabled={!canAdvance()}
                                className="audit-primary-btn"
                            >
                                Next
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        ) : (
                            <button
                                id="audit-submit"
                                type="button"
                                onClick={handleSubmit}
                                disabled={!canAdvance() || loading}
                                className="audit-primary-btn audit-primary-btn--glow"
                            >
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        Analyze My Gap
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditWizard;
