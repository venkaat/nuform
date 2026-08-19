"use client";

import React from "react";

interface CategoryQuickBarProps {
  onSelectCategory: (categoryName: string) => void;
}

export const QUICK_CATEGORIES = [
  {
    id: "interior",
    title: "Interior",
    subtitle: "Living, Bedroom & Furniture",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Sofa / Armchair & Floor Lamp */}
        <path d="M4 11h16M4 11a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
        <path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M4 19v2M20 19v2M8 15h8" />
      </svg>
    ),
  },
  {
    id: "exterior",
    title: "Exterior",
    subtitle: "Facades & Landscaping",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Modern Villa Facade */}
        <path d="M2 22h20M5 22V6l7-4 7 4v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
        <path d="M12 22v-4h4v4" />
      </svg>
    ),
  },
  {
    id: "curtains",
    title: "Curtains",
    subtitle: "Blinds & Drapes",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Double Drapery Curtains */}
        <path d="M2 3h20M4 3v18M20 3v18" />
        <path d="M4 3c2 2 4 2 6 0s4-2 6 0 4 2 4 0" />
        <path d="M4 21c2-2 4-2 6 0s4 2 6 0 4-2 4 0" />
        <path d="M10 3v18M14 3v18" />
      </svg>
    ),
  },
  {
    id: "name-boards",
    title: "Name Boards",
    subtitle: "3D Acrylic & LED Signage",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Hanging Name Signboard */}
        <rect x="3" y="7" width="18" height="12" rx="3" />
        <path d="M7 3v4M17 3v4M7 11h10M7 15h6" />
      </svg>
    ),
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    subtitle: "Ergonomic Countertops",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Kitchen Cabinet & Hood */}
        <path d="M3 4h18v4H3zM4 8v13h16V8M8 12h8M8 16h4M12 12v4" />
      </svg>
    ),
  },
  {
    id: "smart-automation",
    title: "Smart Automation",
    subtitle: "Lighting & Cinema",
    icon: (
      <svg className="w-12 h-12 sm:w-14 sm:h-14 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        {/* Smart Lightbulb & Automation Hub */}
        <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6zM10 20h4M9 22h6" />
      </svg>
    ),
  },
];

export default function CategoryQuickBar({ onSelectCategory }: CategoryQuickBarProps) {
  return (
    <div className="relative z-30 w-full -mt-16 sm:-mt-20 md:-mt-24 mb-16 pointer-events-auto">
      {/* Full Width Luxury Bar with Gold & Crimson Gradient Theme */}
      <div className="w-full bg-gradient-to-r from-neutral-950 via-zinc-900 to-neutral-950 backdrop-blur-2xl border-y border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] py-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        
        {/* Decorative Top Glowing Amber-Red Gradient Line */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-red-600 via-amber-400 to-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]" />

        {/* Max Width Container Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
            {QUICK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.title)}
                className="flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-500/60 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(245,158,11,0.3)] relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Prominent Large Icon Badge (Big Line-Art Icon) */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-red-600/20 border border-amber-500/40 text-amber-400 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-red-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-4 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] shrink-0">
                  {cat.icon}
                </div>

                {/* Bold Category Title */}
                <span className="text-white font-black text-sm sm:text-base tracking-wider group-hover:text-amber-300 transition-colors text-center uppercase">
                  {cat.title}
                </span>

                {/* Concise Subtitle / Description */}
                <span className="text-xs text-neutral-400 group-hover:text-neutral-200 mt-1 text-center font-medium line-clamp-1">
                  {cat.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
