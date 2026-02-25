"use client";

import Link from "next/link";
import PixelBlast from "@/components/PixelBlast";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* PixelBlast animated background */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#79b8ba"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.2}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Dark vignette for text readability */}
      <div className="hero-text-backdrop" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-10">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs tracking-widest uppercase text-white/70">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              AI Consulting & Implementation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-fade-in-up animation-delay-100">
            Transform Your
            <br />
            <span className="gradient-text glow-text">Business with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Everything we need to transform the world is already out there.
            We bridge the gap between ideas and action - because real change
            starts when you just do it.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up animation-delay-300">
            <Link
              href="#contact"
              className="btn-glow relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-semibold rounded-full text-sm tracking-wide z-10"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
