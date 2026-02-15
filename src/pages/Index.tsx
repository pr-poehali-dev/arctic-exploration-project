import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionXIX from "@/components/SectionXIX";
import SectionXX from "@/components/SectionXX";
import SectionSP1 from "@/components/SectionSP1";
import ArcticMap from "@/components/ArcticMap";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SectionXIX />
      <SectionXX />
      <SectionSP1 />
      <ArcticMap />
      <AboutSection />
    </div>
  );
};

export default Index;
