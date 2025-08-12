import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Facial Cleanser",
      description: "A gentle yet effective cleanser that purifies without stripping the skin's natural moisture barrier.",
      category: "Skincare",
    },
    {
      id: 2,
      name: "Hydrating Serum",
      description: "Potent hydration that penetrates deeply to replenish and revitalize tired skin.",
      category: "Skincare",
    },
    {
      id: 3,
      name: "Body Exfoliant",
      description: "Refines skin texture with finely milled particles and nourishing botanical oils.",
      category: "Body Care",
    },
  ];

  return (
    <section className="premium-bg section-padding">
      <div className="container-premium">
        <div className="text-center mb-16">
          <h2 className="premium-heading text-3xl md:text-4xl mb-4 animate-fadeIn font-smooth">
            Curated Formulations
          </h2>
          <p className="premium-text max-w-2xl mx-auto animate-fadeInUp animation-delay-200 font-smooth">
            Each product in our collection represents the culmination of extensive research and 
            a commitment to exceptional quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="premium-card p-6 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="mb-4 relative overflow-hidden rounded-lg bg-gray-100 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-70"></div>
                <div className="text-accent text-5xl font-display z-10">
                  {product.id}
                </div>
              </div>
              
              <div className="mb-2">
                <span className="text-xs uppercase tracking-widest text-accent font-smooth">
                  {product.category}
                </span>
              </div>
              
              <h3 className="premium-heading text-xl mb-3 font-smooth">
                {product.name}
              </h3>
              
              <p className="premium-text text-sm mb-6 font-smooth">
                {product.description}
              </p>
              
              <button className="premium-button text-sm w-full hover-lift">
                <span>Discover</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fadeInUp animation-delay-600">
          <button className="premium-button hover-lift">
            <span>View Complete Collection</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;