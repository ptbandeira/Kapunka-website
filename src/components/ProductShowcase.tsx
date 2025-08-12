import Link from "next/link";

const products = [
  {
    id: "pure-argan",
    name: "Pure Argan Oil",
    size: "30ml",
    price: "€48",
    description: "First-press argan oil for daily comfort"
  },
  {
    id: "professional", 
    name: "Professional Back-Bar",
    size: "100ml",
    price: "€128",
    description: "Clinic and spa treatment size"
  },
  {
    id: "amenity",
    name: "Hotel Amenity", 
    size: "2–5ml",
    price: "Contact for pricing",
    description: "Travel-sized comfort with QR method"
  }
];

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwSDEwME01MCAwVjEwMCIgc3Ryb2tlPSIjMkQyNDFCIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>
      
      <div className="container-aesop relative z-10">
        {/* Section Header - Premium refinement */}
        <div className="text-center mb-aesop-large animate-fade-in-up">
          <p className="text-label text-subtle mb-aesop animate-fade-in-delay">
            Our Collection
          </p>
          <h2 className="heading-section-refined animate-fade-in-delay">
            Pure Comfort.
            <br />
            No Clutter.
          </h2>
        </div>

        {/* Product Grid - Premium card design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-aesop-large">
          {products.map((product, index) => (
            <div key={product.id} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-premium p-12 h-full flex flex-col hover-lift-premium">
                {/* Size indicator */}
                <p className="text-label text-subtle mb-aesop-small">
                  {product.size}
                </p>
                
                {/* Product name */}
                <h3 className="heading-card mb-aesop text-elevated">
                  {product.name}
                </h3>
                
                {/* Single line description */}
                <p className="body-base text-elegant mb-aesop flex-grow">
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="pt-aesop border-t border-border mt-auto">
                  <div className="flex items-center justify-between mb-aesop-small">
                    <p className="text-price text-gradient">
                      {product.price}
                    </p>
                  </div>
                  
                  <Link 
                    href="/shop"
                    className="body-small text-foreground hover:underline underline-offset-4 hover:text-primary transition-all duration-300 inline-block hover-fade-premium"
                  >
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Storytelling Section - Premium refinement */}
        <div className="border-y border-border py-aesop-large bg-premium-subtle animate-fade-in-delay">
          <div className="grid-aesop items-center">
            <div className="col-span-12 lg:col-span-5 lg:col-start-1">
              <div className="space-y-aesop animate-slide-in-left">
                <h3 className="heading-section-refined">
                  Traceability &amp; 
                  <br />
                  Transparency
                </h3>
                
                <p className="body-large text-elegant">
                  We believe in complete transparency. Every bottle tells a story of origin, quality, and care.
                </p>
                
                <div className="space-y-aesop">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-px bg-primary transition-all duration-300 group-hover:w-16"></div>
                    <p className="body-base text-elegant hover-scale-subtle">Origin documented</p>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-px bg-primary transition-all duration-300 group-hover:w-16"></div>
                    <p className="body-base text-elegant hover-scale-subtle">Batch/lot visible</p>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-px bg-primary transition-all duration-300 group-hover:w-16"></div>
                    <p className="body-base text-elegant hover-scale-subtle">QR to method</p>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-px bg-primary transition-all duration-300 group-hover:w-16"></div>
                    <p className="body-base text-elegant hover-scale-subtle">Glass packaging</p>
                  </div>
                </div>
                
                <Link 
                  href="/shop"
                  className="inline-flex items-center justify-center px-12 py-4 border border-foreground text-foreground font-body text-sm tracking-wide uppercase hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-lg hover-lift-premium focus-ring-premium"
                >
                  Explore Full Collection
                </Link>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className="flex items-center justify-center animate-slide-in-right">
                <div className="w-full max-w-sm">
                  <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 border border-premium p-16 card-premium">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover-scale-subtle">
                        <div className="w-10 h-10 bg-primary rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="heading-card text-gradient">Pure Origin</h4>
                        <p className="text-label text-premium">
                          First-Press Argan Oil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}