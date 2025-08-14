import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyHireSection from "@/components/WhyHireSection";
import WhyIndiaSection from "@/components/WhyIndiaSection";
import TrustedCompaniesSection from "@/components/TrustedCompaniesSection";
import HiringProcessSection from "@/components/HiringProcessSection";
import UserGuideSection from "@/components/UserGuideSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyHireSection />

      <WhyIndiaSection />
      <TrustedCompaniesSection />
      <HiringProcessSection />
      <UserGuideSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
