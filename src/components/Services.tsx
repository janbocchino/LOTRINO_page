const Services = () => {
  return (
    <section id="services" className="relative py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          
          {/* Header Card - Spans 2 columns */}
          <div className="md:col-span-2 lg:col-span-2 bg-surface-light rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[140px]">
            <span className="text-accent text-xs font-medium">Our Services</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
              From idea to<br />
              <span className="text-muted">implementation</span>
            </h2>
          </div>

          {/* Strategy Card */}
          <div className="group bg-surface-light rounded-2xl p-6 lg:p-7 min-h-[160px] flex flex-col justify-between hover:bg-accent/10 transition-colors duration-500 cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-5xl lg:text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">01</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-muted group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">Strategy</h3>
              <p className="text-muted text-xs">AI roadmap aligned with your business goals</p>
            </div>
          </div>

          {/* Development Card - Tall */}
          <div className="group bg-surface-light rounded-2xl p-6 lg:p-7 min-h-[160px] lg:row-span-2 flex flex-col justify-between hover:bg-accent/10 transition-colors duration-500 cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-5xl lg:text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">02</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-muted group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">Development</h3>
              <p className="text-muted text-xs">Custom AI solutions built for your specific challenges</p>
            </div>
          </div>

          {/* Integration Card - Wide */}
          <div className="group md:col-span-2 lg:col-span-2 bg-surface-light rounded-2xl p-6 lg:p-7 min-h-[140px] flex flex-col justify-between hover:bg-accent/10 transition-colors duration-500 cursor-pointer">
            <div className="flex justify-between items-start">
              <span className="text-5xl lg:text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-500">03</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4 text-muted group-hover:text-background transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">Integration</h3>
              <p className="text-muted text-xs max-w-md">Seamless deployment into your existing infrastructure and workflows</p>
            </div>
          </div>

          {/* Optimization Card */}
          <div className="group bg-accent rounded-2xl p-6 lg:p-7 min-h-[160px] flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start">
              <span className="text-5xl lg:text-6xl font-bold text-background/20">04</span>
              <div className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1 text-background">Optimization</h3>
              <p className="text-background/70 text-xs">Continuous refinement for maximum performance</p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="md:col-span-2 lg:col-span-2 bg-surface-light rounded-2xl p-6 lg:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm text-muted">
              Ready to transform your business with AI?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-background text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300"
            >
              Get started
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
