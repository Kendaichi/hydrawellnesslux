import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ScienceSection from "@/components/ScienceSection";
import LifestyleSection from "@/components/LifestyleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <ScienceSection />
      <LifestyleSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
