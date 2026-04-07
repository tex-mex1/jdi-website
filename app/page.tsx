import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import PerformanceSection from "@/components/PerformanceSection";
import FundDetailsSection from "@/components/FundDetailsSection";
import InvestmentThesisSection from "@/components/InvestmentThesisSection";
import DocumentsSection from "@/components/DocumentsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <PerformanceSection />
      <FundDetailsSection />
      <InvestmentThesisSection />
      <DocumentsSection />
      <ContactSection />
    </>
  );
}
