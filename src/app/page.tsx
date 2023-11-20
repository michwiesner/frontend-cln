import Header from "@/app/components/header";
import Hero from "@/app/components/hero";
import TourismCarousel from "./components/tourismCarousel";
import BenefitsCarousel from "./components/benefitsCarousel";

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
