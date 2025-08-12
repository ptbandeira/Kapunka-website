import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Pure Argan Oil", href: "/shop#pure-argan" },
      { label: "Professional Back-Bar", href: "/shop#professional" },
      { label: "Hotel Amenity", href: "/shop#amenity" },
    ],
    company: [
      { label: "The Method", href: "/method" },
      { label: "Our Origin", href: "/origin" },
      { label: "Professionals", href: "/professionals" },
    ],
    support: [
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Shipping", href: "/shipping" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Compliance", href: "/compliance" },
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/kapunka", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/kapunka", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzJEMjQxQiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand Column - Premium refinement */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="font-heading text-lg text-foreground tracking-wide hover:text-primary transition-all duration-300 hover-scale-subtle inline-block">
                  KAPUNKA
                </span>
              </div>
              
              <p className="font-body text-base text-muted-foreground mb-8 leading-relaxed max-w-md text-elegant">
                Quiet strength. Pure care. Calm and comfort for sensitive skin 
                with pure first-press argan oil and a simple, disciplined method.
              </p>
              
              <div className="space-y-3">
                <p className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  care@kapunka.com
                </p>
                <p className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  +34 900 123 456
                </p>
                <p className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300">
                  Madrid & Lisbon
                </p>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-body text-sm font-medium text-foreground uppercase tracking-[0.2em] mb-6 text-elevated">
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 inline-block"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-body text-sm font-medium text-foreground uppercase tracking-[0.2em] mb-6 text-elevated">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 inline-block"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Legal */}
            <div className="space-y-8">
              <div>
                <h3 className="font-body text-sm font-medium text-foreground uppercase tracking-[0.2em] mb-6 text-elevated">
                  Support
                </h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 inline-block"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-body text-sm font-medium text-foreground uppercase tracking-[0.2em] mb-6 text-elevated">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline underline-offset-4 inline-block"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Premium refinement */}
        <div className="border-t border-border py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-8">
              <p className="font-body text-sm text-muted-foreground text-subtle">
                © 2024 Kapunka. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale-subtle"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="hover:text-primary transition-all duration-300 cursor-pointer">ES/PT | EN</span>
              <span className="hidden lg:inline">•</span>
              <span className="hidden lg:inline hover:text-primary transition-all duration-300 cursor-pointer">Batch/Lot on every unit</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}