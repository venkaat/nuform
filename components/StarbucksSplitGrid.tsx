"use client";

import React from "react";

interface StarbucksSplitGridProps {
  onOpenConsultation: (serviceOrDesigner?: string) => void;
}

export default function StarbucksSplitGrid({ onOpenConsultation }: StarbucksSplitGridProps) {
  return (
    <section className="w-full space-y-8 py-8 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      
      {/* ROW 1: FORM. FUNCTION. LUXURY. (Image Left, Warm Cream Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-sm min-h-[460px] lg:min-h-[520px]">
        {/* Left: Image */}
        <div className="relative min-h-[300px] md:min-h-full w-full bg-neutral-900">
          <img
            src="/images/hero_living_room.jpg"
            alt="Luxury Living Room Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Block (Warm Cream bg-[#f8f5f0]) */}
        <div className="bg-[#f8f5f0] text-gray-900 flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#2d2926] leading-tight mb-4">
            Form. Function. Luxury.
          </h2>
          <p className="text-base sm:text-lg text-[#4a4540] max-w-md leading-relaxed mb-8">
            Our luxury architectural and interior design transformations are officially here. Elevate your living room, master suites, and custom modular spaces.
          </p>
          <button
            onClick={() => onOpenConsultation("Living Room Interiors")}
            className="bg-[#1e392a] hover:bg-[#14261c] text-white font-bold text-sm px-7 py-3 rounded-full transition-all transform hover:scale-105 shadow-sm"
          >
            Explore Living Rooms
          </button>
        </div>
      </div>

      {/* ROW 2: REVERSED (Sage Green Left, Ranjith Lead Designer Image Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-sm min-h-[460px] lg:min-h-[520px]">
        {/* Left: Text Block (Sage Green bg-[#d4e2d4]) */}
        <div className="bg-[#d4e2d4] text-[#1e392a] flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16 order-2 md:order-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2c533e] mb-2">
            MEET RANJITH, LEAD DESIGNER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#1e392a] leading-tight mb-4">
            Free 3D Design Preview? Yes, please.
          </h2>
          <p className="text-base sm:text-lg text-[#2c533e] max-w-md leading-relaxed mb-8">
            Experience an interactive 3D walkthrough of your home before execution. Get expert space planning and custom material samples tailored for your dream home.
          </p>
          <button
            onClick={() => onOpenConsultation("Ranjith - Lead Designer")}
            className="border-2 border-[#1e392a] text-[#1e392a] hover:bg-[#1e392a] hover:text-white font-bold text-sm px-7 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>

        {/* Right: Image (Ranjith Lead Designer) */}
        <div className="relative min-h-[320px] md:min-h-full w-full bg-neutral-900 order-1 md:order-2">
          <img
            src="/images/ranjith_lead_designer.jpg"
            alt="Ranjith Lead Designer"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* ROW 3: ERGONOMIC MODULAR KITCHENS (Image Left, Soft Beige Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-sm min-h-[460px] lg:min-h-[520px]">
        {/* Left: Image */}
        <div className="relative min-h-[300px] md:min-h-full w-full bg-neutral-900">
          <img
            src="/images/cat_kitchen.jpg"
            alt="Modular Kitchen Design"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Block (Soft Terracotta Cream bg-[#f4ebe1]) */}
        <div className="bg-[#f4ebe1] text-gray-900 flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#332a24] leading-tight mb-4">
            Ergonomic Modular Kitchens.
          </h2>
          <p className="text-base sm:text-lg text-[#54473e] max-w-md leading-relaxed mb-8">
            Engineered for modern Indian culinary spaces. Premium acrylic finishes, quartz waterfall islands, and German soft-close hardware.
          </p>
          <button
            onClick={() => onOpenConsultation("Modular Kitchen Design")}
            className="bg-black hover:bg-neutral-800 text-white font-bold text-sm px-7 py-3 rounded-full transition-all transform hover:scale-105 shadow-sm"
          >
            View Kitchen Designs
          </button>
        </div>
      </div>

      {/* ROW 4: REVERSED (Dark Luxury Green Left, Smart Home Image Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-sm min-h-[460px] lg:min-h-[520px]">
        {/* Left: Text Block (Dark Luxury Green bg-[#1e2321]) */}
        <div className="bg-[#1e2321] text-white flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16 order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-tight mb-4">
            Smart Living & Acoustic Theatres.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-md leading-relaxed mb-8">
            Integrated magnetic track lighting, motorized acoustic louvers, smart home tech automation, and immersive cinema seating.
          </p>
          <button
            onClick={() => onOpenConsultation("Home Theatre Design & Setup")}
            className="bg-white hover:bg-neutral-100 text-black font-bold text-sm px-7 py-3 rounded-full transition-all transform hover:scale-105 shadow-sm"
          >
            Explore Smart Tech
          </button>
        </div>

        {/* Right: Image (Smart Home) */}
        <div className="relative min-h-[300px] md:min-h-full w-full bg-neutral-900 order-1 md:order-2">
          <img
            src="/images/smart_home.jpg"
            alt="Smart Home Automation"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ROW 5: BESPOKE WARDROBES (Image Left, Warm Stone Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm shadow-sm min-h-[460px] lg:min-h-[520px]">
        {/* Left: Image */}
        <div className="relative min-h-[300px] md:min-h-full w-full bg-neutral-900">
          <img
            src="/images/urban_loft.jpg"
            alt="Urban Loft & Wardrobes"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Block (Warm Stone bg-[#e6dfd5]) */}
        <div className="bg-[#e6dfd5] text-gray-900 flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#2b2724] leading-tight mb-4">
            Bespoke Wardrobes & Storage.
          </h2>
          <p className="text-base sm:text-lg text-[#4a443f] max-w-md leading-relaxed mb-8">
            Walk-in closets, sliding tinted glass wardrobe doors, concealed vanity compartments, and optimized space organization.
          </p>
          <button
            onClick={() => onOpenConsultation("Wardrobe & Storage Solutions")}
            className="bg-[#1e392a] hover:bg-[#14261c] text-white font-bold text-sm px-7 py-3 rounded-full transition-all transform hover:scale-105 shadow-sm"
          >
            Discover Wardrobes
          </button>
        </div>
      </div>

    </section>
  );
}
