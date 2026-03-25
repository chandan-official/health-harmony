import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TestTube, HeartPulse, Droplets, Activity, Pill, Users, Baby, UserCheck } from "lucide-react";

const tests = [
  { icon: Droplets, name: "Complete Blood Count", price: 399, discount: 299, tag: "Popular" },
  { icon: Activity, name: "Thyroid Profile", price: 799, discount: 599, tag: "15% Off" },
  { icon: HeartPulse, name: "Diabetes Screening", price: 599, discount: 449, tag: "" },
  { icon: TestTube, name: "Full Body Checkup", price: 2499, discount: 1799, tag: "Best Value" },
  { icon: Pill, name: "Vitamin Panel", price: 1299, discount: 999, tag: "10% Off" },
  { icon: Baby, name: "Women's Health Package", price: 1999, discount: 1499, tag: "" },
  { icon: UserCheck, name: "Senior Citizen Package", price: 2999, discount: 2199, tag: "Recommended" },
  { icon: Users, name: "Family Health Package", price: 4999, discount: 3599, tag: "Save ₹1400" },
];

const PopularTests = () => {
  return (
    <section id="tests" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Popular Tests & Packages</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Affordable health screening packages with trusted labs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tests.map((test) => (
            <div
              key={test.name}
              className="bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-secondary-foreground group-hover:scale-110 transition-transform">
                  <test.icon className="h-5 w-5" />
                </div>
                {test.tag && (
                  <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                    {test.tag}
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-3">{test.name}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xl font-bold text-foreground">₹{test.discount}</span>
                <span className="text-sm text-muted-foreground line-through">₹{test.price}</span>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTests;
