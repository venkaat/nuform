"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  Maximize2,
  X,
  Pause,
  Play,
  Layers,
  ArrowRight,
  Eye
} from "lucide-react";

interface CinematicHeroProps {
  onOpenConsultation: (serviceOrDesigner?: string) => void;
  onHeroLoaded?: () => void;
}

const CINEMATIC_SLIDES = [
  {
    id: 1,
    image: "/images/cafe_dining_wide.jpg",
    category: "COMMERCIAL ARCHITECTURE & CAFÉ SUITES",
    title: "WARM ATMOSPHERE.\nBESPOKE LIVING.",
    subtitle: "Custom terracotta arched architecture, plush orange booth seating, and hand-woven artisanal pendant lamps.",
    cta: "Explore Commercial Interiors",
    tag: "IGLOO CAFÉ SUITE",
    spec: "Terracotta Arch & Woven Light Grid",
  },
  {
    id: 2,
    image: "/images/cafe_lounge_niche.jpg",
    category: "LOUNGE & AMBIENT ARCHES",
    title: "BIOPHILIC RETREAT.\nCRAFTED DETAIL.",
    subtitle: "Backlit architectural niches, cascading green vine walls, and ergonomic teak seating tailored for boutique dining.",
    cta: "View Lounge Designs",
    tag: "ILLUMINATED WALL ARCH",
    spec: "Biophilic Vines & Backlit Motifs",
  },
  {
    id: 3,
    image: "/images/cafe_ceiling_greenery.jpg",
    category: "CEILING & LIGHTING ARCHITECTURE",
    title: "SUSPENDED CANOPY.\nARTISANAL GLOW.",
    subtitle: "Custom ceiling mesh grid with integrated biophilic greenery, recessed track spotlights, and warm rattan lamps.",
    cta: "Explore Lighting Systems",
    tag: "BIOPHILIC MESH SYSTEM",
    spec: "Suspended Mesh & Rattan Pendants",
  },
  {
    id: 4,
    image: "/images/cafe_front_view.jpg",
    category: "STAINLESS SERVICE SUITES",
    title: "HIGH-PERFORMANCE.\nMODULAR COUNTERS.",
    subtitle: "Sleek stainless steel service counters with integrated digital display menus and ambient cove LED strips.",
    cta: "View Service Counters",
    tag: "MODULAR KITCHEN GRADE",
    spec: "Brushed Steel & Cove LED Strip",
  },
  {
    id: 5,
    image: "/images/cafe_window_bar.jpg",
    category: "ALFRESCO GLASS FRONTAGE",
    title: "PANORAMIC LIGHT.\nMODERN FINISHES.",
    subtitle: "Seamless glass facade counters, copper metallic dome lamps, and high-contrast window bar seating.",
    cta: "Explore Glass Frontages",
    tag: "DAYLIGHT OPTIMIZED",
    spec: "Polished Copper & Glass Counter",
  },
];

