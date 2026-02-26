"use client";

import { useEffect, useState } from "react";
import type { AuditResponse } from "./AuditWizard";

interface AuditResultsProps {
    data: AuditResponse;
    email: string;
}

/* ── Animated counter hook ──────────────────────── */

function useAnimatedNumber(target: number, duration = 1500): number {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const start = performance.now();
        let raf: number;

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCurrent(Math.round(target * eased));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);

    return current;
}

/* ── Radial gauge SVG ──────────────────────────── */

const RadialGauge = ({
    score,
    zone,
}: {
    score: number;
    zone: string;
}) => {
    const animatedScore = useAnimatedNumber(score, 2000);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (animatedScore / 100) * circumference;

    const zoneColor =
        score <= 35
            ? "rgba(239, 68, 68, 0.8)"
            : score <= 65
                ? "rgba(251, 191, 36, 0.8)"
                : "rgba(52, 211, 153, 0.8)";

    return (
        <div className="audit-gauge-container">
            <svg
                viewBox="0 0 200 200"
                className="audit-gauge-svg"
            >
                {/* Background track */}
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="12"
                />
                {/* Progress arc */}
                <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke={zoneColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(-90 100 100)"
                    className="transition-all duration-[2s] ease-out"
                    style={{ filter: `drop-shadow(0 0 8px ${zoneColor})` }}
                />
            </svg>
            <div className="audit-gauge-inner">
                <span className="audit-gauge-score">{animatedScore}</span>
                <span className="audit-gauge-label">/100</span>
            </div>
            <div
                className="audit-gauge-zone"
                style={{ color: zoneColor }}
            >
                {zone}
            </div>
        </div>
    );
};

/* ── Roadmap pill ──────────────────────────────── */

const PILLAR_ICONS: Record<string, React.ReactNode> = {
    strategy: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
    ),
    development: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    integration: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
    ),
    optimization: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    ),
};

/* ── Main Component ──────────────────────────── */

const AuditResults = ({ data, email }: AuditResultsProps) => {
    const animatedLoss = useAnimatedNumber(data.annualLoss, 2000);

    return (
        <div className="audit-page">
            {/* Background effects */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/8 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="text-center mb-10 animate-fade-in">
                    <span className="text-accent text-xs font-medium tracking-widest uppercase">
                        Your AI Gap Report
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
                        Here&apos;s what we found
                    </h1>
                    <p className="text-muted text-sm mt-2">
                        A personalized analysis for <span className="text-foreground">{email}</span>
                    </p>
                </div>

                {/* Top stats row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* AI Maturity Gauge */}
                    <div className="audit-result-card audit-result-card--centered animate-fade-in-up animation-delay-100">
                        <h3 className="text-sm font-medium text-muted mb-4 text-center">AI Maturity Score</h3>
                        <RadialGauge score={data.maturityScore} zone={data.scoreZone} />
                    </div>

                    {/* Annual Loss */}
                    <div className="audit-result-card audit-result-card--centered animate-fade-in-up animation-delay-200">
                        <h3 className="text-sm font-medium text-muted mb-4 text-center">
                            Annual Inefficiency Cost
                        </h3>
                        <div className="flex flex-col items-center justify-center flex-1">
                            <span className="text-4xl md:text-5xl font-bold text-red-400">
                                ${animatedLoss.toLocaleString()}
                            </span>
                            <p className="text-xs text-muted mt-2 text-center max-w-[220px]">
                                Estimated yearly cost of manual, repetitive tasks
                            </p>
                        </div>
                    </div>
                </div>

                {/* 1. Gap Insight */}
                <div className="audit-result-card animate-fade-in-up animation-delay-300 mb-6">
                    <h3 className="text-sm font-medium text-muted mb-3">The Gap</h3>
                    <p className="text-sm leading-relaxed">{data.gapInsight}</p>
                </div>

                {/* 2. Roadmap */}
                <div className="audit-result-card animate-fade-in-up animation-delay-400 mb-6">
                    <h3 className="text-sm font-medium text-muted mb-4">Your Personalized Roadmap</h3>
                    <div className="space-y-4">
                        {(["strategy", "development", "integration", "optimization"] as const).map(
                            (pillar, i) => (
                                <div
                                    key={pillar}
                                    className={`audit-roadmap-pill animate-fade-in-up animation-delay-${(i + 1) * 100}`}
                                >
                                    <div className="audit-roadmap-icon">{PILLAR_ICONS[pillar]}</div>
                                    <div>
                                        <h4 className="text-sm font-semibold capitalize text-accent">
                                            {pillar}
                                        </h4>
                                        <p className="text-sm text-muted mt-0.5 leading-relaxed">
                                            {data.roadmap[pillar]}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* 3. Quick Win */}
                {data.quickWin && (
                    <div className="audit-result-card animate-fade-in-up animation-delay-500 mb-6">
                        <div className="flex items-start gap-3">
                            <span className="text-xl">⚡</span>
                            <div>
                                <h3 className="text-sm font-medium text-muted mb-1">Quick Win — Do This Today</h3>
                                <p className="text-sm leading-relaxed">{data.quickWin}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 4. Recommended Solution */}
                <div className="audit-result-card audit-result-card--accent animate-fade-in-up animation-delay-600 mb-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-muted mb-1">Recommended Solution</h3>
                            <p className="text-lg font-semibold text-accent">{data.agentMatch}</p>
                            <p className="text-sm text-muted mt-1 leading-relaxed">{data.agentMatchReason}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center animate-fade-in-up animation-delay-600 space-y-4">
                    <p className="text-muted text-sm max-w-md mx-auto">
                        {data.hook || "This audit is just the 'Strategy' phase. Ready for 'Implementation'?"}
                    </p>
                    <a
                        id="audit-cta-book"
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-xl text-sm tracking-wide hover:shadow-[0_0_30px_rgba(121,184,186,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Bridge the Gap — Book a Call with Jan
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <div>
                        <a
                            href="/"
                            className="text-xs text-muted hover:text-accent transition-colors"
                        >
                            ← Back to LOTRINO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditResults;
