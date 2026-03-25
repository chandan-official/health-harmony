import { Star, MapPin, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const labs = [
  {
    name: "PathCare Diagnostics",
    categories: ["Blood Tests", "Imaging", "Pathology"],
    rating: 4.9,
    distance: "1.8 km",
    homeCollection: true,
    nabl: true,
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=220&fit=crop",
  },
  {
    name: "MedLab Diagnostics",
    categories: ["CBC", "Thyroid", "Vitamin Panel"],
    rating: 4.7,
    distance: "2.5 km",
    homeCollection: true,
    nabl: true,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=220&fit=crop",
  },
  {
    name: "LifeLine Pathology",
    categories: ["Diabetes", "Cardiac", "Full Body"],
    rating: 4.6,
    distance: "3.2 km",
    homeCollection: false,
    nabl: true,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=220&fit=crop",
  },
];

const NearbyLabs = () => {
  return (
    <section id="labs" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Nearby Labs</h2>
            <p className="text-muted-foreground">Accredited diagnostic centers near you</p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary">View All →</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={lab.image} alt={lab.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {lab.nabl && (
                    <Badge className="bg-success/90 text-success-foreground gap-1 text-xs">
                      <ShieldCheck className="h-3 w-3" /> NABL
                    </Badge>
                  )}
                  {lab.homeCollection && (
                    <Badge className="bg-info/90 text-info-foreground gap-1 text-xs">
                      <Home className="h-3 w-3" /> Home Collection
                    </Badge>
                  )}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg text-foreground">{lab.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {lab.categories.map((c) => (
                    <Badge key={c} variant="secondary" className="text-xs font-normal">{c}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-semibold text-foreground">{lab.rating}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {lab.distance}
                  </span>
                </div>
                <Button size="sm" className="w-full">Book Test</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyLabs;
