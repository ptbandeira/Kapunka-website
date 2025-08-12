import React from 'react';

const BrandEssence = () => {
  const values = [
    {
      title: "Botanical Integrity",
      description: "We source the finest plant extracts from sustainable growers around the world, ensuring potency and purity in every formulation.",
    },
    {
      title: "Scientific Rigor",
      description: "Our research combines traditional wisdom with contemporary science to create products that deliver visible results.",
    },
    {
      title: "Sensory Experience",
      description: "Each product engages multiple senses, transforming daily routines into moments of mindful indulgence.",
    },
  ];

  return (
    <section className="premium-bg-alt section-padding bg-pattern">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeInLeft">
            <h2 className="premium-heading text-3xl md:text-4xl mb-6 font-smooth">
              Our Commitment to Excellence
            </h2>
            <p className="premium-text mb-8 font-smooth">
              Since our inception, we have remained steadfast in our dedication to creating formulations 
              that honor both nature and science. We believe that true luxury lies in the thoughtful 
              consideration of every ingredient, every texture, and every fragrance.
            </p>
            <p className="premium-text mb-10 font-smooth">
              Our products are designed not only to enhance appearance but to elevate the everyday 
              ritual into a moment of contemplation and care.
            </p>
            <button className="premium-button hover-lift">
              <span>Our Story</span>
            </button>
          </div>
          
          <div className="space-y-10">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-fadeInRight"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="premium-heading text-xl mb-3 font-smooth hover-underline inline-block">
                  {value.title}
                </h3>
                <p className="premium-text font-smooth">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandEssence;