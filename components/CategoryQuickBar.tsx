"use client";

import React from "react";
import {
  Home,
  Building2,
  Sparkles,
  Tag,
  Utensils,
  Cpu,
  ArrowRight,
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
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 13h6v8H9z" />
      </svg>
    ),
    lucideIcon: Home,
  },
  {
    id: "exterior",
    title: "Exterior",
    subtitle: "Facades & Landscaping",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M3 21h18M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
      </svg>
    ),
    lucideIcon: Building2,
  },
  {
    id: "curtains",
    title: "Curtains",
    subtitle: "Blinds & Drapes",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M3 3h18M4 3v18M20 3v18M4 7c2 1 4 1 6 0s4-1 6 0 4 1 4 0M4 13c2 1 4 1 6 0s4-1 6 0 4 1 4 0" />
      </svg>
    ),
    lucideIcon: Sparkles,
  },
  {
    id: "name-boards",
    title: "Name Boards",
    subtitle: "3D Acrylic & LED Signage",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="10" rx="2" />
        <path d="M7 10h10M12 15v5M9 20h6" />
      </svg>
    ),
    lucideIcon: Tag,
  },
  {
    id: "modular-kitchen",
    title: "Modular Kitchen",
    subtitle: "Ergonomic Countertops",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <path d="M3 6h18v14H3zM3 13h18M9 13v7M15 13v7M7 9h.01M17 9h.01" />
      </svg>
    ),
    lucideIcon: Utensils,
  },
  {
    id: "smart-automation",
    title: "Smart Automation",
    subtitle: "Lighting & Cinema",
    icon: (
      <svg className="w-8 h-8 stroke-current fill-none stroke-[1.6]" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9zM12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    lucideIcon: Cpu,
  },
];

export default function CategoryQuickBar({ onSelectCategory }: CategoryQuickBarProps) {
  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20 md:-mt-24 mb-12 pointer-events-auto">
      {/* Floating Dark Pill Bar */}
      <div className="bg-neutral-950/90 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        
        {/* Category Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {QUICK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-gradient-to-b hover:from-amber-500/20 hover:to-red-600/20 border border-white/5 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className="text-white group-hover:text-amber-400 transition-colors duration-300 mb-3 transform group-hover:-translate-y-1">
                {cat.icon}
              </div>

              {/* Category Title */}
              <span className="text-white font-extrabold text-xs sm:text-sm tracking-wide group-hover:text-amber-300 transition-colors text-center">
                {cat.title}
              </span>

              {/* Subtitle / Hint */}
              <span className="text-[10px] text-neutral-400 group-hover:text-neutral-200 mt-1 text-center font-medium line-clamp-1">
                {cat.subtitle}
              </span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
