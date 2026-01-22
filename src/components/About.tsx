const About = () => {
  return (
    <section id="about" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Vision */}
          <div className="space-y-6">
            <span className="text-accent text-xs tracking-widest uppercase">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Democratizing access to{" "}
              <span className="gradient-text">cutting-edge AI</span>
            </h2>
            <p className="text-muted leading-relaxed">
              We envision a future where businesses of all sizes harness the power of AI to unlock 
              unprecedented growth, efficiency, and innovation. Our mission is to make AI solutions 
              accessible, understandable, and actionable for every organization.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted mt-1">Human-Centered</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted mt-1">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="space-y-6 lg:pt-16">
            <span className="text-accent text-xs tracking-widest uppercase">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Technical expertise meets{" "}
              <span className="gradient-text">human touch</span>
            </h2>
            <p className="text-muted leading-relaxed">
              Every solution we create is designed not just to leverage the latest AI technologies, 
              but to empower your team, enhance your capabilities, and drive sustainable growth.
            </p>
            
            {/* Principles */}
            <div className="space-y-4 pt-4">
              {["Transparency", "Collaboration", "Real Impact"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <svg className="w-4 h-4 text-accent group-hover:text-background transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
