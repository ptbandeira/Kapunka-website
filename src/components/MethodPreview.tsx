import { Card, CardContent } from "@/components/ui/card";
import { Droplet, Hand, Sun, Wind, Pause } from "lucide-react";

const methodSteps = [
  {
    icon: Droplet,
    title: "Dose",
    description: "3–5 drops in clean hands",
    detail: "Begin with the perfect amount. Too little won't nourish, too much overwhelms sensitive skin."
  },
  {
    icon: Hand,
    title: "Warm",
    description: "Rub palms lightly to spread and warm",
    detail: "Gentle friction activates the oil and brings it to skin temperature for better absorption."
  },
  {
    icon: Sun,
    title: "Press",
    description: "Place hands on face and neck with gentle pressure",
    detail: "Pressing allows the oil to penetrate rather than sit on the surface."
  },
  {
    icon: Wind,
    title: "Glide",
    description: "Light–medium touch, avoid friction on sensitized areas",
    detail: "Smooth, deliberate movements distribute the oil evenly without disturbing the skin barrier."
  },
  {
    icon: Pause,
    title: "Pause",
    description: "Let the finish settle, breathe",
    detail: "This moment of stillness allows the skin to fully receive the benefits of the ritual."
  }
];

export default function MethodPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            The Kapunka Method
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, repeatable way to apply pure first-press argan oil. 
            Taught with respect for sensitive skin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {methodSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="bg-background border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-body text-primary font-medium">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className="font-body text-xs text-foreground/70">
                    {step.detail}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <blockquote className="font-body text-base md:text-lg text-foreground/80 italic max-w-2xl mx-auto mb-6">
            "I teach hands to slow down. Skin answers with calm."
            <footer className="mt-2 text-sm text-muted-foreground not-italic">
              — Mónica Ruiz, Founder
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}