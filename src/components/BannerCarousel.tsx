import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerLab from "@/assets/banner-lab.jpg";
import bannerWellness from "@/assets/banner-wellness.jpg";
import bannerFamily from "@/assets/banner-family.jpg";

const banners = [
  {
    image: bannerLab,
    title: "First Lab Booking Discount",
    subtitle: "Get 20% off on your first diagnostic test booking",
    cta: "Book Now",
  },
  {
    image: bannerWellness,
    title: "Preventive Health Checkup",
    subtitle: "Comprehensive screenings starting at ₹999",
    cta: "Explore Packages",
  },
  {
    image: bannerFamily,
    title: "Family Health Package",
    subtitle: "Complete family wellness plans with home collection",
    cta: "View Plans",
  },
];

const BannerCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? banners.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === banners.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-elevated">
          <div className="relative h-64 md:h-80 lg:h-96">
            {banners.map((b, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <img src={b.image} alt={b.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 md:px-16">
                  <div className="max-w-md space-y-4">
                    <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground">{b.title}</h3>
                    <p className="text-primary-foreground/80">{b.subtitle}</p>
                    <Button variant="hero" size="lg">{b.cta}</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-card transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary-foreground w-6" : "bg-primary-foreground/40"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
