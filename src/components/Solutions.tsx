"use client";

import PixelCard from "@/components/PixelCard";

interface Solution {
    title: string;
    tagline: string;
    icon: React.ReactNode;
    colSpan2?: boolean;
}

const solutions: Solution[] = [
    {
        title: "SEO Agents",
        tagline:
            "Dominate search rankings with AI that writes and optimizes pages in lightning speed",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        ),
    },
    {
        title: "Social Media Agents",
        tagline: "Let AI craft, schedule, and amplify your social presence",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
            </svg>
        ),
    },
    {
        title: "Agents for Internal Processes",
        tagline: "Streamline operations with AI that works around the clock",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
        ),
    },
    {
        title: "E-Commerce Agents",
        tagline: "AI-driven E-Commerce OS that handles your online sales",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
            </svg>
        ),
    },
    {
        title: "Custom Solutions",
        tagline: "AI solutions designed specifically for your unique business challenges.",
        icon: (
            <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
            </svg>
        ),
        colSpan2: true,
    },
];

const Solutions = () => {
    return (
        <section
            id="solutions"
            className="relative py-16 lg:py-20 section-fade-top section-fade-bottom"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 lg:mb-12">
                    <span className="text-accent text-xs font-medium tracking-widest uppercase">
                        Our Solutions
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
                        AI Agents, tailored for{" "}
                        <span className="text-muted">your business</span>
                    </h2>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    {solutions.map((solution, i) => (
                        <div
                            key={solution.title}
                            className={`animate-fade-in-up animation-delay-${(i + 1) * 100} ${solution.colSpan2 ? "sm:col-span-2" : ""}`}
                        >
                            <PixelCard
                                gap={6}
                                speed={30}
                                colors="#1a3a3b,#79b8ba,#4e8a8c"
                            >
                                {/* Dark vignette for text readability */}
                                <div
                                    className="absolute inset-0 z-[5] pointer-events-none"
                                    style={{
                                        background: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)",
                                    }}
                                />
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center gap-3">
                                    {/* Icon */}
                                    <div className="text-accent">
                                        {solution.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                                        {solution.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className="text-sm md:text-base text-muted leading-relaxed max-w-xs" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                                        {solution.tagline}
                                    </p>
                                </div>
                            </PixelCard>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 lg:mt-16 flex flex-col items-center justify-center gap-5">
                    <p className="text-muted text-base">
                        Curious which solution fits your business?
                    </p>
                    <a
                        id="solutions-audit-cta"
                        href="/audit"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-background text-base md:text-lg font-bold rounded-full shadow-[0_0_25px_rgba(121,184,186,0.3)] hover:shadow-[0_0_45px_rgba(121,184,186,0.5)] hover:-translate-y-1 transition-all duration-300"
                    >
                        Discover Your AI Gap
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="text-sm text-muted hover:text-accent transition-colors duration-300"
                    >
                        or just say hello →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
