"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = [
    { code: "EN", label: "English" },
    { code: "ES", label: "Español" },
    { code: "PT", label: "Português" },
  ];

  const navItems = [
    { href: "/shop", label: "Shop" },
    { href: "/clean-transparent", label: "Clean & Transparent" },
    { href: "/professionals", label: "Professionals" },
    { href: "/origin", label: "Origin" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="container-aesop">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Premium refinement */}
          <Link href="/" className="font-heading text-2xl text-foreground tracking-wide hover:text-primary transition-all duration-300 hover-scale-subtle">
            KAPUNKA
          </Link>

          {/* Desktop Navigation - Premium refinement */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="body-small text-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 relative group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Language Selector - Premium refinement */}
          <div className="hidden md:flex items-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent border-none body-small text-foreground focus:outline-none cursor-pointer hover:text-primary transition-all duration-300"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.code}
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Menu - Premium refinement */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-accent-subtle transition-all duration-300 rounded-lg hover-lift-premium"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground hover:text-primary transition-all duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-foreground hover:text-primary transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay - Premium refinement */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40 pt-24 animate-fade-in-up">
            <div className="container-aesop">
              <nav className="space-y-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block body-large text-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 hover-lift-premium"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="body-small text-muted-foreground">Language</span>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border-none body-small text-foreground focus:outline-none cursor-pointer hover:text-primary transition-all duration-300"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}