"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroCarouselProps {
  onOpenConsultation: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero_living_room.jpg",
    title: "BUILT TO INSPIRE.\nBEYOND THE SURFACE.",
    subtitle: "Luxury Architecture & Contemporary Interior Transformations",
    primaryCta: "EXPLORE RESIDENTIAL",
    secondaryCta: "BOOK CONSULTATION",
  },
  {
    id: 2,
    image: "/images/urban_loft.jpg",
    title: "CRAFTED FOR ELEGANCE.\nDEFINED BY FORM.",
    subtitle: "Bespoke Modern Living & High-End Custom Furniture Solutions",
    primaryCta: "EXPLORE PROJECTS",
    secondaryCta: "BOOK CONSULTATION",
  },
  {
    id: 3,
    image: "/images/smart_home.jpg",
    title: "INTELLIGENT SPACES.\nULTIMATE COMFORT.",
    subtitle: "Smart Home Tech Integration & Architectural Cove Lighting",
    primaryCta: "SMART TECH",
    secondaryCta: "BOOK CONSULTATION",
  },
];

export default function HeroCarousel({ onOpenConsultation }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative w-full h-[620px] lg:h-[720px] bg-black overflow-hidden select-none">
      {/* BACKGROUND SLIDES */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-out"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Subtle dark gradient overlay to match mockup contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
      ))}

      {/* CENTERED HERO CONTENT */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.1] max-w-4xl drop-shadow-lg whitespace-pre-line font-sans">
          {currentSlide.title}
        </h1>

        {/* CTA BUTTONS MATCHING MOCKUP EXACTLY */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#residential"
            className="w-full sm:w-auto bg-[#e50914] text-white px-9 py-4 font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-xl border border-red-600 rounded-sm text-center"
          >
            {currentSlide.primaryCta}
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto bg-black/40 backdrop-blur-md text-white px-9 py-4 font-bold text-xs sm:text-sm uppercase tracking-widest border border-white/80 hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5 shadow-xl rounded-sm"
          >
            {currentSlide.secondaryCta}
          </button>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all border border-white/10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white bg-black/30 hover:bg-black/60 backdrop-blur-sm rounded-full transition-all border border-white/10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* PAGINATION DOTS MATCHING MOCKUP (Red active dot, white inactive dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-[#e50914] scale-125"
                : "bg-white/80 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
