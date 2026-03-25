import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    feedback: "Booked a full body checkup in under 2 minutes. The lab was nearby, professional, and the reports came quickly. Highly recommended!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    city: "Delhi",
    feedback: "Finding a specialist near my area was so easy. The doctor consultation was excellent and the booking process was seamless.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Anita Desai",
    city: "Bangalore",
    feedback: "Used the home sample collection for my parents. Very convenient and the pricing was transparent. No hidden charges at all.",
    rating: 4,
    avatar: "AD",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real stories from people who trust MedBook for their healthcare needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6">{t.feedback}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
