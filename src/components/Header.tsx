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
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold tracking-tight transition-all duration-300 hover:opacity-80"
            aria-label="Go to top"
          >
            <Image
              src={Logo}
              alt="LOTRINO logo"
              width={27}
              height={36}
              priority
              className="h-9 w-auto"
            />
            <span className="gradient-text">LOTRINO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-muted hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="btn-glow relative px-6 py-2.5 bg-accent text-background font-medium rounded-full text-sm tracking-wide z-10"
            >
              <span className="relative z-10">Get in Touch</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/5 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted hover:text-foreground transition-colors duration-300 text-sm tracking-wide py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-accent text-background font-medium rounded-full text-sm tracking-wide text-center"
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
