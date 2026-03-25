import { Search, CalendarCheck, Tag, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Search Nearby", desc: "Find hospitals or labs near your location" },
  { icon: CalendarCheck, step: "02", title: "Select & Schedule", desc: "Choose doctor/test and pick a convenient slot" },
  { icon: Tag, step: "03", title: "Apply Coupon", desc: "Use discount codes to save on your booking" },
  { icon: CheckCircle2, step: "04", title: "Confirm Booking", desc: "Review details and confirm your appointment" },
];

const BookingFlow = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">How It Works</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Book your appointment in 4 simple steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary text-primary mb-5 group-hover:shadow-soft transition-all duration-300 group-hover:scale-105">
                <s.icon className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingFlow;
