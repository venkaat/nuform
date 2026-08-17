"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function TopAnnouncementBar() {
  const [isVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 text-white text-xs font-semibold py-2.5 px-4 transition-all duration-300 shadow-lg">
      <button
        onClick={() => {}}
        className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center w-full group cursor-pointer hover:text-amber-400 transition-colors"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-pulse" />
        <span className="tracking-wide text-xs sm:text-xs">
          Start your luxury project with a <strong className="text-amber-400">Free 3D Architectural Consultation</strong>
        </span>
        <span className="text-xs transition-transform group-hover:translate-x-1 font-bold">
          &rsaquo;
        </span>
      </button>
    </div>
  );
}
