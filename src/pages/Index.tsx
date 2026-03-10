import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import BrandPartners from "@/components/sections/BrandPartners";
import CreativeServices from "@/components/sections/CreativeServices";
import Manifesto from "@/components/sections/Manifesto";
import Projects from "@/components/sections/Projects";
import StudioCulture from "@/components/sections/StudioCulture";
import TechStack from "@/components/sections/TechStack";
import StudioImage from "@/components/sections/StudioImage";
import StatCounters from "@/components/sections/StatCounters";
import BlogInsights from "@/components/sections/BlogInsights";
import CollaborationProcess from "@/components/sections/CollaborationProcess";
import Testimonials from "@/components/sections/Testimonials";
import CTAFooter from "@/components/sections/CTAFooter";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <BrandPartners />
      <CreativeServices />
      <Manifesto />
      <Projects />
      <StudioCulture />
      <TechStack />
      <StudioImage />
      <StatCounters />
      <BlogInsights />
      <CollaborationProcess />
      <Testimonials />
      <CTAFooter />
    </div>
  );
};

export default Index;
