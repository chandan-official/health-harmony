import { Copy, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const coupons = [
  {
    code: "FLAT10",
    title: "10% Off First Booking",
    desc: "Applicable on doctor appointments & lab tests",
    terms: "Min. booking ₹500 · Valid for new users",
    color: "from-primary/10 to-secondary",
  },
  {
    code: "SAVE20",
    title: "₹200 Off Full Body Checkup",
    desc: "Save on comprehensive health packages",
    terms: "Min. package value ₹1,500 · Limited period",
    color: "from-info/10 to-accent",
  },
  {
    code: "LAB15",
    title: "15% Off Diagnostic Packages",
    desc: "Discount on all diagnostic lab packages",
    terms: "Max discount ₹500 · All users",
    color: "from-success/10 to-secondary",
  },
];

const PromoCoupons = () => {
  return (
    <section id="offers" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Exclusive Offers</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Special discounts on bookings and health packages.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coupons.map((c) => (
            <div
              key={c.code}
              className={`bg-gradient-to-br ${c.color} rounded-2xl p-6 border border-border/50 hover:shadow-elevated transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-5 w-5 text-primary" />
                <Badge variant="outline" className="text-primary border-primary/30 bg-card/80">
                  {c.code}
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{c.terms}</span>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
                  <Copy className="h-3.5 w-3.5" />
                  Copy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCoupons;
