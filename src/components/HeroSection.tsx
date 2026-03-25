import { Search, MapPin, Stethoscope, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-healthcare.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Healthcare professionals" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary-foreground/90">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            Trusted by 50,000+ patients
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground">
            Book Hospital Appointments & Lab Tests{" "}
            <span className="text-primary brightness-150">Near You</span>
          </h1>

          <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
            Find verified hospitals, book doctor consultations, and schedule diagnostic
            tests — all in one place. Fast, secure, and convenient.
          </p>

          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-3 shadow-elevated max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
                <Stethoscope className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Service type"
                  className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2.5">
                <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Hospital / Lab"
                  className="bg-transparent text-sm w-full outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Button variant="hero" size="lg" className="flex-1">
                <Search className="h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="hero-outline" size="lg" className="flex-1">
                Book Blood Test
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">500+</span> Hospitals
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">1,200+</span> Doctors
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary-foreground">300+</span> Labs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
