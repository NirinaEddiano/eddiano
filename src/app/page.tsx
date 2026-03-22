import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import TechCarousel from "@/components/home/TechCarousel";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection"; // <--- Import

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <TechCarousel />
      <ProjectShowcase />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection /> 
    </main>
  );
}