export default function CinematicHero({ onOpenConsultation, onHeroLoaded }: CinematicHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger hero loaded signal
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onHeroLoaded) onHeroLoaded();
    }, 400);
    return () => clearTimeout(timer);
  }, [onHeroLoaded]);

  // Auto slide cycle with pause/play control
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
      setProgressKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Mouse Parallax movement handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CINEMATIC_SLIDES.length) % CINEMATIC_SLIDES.length);
    setProgressKey((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
    setProgressKey((prev) => prev + 1);
  };

  const selectSlide = (index: number) => {
    setCurrentIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  const currentSlide = CINEMATIC_SLIDES[currentIndex];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[100dvh] bg-black overflow-hidden select-none"
    >
      
      {/* AUTOPLAY PROGRESS BAR AT TOP */}
      {isPlaying && (
        <div className="absolute top-0 left-0 right-0 z-40 h-1 bg-white/10 pointer-events-none">
          <div
            key={progressKey}
            className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 animate-[heroProgress_7s_linear_forwards]"
          />
        </div>
      )}

      {/* BACKGROUND SLIDES WITH KEN BURNS ZOOM & MOUSE PARALLAX EFFECT */}
      {CINEMATIC_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Parallax Layer: Background Image with Slow Ken Burns Zoom */}
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-300 ease-out ${
              idx === currentIndex ? "animate-ken-burns" : ""
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0px) scale(1.12)`,
            }}
          />

          {/* Minimal Soft Backdrop Gradient - Keeps Images Bright & Details Fully Visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/20 pointer-events-none" />
        </div>
      ))}

      {/* TOP FANCY CATEGORY PILL SELECTOR */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center gap-2 bg-black/60 backdrop-blur-xl border border-white/15 p-1.5 rounded-full shadow-2xl">
        {CINEMATIC_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => selectSlide(idx)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
              idx === currentIndex
                ? "bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-600/30 scale-105"
                : "text-neutral-300 hover:text-white hover:bg-white/10"
            }`}
          >
            {slide.tag.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* FOREGROUND CONTENT - OPTIMIZED FOR UNCLUTTERED MOBILE VIEW */}
      <div
        className="relative z-20 h-full max-w-7xl mx-auto px-5 flex flex-col justify-end sm:justify-center items-center text-center pb-24 sm:pb-28 pt-28 sm:pt-20 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 10}px, ${mousePos.y * 10}px, 0px)`,
        }}
      >
        
        {/* Category Badge */}
        <div key={`badge-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:150ms]">
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur-xl border border-white/20 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-5 shadow-2xl">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="hidden sm:inline bg-gradient-to-r from-white via-neutral-200 to-amber-200 bg-clip-text text-transparent">
              {currentSlide.category}
            </span>
            <span className="hidden sm:inline h-3 w-px bg-white/20" />
            <span className="text-amber-400 font-mono tracking-wider">
              {currentSlide.tag}
            </span>
          </div>
        </div>

        {/* Smaller Wording (Clean Crisp White Text) */}
        <div key={`sub-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:400ms]">
          <p className="mt-2 text-sm sm:text-lg md:text-xl text-white font-medium max-w-2xl leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* CTA Action Buttons - Streamlined Single Button on Mobile */}
        <div key={`cta-${currentIndex}`} className="opacity-0 animate-fade-up [animation-delay:900ms] mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => onOpenConsultation(currentSlide.cta)}
            className="w-full sm:w-auto bg-gradient-to-r from-[#e50914] to-amber-600 hover:from-red-700 hover:to-amber-700 text-white px-7 py-3 sm:px-9 sm:py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_15px_30px_rgba(229,9,20,0.4)] rounded-full border border-red-500/80 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>{currentSlide.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setIsFullscreen(true)}
            className="hidden sm:flex w-full sm:w-auto bg-white/10 hover:bg-white hover:text-black backdrop-blur-xl text-white px-8 py-4 font-extrabold text-xs sm:text-sm uppercase tracking-widest border border-white/30 transition-all transform hover:scale-105 rounded-full shadow-2xl items-center justify-center gap-2 cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
            <span>View Fullscreen Gallery</span>
          </button>
        </div>

      </div>

      {/* INTERACTIVE THUMBNAIL DOCK (BOTTOM RIGHT) */}
      <div className="hidden sm:flex absolute right-8 bottom-16 z-30 flex-col gap-2 bg-black/70 backdrop-blur-2xl p-2.5 rounded-2xl border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between px-2 pt-1 pb-1.5 text-[10px] font-bold text-neutral-300 uppercase tracking-widest">
          <span>PROJECT GALLERY</span>
          <span className="text-amber-400 font-mono">{currentIndex + 1} / 5</span>
        </div>
        <div className="flex items-center gap-2">
          {CINEMATIC_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => selectSlide(idx)}
              className={`relative group w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "border-amber-400 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                  : "border-white/20 opacity-60 hover:opacity-100 hover:border-white"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.tag}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {idx === currentIndex && (
                <div className="absolute inset-0 bg-amber-500/20 pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* STATS BAR AT BOTTOM */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 bg-black/70 backdrop-blur-xl border-t border-white/15 py-3.5 px-6 hidden md:block transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * -6}px, 0px)`,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-neutral-300 font-medium">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Igloo Boutique Commercial Interior</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Biophilic Greenery & Terracotta Arches</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>German Modular Hardware Integration</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-500" />
            <span>Lead Architect: <strong className="text-white">Ranjith Studio</strong></span>
          </div>
        </div>
      </div>

      {/* SLIDE NAVIGATION CONTROLS (PREV/NEXT ONLY) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="p-3.5 text-white/80 hover:text-white bg-black/50 hover:bg-amber-600/80 backdrop-blur-xl rounded-full transition-all border border-white/20 shadow-xl cursor-pointer hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 text-white/80 hover:text-white bg-black/50 hover:bg-amber-600/80 backdrop-blur-xl rounded-full transition-all border border-white/20 shadow-xl cursor-pointer hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* MOBILE PROGRESS DOTS */}
      <div className="sm:hidden absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full backdrop-blur-xl border border-white/15">
        {CINEMATIC_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => selectSlide(idx)}
            className={`transition-all duration-300 ${
              idx === currentIndex
                ? "w-7 h-2 bg-amber-500 rounded-full"
                : "w-2 h-2 bg-white/40 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-red-600 text-white rounded-full transition-colors border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-6xl w-full h-[80vh] relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-contain bg-black"
            />
            <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md p-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs text-amber-400 font-mono font-bold uppercase tracking-widest">
                  {currentSlide.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {currentSlide.title.replace("\n", " - ")}
                </h3>
              </div>
              <button
                onClick={() => {
                  setIsFullscreen(false);
                  onOpenConsultation(currentSlide.cta);
                }}
                className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
              >
                Book This Architectural Style &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
