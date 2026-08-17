"use client";

import React from "react";
import {
  Bed,
  ChefHat,
  Columns,
  Tv,
  Film,
  Lightbulb,
  Sparkles,
  Baby,
  Sun,
  ArrowRight,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const DETAILED_SERVICES = [
  {
    id: "bedroom",
    title: "Bedroom Interiors",
    icon: Bed,
    desc: "Bespoke master suites, padded headboards, mood lighting, and ergonomic space layouts.",
    image: "/images/hero_living_room.jpg",
    tag: "POPULAR",
  },
  {
    id: "kitchen",
    title: "Modular Kitchen Design",
    icon: ChefHat,
    desc: "High-gloss acrylic, soft-close hardware, quartz countertops & kitchen islands.",
    image: "/images/cat_kitchen.jpg",
    tag: "FEATURED",
  },
  {
    id: "wardrobe",
    title: "Wardrobe & Storage Solutions",
    icon: Columns,
    desc: "Custom sliding glass wardrobes, walk-in closets, and concealed organizers.",
    image: "/images/cat_workspace.jpg",
    tag: "CUSTOM",
  },
  {
    id: "tv-unit",
    title: "TV Unit & Wall Paneling",
    icon: Tv,
    desc: "Marble wall paneling, acoustic louvers, floating media consoles & LED backlighting.",
    image: "/images/urban_loft.jpg",
    tag: "MODERN",
  },
  {
    id: "theatre",
    title: "Home Theatre Design & Setup",
    icon: Film,
    desc: "Acoustic wall padding, 4K projector setups, surround sound & motorized recliners.",
    image: "/images/smart_home.jpg",
    tag: "LUXURY",
  },
  {
    id: "ceiling",
    title: "False Ceiling & Lighting Design",
    icon: Lightbulb,
    desc: "Gypsum cove false ceiling, magnetic tracking lights, and ambient smart LEDs.",
    image: "/images/cat_bathroom.jpg",
    tag: "LIGHTING",
  },
  {
    id: "pooja",
    title: "Pooja Room Interiors",
    icon: Sparkles,
    desc: "Sacred CNC carved wooden mandir units, marble backdrops & traditional bells.",
    image: "/images/cat_kitchen.jpg",
    tag: "SACRED",
  },
  {
    id: "kids",
    title: "Kids Room Design",
    icon: Baby,
    desc: "Playful bunk beds, ergonomic study desks, safe round-corner furniture & vibrant decor.",
    image: "/images/cat_workspace.jpg",
    tag: "CREATIVE",
  },
  {
    id: "balcony",
    title: "Balcony & Sit-out Décor",
    icon: Sun,
    desc: "Teak deck tile flooring, artificial vertical gardens, outdoor swing & lounge seating.",
    image: "/images/cat_outdoor.jpg",
    tag: "OUTDOOR",
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 text-xs font-bold uppercase tracking-widest block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-sans">
            FEATURED INTERIOR SERVICES
          </h2>
          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
            Turn your space into an architectural masterpiece with Nuform’s end-to-end custom interior design and construction services.
          </p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        {/* 9 SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="bg-neutral-800/80 border border-neutral-700/60 rounded-xl p-6 hover:border-red-600 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:shadow-red-900/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 bg-neutral-700/50 px-2.5 py-1 rounded">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-700/50 flex items-center justify-between text-xs font-bold text-neutral-300 group-hover:text-white">
                  <span>BOOK THIS SERVICE</span>
                  <ArrowRight className="w-4 h-4 text-red-500 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
