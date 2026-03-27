"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/LOGO_NEW.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/#about", label: "The Mission" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/55 backdrop-blur-md supports-[backdrop-filter]:bg-black/45">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex min-h-11 items-center gap-3 rounded-md font-bold tracking-tight outline-none ring-offset-2 ring-offset-neutral-950 transition-opacity duration-300 hover:opacity-80 focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="LOTRINO home"
          >
            <Image src={Logo} alt="" width={27} height={36} priority className="h-9 w-auto" />
            <span className="gradient-text">LOTRINO</span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm tracking-wide text-muted outline-none ring-offset-2 ring-offset-neutral-950 transition-colors duration-300 hover:text-foreground focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn-glow relative z-10 inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium tracking-wide text-background outline-none ring-offset-2 ring-offset-neutral-950 focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-foreground outline-none ring-offset-2 ring-offset-neutral-950 transition-colors focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-nav" className="border-t border-white/5 py-4 animate-fade-in md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-h-11 rounded-lg px-2 py-2.5 text-sm tracking-wide text-muted outline-none ring-offset-2 ring-offset-neutral-950 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-center text-sm font-medium tracking-wide text-background outline-none ring-offset-2 ring-offset-neutral-950 focus-visible:ring-2 focus-visible:ring-accent"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
