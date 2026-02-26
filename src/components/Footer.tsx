import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/LOGO_NEW.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 – Brand */}
            <div className="flex flex-col gap-2">
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
                href="https://www.linkedin.com/in/jan-bocchino-5a6008235/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-muted hover:text-foreground transition-colors"
              >
                Jan Bocchino
              </a>
            </div>

            {/* Column 2 – Connect */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold tracking-wide text-foreground">
                Connect
              </p>
              <a
                href="https://linkedin.com/company/lotrino"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </div>

            {/* Column 3 – Legal */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold tracking-wide text-foreground">
                Legal
              </p>
              <Link
                href="/imprint"
                className="link-underline text-sm text-muted hover:text-foreground transition-colors"
              >
                Imprint
              </Link>
              <Link
                href="/privacy-policy"
                className="link-underline text-sm text-muted hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="link-underline text-sm text-muted hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          <p className="text-xs md:text-sm text-muted">
            © 2026 Lotrino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
