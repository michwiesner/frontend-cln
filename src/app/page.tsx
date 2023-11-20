import BenefitsCarousel from "@/components/benefitsCarousel";
import Header from "@/components/header";
import Hero from "@/components/hero";
import TourismCarousel from "@/components/tourismCarousel";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TourismCarousel />
      <BenefitsCarousel />
    </main>
  );
}
