const services = [
  {
    number: "01",
    title: "Strategy",
    description: "AI roadmap aligned with your business goals",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Development",
    description: "Custom AI solutions built for your specific challenges",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Integration",
    description: "Seamless deployment into your existing infrastructure and workflows",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous refinement for maximum performance",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-16 lg:py-24 section-fade-bottom">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-accent text-xs font-medium tracking-widest uppercase">Our Services</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
            From idea to{" "}
            <span className="text-muted">implementation</span>
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-track">
            {/* Arrow: line = background, arrowhead = ::after, one element */}
            <div className="timeline-arrow" />
            {services.map((service, i) => (
              <div
                key={service.number}
                className={`timeline-item group animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                {/* Dot */}
                <div className="timeline-dot" />

                {/* Icon */}
                <div
                  className="timeline-icon bg-white/5 text-muted group-hover:bg-accent group-hover:text-background transition-all duration-300"
                >
                  {service.icon}
                </div>

                {/* Number + Title */}
                <span className="text-xs font-bold mt-3 text-accent/30 group-hover:text-accent/60 transition-colors duration-300">
                  {service.number}
                </span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Hover-reveal description */}
                <div className="timeline-reveal">
                  <p className="text-xs leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 lg:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </section>
  );
};

export default Services;
