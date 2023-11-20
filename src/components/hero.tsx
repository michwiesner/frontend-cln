"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import chevronRight from "@/../public/icons/chevron-right-white.svg";
import chevronLeft from "@/../public/icons/chevron-left-white.svg";
import "@/styles/hero.css";

const banners = [
  "/banners/banner-1.webp",
  "/banners/banner-2.webp",
  "/banners/banner-3.webp",
];

const Hero = () => {
  const [selectedBanner, setSelectedBanner] = useState(0);
  const [timeToSlide, setTimeToSlide] = useState(6000);

  const handleNext = () => {
    setSelectedBanner(
      selectedBanner === banners.length - 1 ? 0 : selectedBanner + 1
    );
    setTimeToSlide((oldTime) => oldTime + 1);
  };

  const handlePrev = () => {
    setSelectedBanner(
      selectedBanner === 0 ? banners.length - 1 : selectedBanner - 1
    );
    setTimeToSlide((oldTime) => oldTime + 1);
  };

  useEffect(() => {
    setTimeout(handleNext, timeToSlide);
  }, [timeToSlide]);

  return (
    <section className="w-100 d-flex justify-space-between align-center p-20 hero-container">
      <Image src={banners[selectedBanner]} fill alt="banner" />
      <a className="prev pointer" onClick={handlePrev}>
        <Image src={chevronLeft} width={35} height={35} alt="prev-slider" />
      </a>
      <a className="next pointer" onClick={handleNext}>
        <Image src={chevronRight} width={35} height={35} alt="next-slider" />
      </a>
    </section>
  );
};

export default Hero;
