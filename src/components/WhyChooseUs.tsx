import { CalendarCheck, ShieldCheck, MapPin, Tag, Lock, Home } from "lucide-react";

const features = [
  { icon: CalendarCheck, title: "Easy Booking", desc: "Book appointments in just 3 simple steps" },
  { icon: ShieldCheck, title: "Verified Partners", desc: "All hospitals and labs are accredited & verified" },
  { icon: MapPin, title: "Nearby Discovery", desc: "Find healthcare services close to your location" },
  { icon: Tag, title: "Exclusive Discounts", desc: "Save with coupons and bundled health packages" },
  { icon: Lock, title: "Secure Process", desc: "Your data and payments are fully encrypted" },
  { icon: Home, title: "Home Collection", desc: "Get blood samples collected at your doorstep" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Why Choose MedBook</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Built for your convenience, trusted by thousands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
