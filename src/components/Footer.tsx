const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a href="#top" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              <span className="gradient-text">LOTRINO</span>
            </a>
            <a
              href="mailto:jan@lotrino.com"
              className="link-underline text-muted hover:text-foreground transition-colors text-sm"
            >
              jan@lotrino.com
            </a>
          </div>

          <span className="text-sm text-muted">© {currentYear} LOTRINO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
