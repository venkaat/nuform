"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";

interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
  onShowToast: (message: string) => void;
}

const CATEGORIES = [
  {
    id: "kitchens",
    title: "KITCHENS",
    image: "/images/cat_kitchen.jpg",
    hasSaveBadge: false,
    itemCount: "42 Designs Available",
  },
  {
    id: "bathrooms",
    title: "BATHROOMS",
    image: "/images/cat_bathroom.jpg",
    hasSaveBadge: false,
    itemCount: "28 Spa Suites",
  },
  {
    id: "workspaces",
    title: "WORKSPACES",
    image: "/images/cat_workspace.jpg",
    hasSaveBadge: true,
    itemCount: "35 Executive Setups",
  },
  {
    id: "outdoor",
    title: "OUTDOOR",
    image: "/images/cat_outdoor.jpg",
    hasSaveBadge: true,
    itemCount: "19 Deck & Patio Plans",
  },
];

export default function CategoryGrid({ onSelectCategory, onShowToast }: CategoryGridProps) {
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({
    workspaces: true,
    outdoor: true,
  });

  const toggleSave = (e: React.MouseEvent, catId: string, title: string) => {
    e.stopPropagation();
    setSavedItems((prev) => {
      const newState = !prev[catId];
      onShowToast(newState ? `Saved ${title} to your Wishlist!` : `Removed ${title} from Wishlist`);
      return { ...prev, [catId]: newState };
    });
  };

  return (
    <section id="residential" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER MATCHING MOCKUP */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-wider uppercase text-black font-sans">
            EXPLORE BY CATEGORY
          </h2>
          <div className="w-12 h-0.5 bg-red-600 mx-auto mt-3" />
        </div>

        {/* 4 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => {
            const isSaved = savedItems[cat.id];
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.title)}
                className="relative group cursor-pointer overflow-hidden rounded-xl h-[320px] bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* SAVE ♥ BADGE MATCHING MOCKUP (TOP RIGHT) */}
                <button
                  onClick={(e) => toggleSave(e, cat.id, cat.title)}
                  className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white hover:scale-105 transition-all border border-white/20"
                  title="Save to wishlist"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-200">
                    SAVE
                  </span>
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      isSaved ? "fill-red-600 text-red-600 animate-pulse" : "text-white"
                    }`}
                  />
                </button>

                {/* TITLE LABEL CENTERED AT BOTTOM MATCHING MOCKUP */}
                <div className="absolute bottom-6 inset-x-4 text-center z-10">
                  <h3 className="text-lg font-black text-white tracking-widest uppercase font-sans drop-shadow-md group-hover:text-red-500 transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] text-neutral-400 font-medium tracking-wider mt-0.5 block opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.itemCount} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
