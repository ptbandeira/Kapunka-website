import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern-subtle">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-90 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/5 animate-fadeIn"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/5 animate-fadeIn animation-delay-300"></div>
      
      <div className="container-premium relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="premium-heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-fadeInDown font-smooth">
            <span className="block">Elevating Everyday</span>
            <span className="block text-accent mt-2">Rituals</span>
          </h1>
          
          <p className="premium-text text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeInUp animation-delay-200 font-smooth">
            Discover meticulously crafted formulations that harmonize botanical extracts with scientific innovation, 
            creating a sensorial experience that transcends the ordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button className="premium-button hover-lift">
              <span>Explore Collection</span>
            </button>
            <button className="premium-button hover-lift">
              <span>Our Philosophy</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;