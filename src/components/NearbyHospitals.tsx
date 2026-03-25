import { Star, MapPin, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const hospitals = [
  {
    name: "Apollo Multispeciality Hospital",
    specialties: ["Cardiology", "Orthopedics", "Neurology"],
    rating: 4.8,
    reviews: 1240,
    location: "Banjara Hills",
    distance: "2.3 km",
    slots: "12 slots available",
    hasVideo: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=260&fit=crop",
  },
  {
    name: "Fortis Healthcare",
    specialties: ["Oncology", "Gastroenterology", "Pediatrics"],
    rating: 4.7,
    reviews: 980,
    location: "Jubilee Hills",
    distance: "3.1 km",
    slots: "8 slots available",
    hasVideo: true,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=260&fit=crop",
  },
  {
    name: "CARE Hospitals",
    specialties: ["Dermatology", "ENT", "General Medicine"],
    rating: 4.6,
    reviews: 756,
    location: "Nampally",
    distance: "4.5 km",
    slots: "5 slots available",
    hasVideo: false,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=260&fit=crop",
  },
];

const NearbyHospitals = () => {
  return (
    <section id="hospitals" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Nearby Hospitals</h2>
            <p className="text-muted-foreground">Top-rated hospitals in your area</p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary">
            View All →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((h) => (
            <div
              key={h.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={h.image} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {h.hasVideo && (
                  <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground gap-1">
                    <Video className="h-3 w-3" /> Video Consult
                  </Badge>
                )}
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg text-foreground">{h.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {h.specialties.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold text-foreground">{h.rating}</span>
                    ({h.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {h.distance}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-success">
                  <Clock className="h-3.5 w-3.5" />
                  {h.slots}
                </div>
                <div className="flex gap-2 pt-1">
                  <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                  <Button size="sm" className="flex-1">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyHospitals;
