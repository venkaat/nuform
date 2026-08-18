"use client";

import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, MapPin } from "lucide-react";

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const INTERIOR_SERVICES = [
  { id: "bedroom", title: "Bedroom Interiors", desc: "Custom master bedrooms, cozy lighting, ergonomic layouts" },
  { id: "kitchen", title: "Modular Kitchen Design", desc: "Ergonomic, modern island & acrylic modular setups" },
  { id: "wardrobe", title: "Wardrobe & Storage Solutions", desc: "Walk-in closets, sliding doors & space optimization" },
  { id: "tv-unit", title: "TV Unit & Wall Paneling", desc: "Contemporary media walls, marble & acoustic paneling" },
  { id: "theatre", title: "Home Theatre Design & Setup", desc: "Acoustic treatment, recliner layouts & cinema projection" },
  { id: "ceiling", title: "False Ceiling & Lighting Design", desc: "Ambient cove lights, magnetic tracks & profile LEDs" },
  { id: "pooja", title: "Pooja Room Interiors", desc: "Traditional & modern wooden mandir carved sanctuaries" },
  { id: "kids", title: "Kids Room Design", desc: "Fun, vibrant, safe & study-oriented bedroom spaces" },
  { id: "balcony", title: "Balcony & Sit-out Décor", desc: "Vertical gardens, outdoor seating & deck flooring" },
];

export default function Header({
  onOpenSearch,
  onOpenConsultation,
}: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-500 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/15 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-white/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          
          {/* LOGO (TRANSPARENT BACKGROUND) */}
          <a href="#" className="flex items-center group py-2">
            <img
              src="/images/logo_light.png"
              alt="Nüform - Interior Designs & Architecture"
              className="h-14 sm:h-20 md:h-22 lg:h-24 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest text-white">
            <a
              href="#projects"
              className="hover:text-amber-400 transition-colors uppercase py-2"
            >
              PROJECTS
            </a>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors uppercase cursor-pointer"
              >
                SERVICES
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-amber-400" : ""}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] bg-neutral-950/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-3 border-b border-white/10 pb-3 mb-1 flex justify-between items-center">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      Our Architectural Services
                    </span>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        onOpenConsultation();
                      }}
                      className="text-[11px] font-bold text-amber-400 hover:underline cursor-pointer"
                    >
                      Book Free Consultation &rarr;
                    </button>
                  </div>

                  {INTERIOR_SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setIsServicesOpen(false);
                        onOpenConsultation(service.title);
                      }}
                      className="text-left p-3 rounded-xl bg-white/5 hover:bg-white/15 transition-all group/item border border-white/5 hover:border-white/20 cursor-pointer"
                    >
                      <h4 className="font-bold text-white text-xs group-hover/item:text-amber-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[10px] text-neutral-400 font-normal leading-snug mt-1 line-clamp-2">
                        {service.desc}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="hover:text-amber-400 transition-colors uppercase py-2"
            >
              ABOUT
            </a>
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-white">
            <a
              href="#projects"
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-neutral-200 hover:text-amber-400 transition-colors py-2 px-1"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Find a studio</span>
            </a>

            <button
              onClick={onOpenSearch}
              className="p-2.5 text-neutral-200 hover:text-amber-400 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              title="Search"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-block border border-white/30 text-white hover:bg-white hover:text-black font-bold text-xs px-4 py-2 rounded-full transition-all cursor-pointer"
            >
              Sign in
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-red-600/30 cursor-pointer hover:scale-105"
            >
              Book consultation
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-amber-400 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3 font-bold text-xs tracking-widest uppercase text-white">
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          </nav>
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-gradient-to-r from-red-600 to-amber-600 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:from-red-700 hover:to-amber-700"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
