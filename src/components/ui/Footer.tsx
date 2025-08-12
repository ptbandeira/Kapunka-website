import React from 'react';

const Footer = () => {
  const footerLinks = {
    shop: ['Skin Care', 'Body & Hand', 'Hair', 'Fragrance', 'Home'],
    information: ['Our Story', 'Stockists', 'FAQ', 'Shipping & Returns', 'Contact'],
    legal: ['Terms & Conditions', 'Privacy Policy', 'Accessibility'],
    connect: ['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'YouTube']
  };

  return (
    <footer className="premium-bg section-padding bg-pattern border-t border-gray-100">
      <div className="container-premium">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2 animate-fadeInUp">
            <h3 className="premium-heading text-2xl mb-6 font-smooth">Kapunka</h3>
            <p className="premium-text mb-6 max-w-md font-smooth">
              Meticulously crafted formulations that harmonize botanical extracts with scientific innovation, 
              creating a sensorial experience that transcends the ordinary.
            </p>
            <p className="premium-text text-sm font-smooth">
              Subscribe to receive communications from Kapunka about exclusive products, 
              services, events, and more.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category} className="animate-fadeInUp" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h4 className="premium-heading text-sm uppercase tracking-widest mb-6 font-smooth">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="premium-text text-sm hover-underline block font-smooth"
                      style={{ animationDelay: `${categoryIndex * 0.1 + linkIndex * 0.05}s` }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="premium-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="premium-text text-sm mb-4 md:mb-0 font-smooth">
            © {new Date().getFullYear()} Kapunka. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Accessibility', 'Privacy Policy', 'Terms of Use'].map((item, index) => (
              <a 
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="premium-text text-sm hover-underline animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;