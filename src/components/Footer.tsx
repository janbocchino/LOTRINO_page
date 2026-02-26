import Image from "next/image";
import Logo from "@/assets/LOGO_NEW.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <a
              href="#top"
              className="flex items-center gap-3 font-bold tracking-tight hover:opacity-80 transition-opacity"
              aria-label="Go to top"
            >
              <Image
                src={Logo}
                alt="LOTRINO logo"
                width={24}
                height={32}
                className="h-8 w-auto"
              />
              <span className="gradient-text">LOTRINO</span>
            </a>
            <a
              href="mailto:office@lotrino.com"
              className="link-underline text-muted hover:text-foreground transition-colors text-sm"
            >
              office@lotrino.com
            </a>
          </div>

          <span className="text-sm text-muted">© {currentYear} LOTRINO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
