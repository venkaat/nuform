"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Sparkles, ShieldCheck, Award, Users } from "lucide-react";

interface CinematicHeroProps {
  onOpenConsultation: (serviceOrDesigner?: string) => void;
}

const CINEMATIC_SLIDES = [
  {
    id: 1,
    image: "/images/hero_living_room.jpg",
    category: "RESIDENTIAL ARCHITECTURE",
    title: "BUILT TO INSPIRE.\nBEYOND THE SURFACE.",
    subtitle: "Luxury interior transformations crafted with precision space planning and bespoke ambient cove lighting.",
    cta: "Explore Living Rooms",
  },
  {
    id: 2,
    image: "/images/cat_kitchen.jpg",
    category: "MODULAR KITCHEN SUITES",
    title: "FORM & FUNCTION.\nPERFECT HARMONY.",
    subtitle: "High-gloss acrylic modular kitchens engineered with German hardware, quartz islands, and ergonomic layouts.",
    cta: "View Kitchen Designs",
  },
  {
    id: 3,
    image: "/images/smart_home.jpg",
    category: "SMART HOME AUTOMATION",
    title: "INTELLIGENT SPACES.\nULTIMATE LUXURY.",
    subtitle: "Motorized acoustic paneling, magnetic tracking LEDs, and cinema home theatre soundproofing.",
    cta: "Explore Smart Tech",
  },
  {
    id: 4,
    image: "/images/urban_loft.jpg",
    category: "BESPOKE WARDROBES & LOFTS",
    title: "TAILORED COMFORT.\nDEFINED BY ELEGANCE.",
    subtitle: "Walk-in wardrobes, sliding glass closet doors, and custom master suite space optimization.",
    cta: "Discover Wardrobes",
  },
];

export default function CinematicHero({ onOpenConsultation }: CinematicHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CINEMATIC_SLIDES.length) % CINEMATIC_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
  };

  const currentSlide = CINEMATIC_SLIDES[currentIndex];

  return (
    <section className="relative w-full h-[680px] sm:h-[750px] lg:h-[820px] bg-black overflow-hidden select-none">
      
      {/* BACKGROUND SLIDES WITH KEN BURNS EFFECT */}
      {CINEMATIC_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-[10000ms] ease-out"
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
          {/* Cinematic Dark Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80" />
        </div>
      ))}

      {/* CENTERED CINEMATIC CONTENT */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center pb-16 pt-10">
        
        {/* Glowing Pill Category Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-red-500" />
          <span>{currentSlide.category}</span>
        </div>

        {/* Main Cinematic Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[1.05] max-w-5xl font-sans drop-shadow-2xl whitespace-pre-line">
          {currentSlide.title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-shadow">
          {currentSlide.subtitle}
        </p>

        {/* CTA Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenConsultation(currentSlide.cta)}
            className="w-full sm:w-auto bg-[#e50914] hover:bg-red-700 text-white px-8 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl rounded-full border border-red-500"
          >
            {currentSlide.cta} &rarr;
          </button>

          <button
            onClick={() => onOpenConsultation("Ranjith - Lead Designer")}
            className="w-full sm:w-auto bg-white/15 hover:bg-white hover:text-black backdrop-blur-md text-white px-8 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest border border-white/40 transition-all transform hover:scale-105 rounded-full shadow-lg"
          >
            Book 3D Consultation
          </button>
        </div>

      </div>

      {/* CINEMATIC STATS BAR AT BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/60 backdrop-blur-md border-t border-neutral-800 py-3 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-neutral-300 font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-red-500" />
            <span>500+ Luxury Projects Delivered</span>
          </div>
          <div className="h-4 w-px bg-neutral-700" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>100% Interactive 3D Walkthrough</span>
          </div>
          <div className="h-4 w-px bg-neutral-700" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>10-Year Comprehensive Warranty</span>
          </div>
          <div className="h-4 w-px bg-neutral-700" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-500" />
            <span>Lead Designer: <strong>Ranjith</strong></span>
          </div>
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full transition-all border border-white/20 shadow-xl"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full transition-all border border-white/20 shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* SLIDE PROGRESS DOTS */}
      <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 bg-black/50 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10">
        {CINEMATIC_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-500 ${
              idx === currentIndex
                ? "w-8 h-2.5 bg-[#e50914] rounded-full"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white rounded-full"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
