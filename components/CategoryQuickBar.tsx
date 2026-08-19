"use client";

import React from "react";
import {
  Home,
  Building2,
  Sparkles,
  Tag,
  Utensils,
  Cpu,
} from "lucide-react";

interface CategoryQuickBarProps {
  onSelectCategory: (categoryName: string) => void;
}

export const QUICK_CATEGORIES = [
  {
    id: "interior",
    title: "Interior",
    subtitle: "Living, Bedroom & Furniture",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 13h6v8H9z" />
      </svg>
    ),
  },
  {
    id: "exterior",
    title: "Exterior",
    subtitle: "Facades & Landscaping",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
      </svg>
    ),
  },
  {
    id: "curtains",
    title: "Curtains",
    subtitle: "Blinds & Drapes",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M3 3h18M4 3v18M20 3v18M4 7c2 1 4 1 6 0s4-1 6 0 4 1 4 0M4 13c2 1 4 1 6 0s4-1 6 0 4 1 4 0" />
      </svg>
    ),
  },
  {
    id: "name-boards",
    title: "Name Boards",
    subtitle: "3D Acrylic & LED Signage",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="10" rx="2" />
        <path d="M7 10h10M12 15v5M9 20h6" />
      </svg>
    ),
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    subtitle: "Ergonomic Countertops",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <path d="M3 6h18v14H3zM3 13h18M9 13v7M15 13v7M7 9h.01M17 9h.01" />
      </svg>
    ),
  },
  {
    id: "smart-automation",
    title: "Smart Automation",
    subtitle: "Lighting & Cinema",
    icon: (
      <svg className="w-7 h-7 stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
];

export default function CategoryQuickBar({ onSelectCategory }: CategoryQuickBarProps) {
  return (
    <div className="relative z-30 w-full -mt-16 sm:-mt-20 md:-mt-24 mb-16 pointer-events-auto">
      {/* Full Width Luxury Bar with Gold & Crimson Gradient Theme */}
      <div className="w-full bg-gradient-to-r from-neutral-950 via-zinc-900 to-neutral-950 backdrop-blur-2xl border-y border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] py-6 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        
        {/* Decorative Top Glowing Amber-Red Gradient Accent Line */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-red-600 via-amber-400 to-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]" />

        {/* Max Width Container Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {QUICK_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.title)}
                className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-500/60 transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(245,158,11,0.25)] relative overflow-hidden"
              >
                {/* Subtle Hover Gradient Fill */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon Container with Radiant Amber-Gold Gradient Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-red-600/20 border border-amber-500/40 text-amber-400 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-red-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] shrink-0">
                  {cat.icon}
                </div>

                {/* Category Title */}
                <span className="text-white font-black text-xs sm:text-sm tracking-wider group-hover:text-amber-300 transition-colors text-center uppercase">
                  {cat.title}
                </span>

                {/* Subtitle / Description */}
                <span className="text-[10px] text-neutral-400 group-hover:text-neutral-200 mt-1 text-center font-medium line-clamp-1">
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
