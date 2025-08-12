import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 animate-fadeInDown">
      <div className="container-premium">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            <a href="/" className="premium-heading text-2xl font-smooth hover-underline">
              Kapunka
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {['Skin', 'Body', 'Hair', 'Fragrance', 'Home'].map((item, index) => (
              <a 
                key={item}
                href={`/${item.toLowerCase()}`}
                className="premium-text text-sm uppercase tracking-widest hover-underline animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="premium-text hover-fade animate-fadeIn animation-delay-500">
              Search
            </button>
            <button className="premium-text hover-fade animate-fadeIn animation-delay-600">
              Account
            </button>
            <button className="premium-text hover-fade animate-fadeIn animation-delay-700">
              Cart
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-current transition-all duration-300"></div>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-6 pt-6 pb-4">
            {['Skin', 'Body', 'Hair', 'Fragrance', 'Home'].map((item) => (
              <a 
                key={item}
                href={`/${item.toLowerCase()}`}
                className="premium-text text-sm uppercase tracking-widest hover-underline"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-6 pt-4 border-t border-gray-100">
              <button className="premium-text text-left hover-fade">
                Search
              </button>
              <button className="premium-text text-left hover-fade">
                Account
              </button>
              <button className="premium-text text-left hover-fade">
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;