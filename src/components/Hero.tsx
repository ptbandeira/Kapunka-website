import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-padding-hero bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzJEMjQxQiIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] bg-repeat"></div>
      </div>
      
      <div className="container-aesop relative z-10">
        <div className="grid-aesop items-center min-h-[85vh]">
          {/* Left Column - Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-1">
            <div className="space-y-aesop-large max-w-2xl animate-fade-in-up">
              {/* Label */}
              <p className="text-label text-subtle animate-fade-in-delay">
                Pure First-Press Argan Oil
              </p>
              
              {/* Main Headline - Premium refined typography */}
              <h1 className="heading-hero-refined animate-fade-in-delay">
                Quiet care for 
                <br />
                sensitive skin
              </h1>
              
              {/* Single line of copy - Premium text treatment */}
              <p className="body-large text-elegant animate-fade-in-delay-2">
                Pure first-press argan oil. Glass, traceable, method-led.
              </p>

              {/* Single Primary CTA - Premium button */}
              <div className="pt-8 animate-fade-in-delay-2">
                <Link 
                  href="/shop"
                  className="inline-flex items-center justify-center px-12 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wide uppercase hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover-lift-premium focus-ring-premium"
                >
                  Shop
                </Link>
              </div>

              {/* Subtle secondary link */}
              <div className="pt-12 animate-fade-in-delay-2">
                <Link 
                  href="/professionals"
                  className="body-small text-foreground hover:underline underline-offset-4 transition-all duration-300 hover:text-primary hover-fade-premium inline-block"
                >
                  For professionals
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Premium visual element */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="flex items-center justify-center h-full animate-slide-in-right">
              <div className="w-full max-w-md">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 border border-premium p-16 card-premium">
                  <div className="text-center space-y-8 animate-pulse-subtle">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover-scale-subtle">
                      <div className="w-12 h-12 bg-primary rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="heading-card text-gradient">Pure Origin</h4>
                      <p className="text-label text-premium">
                        First-Press Argan Oil
                      </p>
                      <div className="w-16 h-px bg-primary mx-auto opacity-50"></div>
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