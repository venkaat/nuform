"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function TopAnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#1e392a] text-white text-xs sm:text-sm font-semibold py-3 px-4 transition-all duration-300 shadow-inner">
      <button
        onClick={() => {}}
        className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center w-full group cursor-pointer hover:underline"
      >
        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="tracking-wide">
          Start your dream home project with a Free 3D Design Consultation
        </span>
        <span className="text-sm transition-transform group-hover:translate-x-1">
          &rsaquo;
        </span>
      </button>
    </div>
  );
}
