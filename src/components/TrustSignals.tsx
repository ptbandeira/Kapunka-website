import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Heart, Award } from "lucide-react";

const trustSignals = [
  {
    icon: CheckCircle,
    title: "Founder Credibility",
    description: "Mónica Ruiz, nurse and manual therapist, now studying medicine",
    detail: "Clinical experience shapes every aspect of our method and training."
  },
  {
    icon: Globe,
    title: "Iberian Craft",
    description: "First-press argan oil with documented origin",
    detail: "Sourced with respect, processed with care, delivered with consistency."
  },
  {
    icon: Heart,
    title: "Hospitality Ready",
    description: "Sized and scripted for clinics, spas, and hotels",
    detail: "Professional protocols, bilingual materials, co-branding options."
  },
  {
    icon: Award,
    title: "Compliance First",
    description: "Cosmetics-safe language, full documentation available",
    detail: "CPSR/PIF/CPNP on request. Claims kept to comfort and support."
  }
];

const values = [
  "Purity & Simplicity",
  "Craft & Origin", 
  "Dignity & Respect",
  "Stewardship",
  "Consistency & Transparency"
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            What We Never Trade
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our values guide every decision, from sourcing to service. 
            These principles are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <Card key={signal.title} className="bg-background border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-foreground mb-2">
                        {signal.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-3">
                        {signal.description}
                      </p>
                      <p className="font-body text-sm text-foreground/70">
                        {signal.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-background rounded-lg p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl text-foreground mb-4">
              Our Core Values
            </h3>
            <p className="font-body text-muted-foreground">
              These principles shape our products, our service, and our relationships.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {values.map((value) => (
              <Badge 
                key={value} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-body"
              >
                {value}
              </Badge>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <blockquote className="font-body text-base md:text-lg text-foreground/80 italic max-w-2xl mx-auto">
            "Gratitude is a method, not a slogan."
            <footer className="mt-2 text-sm text-muted-foreground not-italic">
              — Mónica Ruiz, Founder
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}