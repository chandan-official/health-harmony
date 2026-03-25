import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary-foreground font-bold text-xl mb-4">
              <Heart className="h-5 w-5 fill-primary text-primary" />
              MedBook
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Your trusted platform for booking hospital appointments, lab tests, and health packages near you.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <Phone className="h-4 w-4" />
              <span>1800-123-4567</span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>support@medbook.in</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {["About Us", "Hospitals", "Labs", "Offers", "Blog"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {["Doctor Appointment", "Blood Test", "Full Body Checkup", "Home Collection", "Health Packages"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              {["Privacy Policy", "Terms of Service", "Refund Policy", "Disclaimer"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © 2026 MedBook. All rights reserved. Built with care for your health.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
