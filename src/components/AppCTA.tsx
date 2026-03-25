import { Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevated border border-border/50 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-secondary text-primary flex items-center justify-center mx-auto mb-6">
            <Smartphone className="h-8 w-8" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Book Faster on the App
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Download the MedBook app for instant bookings, real-time slot updates, and exclusive app-only discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl">
              Download App
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Continue on Web
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
