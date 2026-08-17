"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Award, Users } from "lucide-react";

interface CinematicHeroProps {
  onOpenConsultation: (serviceOrDesigner?: string) => void;
  onHeroLoaded?: () => void;
}

const CINEMATIC_SLIDES = [
  {
    id: 1,
    image: "/images/hero_living_room.jpg",
    category: "RESIDENTIAL ARCHITECTURE",
    title: "BUILT TO INSPIRE.\nBEYOND THE SURFACE.",
    subtitle: "Luxury interior transformations crafted with precision space planning, bespoke furniture, and ambient cove lighting.",
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
    image: "/images/ranjith_lead_designer.jpg",
    category: "LEAD DESIGN STUDIO",
    title: "EXPERT DESIGN.\nPERFECT EXECUTION.",
    subtitle: "Collaborate directly with Lead Designer Ranjith for 3D walkthrough previews and tailored architectural plans.",
    cta: "Meet Lead Designer",
  },
];

export default function CinematicHero({ onOpenConsultation, onHeroLoaded }: CinematicHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger hero loaded signal & entrance timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (onHeroLoaded) onHeroLoaded();
    }, 400);
    return () => clearTimeout(timer);
  }, [onHeroLoaded]);

  // Auto slide cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Mouse Parallax movement handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // Range -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // Range -1 to 1
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    // Smooth reset to center
    setMousePos({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CINEMATIC_SLIDES.length) % CINEMATIC_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
  };

  const currentSlide = CINEMATIC_SLIDES[currentIndex];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[700px] sm:h-[780px] lg:h-[850px] bg-black overflow-hidden select-none"
    >
      
      {/* BACKGROUND SLIDES WITH SLOW ZOOM & MOUSE PARALLAX EFFECT */}
      {CINEMATIC_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Parallax Layer 1: Background Image with Slow Ken Burns Zoom */}
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-300 ease-out ${
              idx === currentIndex ? "animate-ken-burns" : ""
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: `translate3d(${mousePos.x * -22}px, ${mousePos.y * -22}px, 0px) scale(1.12)`,
            }}
          />

          {/* Vignette Gradients for High Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
        </div>
      ))}

      {/* FOREGROUND CONTENT WITH FADE-UPWARD STAGGERED ANIMATIONS & MOUSE COUNTER-PARALLAX */}
      <div
        className="relative z-20 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center pb-20 pt-16 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px)`,
        }}
      >
        
        {/* Effect 2: Text Fades Upward - Category Badge (Keyed per slide) */}
        <div key={`badge-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:200ms]">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-red-500 animate-pulse" />
            <span>{currentSlide.category}</span>
          </div>
        </div>

        {/* Effect 2: Text Fades Upward - Main Title (Keyed per slide) */}
        <div key={`title-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:500ms]">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[1.04] max-w-5xl font-sans drop-shadow-2xl whitespace-pre-line">
            {currentSlide.title}
          </h1>
        </div>

        {/* Effect 2: Text Fades Upward - Subtitle (Keyed per slide) */}
        <div key={`sub-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:800ms]">
          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl font-normal leading-relaxed drop-shadow-md">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Effect 2: Text Fades Upward - CTA Action Buttons (Keyed per slide) */}
        <div key={`cta-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:1100ms] mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenConsultation(currentSlide.cta)}
            className="w-full sm:w-auto bg-[#e50914] hover:bg-red-700 text-white px-9 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl rounded-full border border-red-500"
          >
            {currentSlide.cta} &rarr;
          </button>

          <button
            onClick={() => onOpenConsultation("Ranjith - Lead Designer")}
            className="w-full sm:w-auto bg-white/15 hover:bg-white hover:text-black backdrop-blur-md text-white px-9 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest border border-white/40 transition-all transform hover:scale-105 rounded-full shadow-lg"
          >
            Book 3D Walkthrough
          </button>
        </div>

      </div>

      {/* STATS BAR AT BOTTOM */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 bg-black/60 backdrop-blur-md border-t border-neutral-800 py-3.5 px-6 hidden md:block transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * -6}px, 0px)`,
        }}
      >
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
