import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/LOGO_NEW.png";

const linkClass =
  "link-underline rounded-sm text-sm text-muted outline-none ring-offset-2 ring-offset-neutral-950 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-neutral-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            <div className="flex flex-col gap-3">
              <a
                href="#top"
                className="flex w-fit min-h-11 items-center gap-3 rounded-md font-bold tracking-tight outline-none ring-offset-2 ring-offset-neutral-950 transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Back to top"
              >
                <Image src={Logo} alt="" width={24} height={32} className="h-8 w-auto" />
                <span className="gradient-text">LOTRINO</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jan-bocchino-5a6008235/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Jan Bocchino
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold tracking-wide text-foreground">Connect</p>
              <a
                href="https://linkedin.com/company/lotrino"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold tracking-wide text-foreground">Legal</p>
              <Link href="/imprint" className={linkClass}>
                Imprint
              </Link>
              <Link href="/privacy-policy" className={linkClass}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={linkClass}>
                Terms & Conditions
              </Link>
            </div>
          </div>

          <p className="text-xs text-muted md:text-sm">© {new Date().getFullYear()} Lotrino. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
