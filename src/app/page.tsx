import Starfield from "@/components/Starfield";
import DevBanner from "@/components/DevBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d0a1a]">
      <Starfield />
      <DevBanner />
      <Navbar className="top-9 sm:top-8" />
      <HeroSection />
      <DetailsSection />
      <ScheduleSection />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
