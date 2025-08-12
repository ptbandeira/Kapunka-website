import Link from "next/link";

const values = [
  {
    title: "Purity & Simplicity",
    description: "Pure first-press argan oil. Nothing unnecessary. Everything essential."
  },
  {
    title: "Craft & Origin", 
    description: "Documented sourcing from tree to bottle. Traditional methods, modern quality."
  },
  {
    title: "Dignity & Respect",
    description: "For sensitive skin, for the hands that apply, for the communities we source from."
  },
  {
    title: "Stewardship",
    description: "Glass over plastic. Refill programs. Sustainable practices at every step."
  },
  {
    title: "Consistency & Transparency",
    description: "Same quality, every time. Clear documentation, no hidden ingredients."
  }
];

export default function BrandEssence() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIgZmlsbD0iIzJEMjQxQiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>
      
      <div className="container-aesop relative z-10">
        {/* Section Header - Premium refinement */}
        <div className="text-center mb-aesop-large animate-fade-in-up">
          <p className="text-label text-subtle mb-aesop animate-fade-in-delay">
            Our Philosophy
          </p>
          <h2 className="heading-section-refined animate-fade-in-delay">
            What We Never
            <br />
            Trade
          </h2>
        </div>

        {/* Values Grid - Premium card design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-aesop-large bg-premium-subtle py-aesop-large">
          {values.map((value, index) => (
            <div key={value.title} className="card-premium p-12 animate-fade-in-up hover-lift-premium" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="heading-card mb-aesop text-elevated">
                {value.title}
              </h3>
              <p className="body-base text-elegant">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Story - Premium refinement */}
        <div className="border-y border-border py-aesop-large animate-fade-in-delay">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-aesop-large animate-slide-in-left">
              <h3 className="heading-section-refined">
                Founder
                <br />
                Credibility
              </h3>
              
              <div className="space-y-aesop">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-px bg-primary mt-3 transition-all duration-300 group-hover:w-20"></div>
                  <div>
                    <h4 className="heading-card mb-aesop-small text-elevated">
                      Clinical Experience
                    </h4>
                    <p className="body-base text-elegant">
                      Mónica Ruiz, nurse and manual therapist, now studying medicine. 
                      Clinical experience shapes every aspect of our method and training.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-px bg-primary mt-3 transition-all duration-300 group-hover:w-20"></div>
                  <div>
                    <h4 className="heading-card mb-aesop-small text-elevated">
                      Iberian Craft
                    </h4>
                    <p className="body-base text-elegant">
                      First-press argan oil with documented origin. Sourced with respect, 
                      processed with care, delivered with consistency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-px bg-primary mt-3 transition-all duration-300 group-hover:w-20"></div>
                  <div>
                    <h4 className="heading-card mb-aesop-small text-elevated">
                      Compliance First
                    </h4>
                    <p className="body-base text-elegant">
                      Cosmetics-safe language, full documentation available. 
                      Claims kept to comfort and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center animate-slide-in-right">
              <div className="w-full max-w-md">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 border border-premium p-16 card-premium">
                  <div className="text-center space-y-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover-scale-subtle">
                      <div className="w-10 h-10 bg-primary rounded-full"></div>
                    </div>
                    <div className="space-y-6">
                      <blockquote className="body-large text-foreground italic leading-relaxed text-elegant">
                        "I teach hands to slow down. Skin answers with calm."
                      </blockquote>
                      <footer className="text-label text-premium">
                        — Mónica Ruiz, Founder
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values as tags - Premium refinement */}
        <div className="text-center pt-aesop-large animate-fade-in-delay-2">
          <div className="flex flex-wrap justify-center gap-6">
            {values.map((value, index) => (
              <span 
                key={value.title} 
                className="body-small text-muted-foreground uppercase tracking-wide px-8 py-4 border border-premium hover:border-primary transition-all duration-300 hover-scale-subtle hover-lift-premium"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {value.title}
              </span>
            ))}
          </div>
          
          <div className="mt-aesop-large">
            <Link 
              href="/origin"
              className="inline-flex items-center justify-center px-12 py-4 border border-foreground text-foreground font-body text-sm tracking-wide uppercase hover:bg-foreground hover:text-background transition-all duration-300 hover:shadow-lg hover-lift-premium focus-ring-premium"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}