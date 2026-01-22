import Link from "next/link";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/15 rounded-full blur-[100px] pulse-glow animation-delay-200" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-float" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-10">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs tracking-widest uppercase text-muted">
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
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted leading-relaxed animate-fade-in-up animation-delay-200">
            Everything we need to transform the world is already out there. 
            We bridge the gap between ideas and action—because real change 
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

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-500">
          <div className="flex flex-col items-center gap-2 text-muted">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
