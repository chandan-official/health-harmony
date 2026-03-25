import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickServices from "@/components/QuickServices";
import NearbyHospitals from "@/components/NearbyHospitals";
import NearbyLabs from "@/components/NearbyLabs";
import PopularTests from "@/components/PopularTests";
import PromoCoupons from "@/components/PromoCoupons";
import BannerCarousel from "@/components/BannerCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingFlow from "@/components/BookingFlow";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QuickServices />
      <NearbyHospitals />
      <NearbyLabs />
      <PopularTests />
      <PromoCoupons />
      <BannerCarousel />
      <WhyChooseUs />
      <Testimonials />
      <BookingFlow />
      <AppCTA />
      <Footer />
    </div>
  );
};

export default Index;
