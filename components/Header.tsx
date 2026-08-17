"use client";

import React, { useState } from "react";
import { Search, User, ChevronDown, Menu, X } from "lucide-react";

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

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32">
          
          {/* LOGO */}
          <a href="#" className="flex items-center group py-2">
            <img
              src="/images/logo.png"
              alt="Nüform - Interior Designs & Constructions"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>

          {/* DESKTOP NAVIGATION (SHORTENED & CLEAN) */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest text-neutral-800">
            <a
              href="#projects"
              className="hover:text-red-600 transition-colors uppercase py-2"
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
                className="flex items-center gap-1 hover:text-red-600 transition-colors uppercase"
              >
                SERVICES
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {/* Mega Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-[700px] bg-white border border-gray-100 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="col-span-3 border-b border-gray-100 pb-3 mb-1 flex justify-between items-center">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      Our Specialized Services
                    </span>
                    <button
                      onClick={() => {
                        setIsServicesOpen(false);
                        onOpenConsultation();
                      }}
                      className="text-[11px] font-bold text-red-600 hover:underline"
                    >
                      Book Design Consultation &rarr;
                    </button>
                  </div>

                  {INTERIOR_SERVICES.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        setIsServicesOpen(false);
                        onOpenConsultation(service.title);
                      }}
                      className="text-left p-2.5 rounded-lg hover:bg-neutral-50 transition-all group/item border border-transparent hover:border-gray-200"
                    >
                      <h4 className="font-bold text-gray-900 text-xs group-hover/item:text-red-600 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-normal leading-snug mt-1 line-clamp-2">
                        {service.desc}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              className="hover:text-red-600 transition-colors uppercase py-2"
            >
              ABOUT
            </a>
          </nav>

          {/* RIGHT ACTION BUTTONS MATCHING STARBUCKS HEADER LAYOUT */}
          <div className="flex items-center space-x-3 sm:space-x-5 text-gray-900">
            <a
              href="#projects"
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-red-600 transition-colors py-2 px-1"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Find a studio</span>
            </a>

            <button
              onClick={onOpenSearch}
              className="p-2 hover:text-red-600 transition-colors hover:bg-gray-100 rounded-full"
              title="Search"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-block border border-gray-900 text-gray-900 hover:bg-gray-100 font-bold text-xs px-4 py-1.5 rounded-full transition-all"
            >
              Sign in
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="bg-black hover:bg-neutral-800 text-white font-bold text-xs px-5 py-2 rounded-full transition-all shadow-sm"
            >
              Book consultation
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-red-600"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-bold text-xs tracking-widest uppercase">
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
          </nav>
          <div className="pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-red-700"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
