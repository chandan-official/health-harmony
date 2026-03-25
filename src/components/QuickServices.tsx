import { Stethoscope, Building2, TestTube, HeartPulse, PackageCheck, Home } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Doctor Appointment", desc: "Consult top specialists near you", color: "bg-primary/10 text-primary" },
  { icon: Building2, title: "Hospital Consultation", desc: "Visit verified hospitals nearby", color: "bg-info/10 text-info" },
  { icon: TestTube, title: "Blood Test Booking", desc: "Book lab tests at best prices", color: "bg-destructive/10 text-destructive" },
  { icon: HeartPulse, title: "Full Body Checkup", desc: "Comprehensive health screening", color: "bg-success/10 text-success" },
  { icon: PackageCheck, title: "Diagnostic Packages", desc: "Bundled tests with savings", color: "bg-warning/10 text-warning" },
  { icon: Home, title: "Home Sample Collection", desc: "Get tested from your doorstep", color: "bg-accent-foreground/10 text-accent-foreground" },
];

const QuickServices = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Our Services</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need for your health — from doctor visits to home diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/50"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickServices;
