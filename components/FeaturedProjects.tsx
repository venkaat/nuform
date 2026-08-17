"use client";

import React from "react";

interface FeaturedProjectsProps {
  onOpenConsultation: (designer?: string) => void;
}

export default function FeaturedProjects({ onOpenConsultation }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CARD 1: OUR LATEST PROJECT - THE URBAN LOFT (4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-sm min-h-[340px] flex flex-col justify-end p-7 text-white bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/urban_loft.jpg')" }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 block mb-1">
                OUR LATEST PROJECT:
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mb-5 leading-snug">
                The Urban Loft.
              </h3>
              <a
                href="#residential"
                className="inline-block bg-white text-black hover:bg-neutral-100 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md rounded-sm"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>

          {/* CARD 2: EXPLORE INNOVATION - NEW SMART HOME TECH (4 cols) */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-sm min-h-[340px] flex flex-col justify-end p-7 text-white bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/smart_home.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-300 block mb-1">
                EXPLORE INNOVATION:
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mb-5 leading-snug">
                New Smart Home Tech.
              </h3>
              <a
                href="#services"
                className="inline-block bg-white text-black hover:bg-neutral-100 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md rounded-sm"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* CARD 3: MEET RANJITH, LEAD DESIGNER */}
          <div className="lg:col-span-4 relative group overflow-hidden rounded-sm min-h-[340px] flex flex-col justify-end p-7 text-white bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/ranjith_lead_designer.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

            {/* RED DESIGNER PICK BADGE */}
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#e50914] text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest shadow-md rounded-xs">
                DESIGNER PICK
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-200 block mb-1">
                MEET RANJITH, LEAD DESIGNER
              </span>
              <p className="text-xl sm:text-2xl font-black text-white italic mb-5 leading-snug">
                “Finding your perfect form.”
              </p>
              <button
                onClick={() => onOpenConsultation("Ranjith - Lead Designer")}
                className="bg-white text-black hover:bg-neutral-100 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md rounded-sm border border-neutral-300"
              >
                GET HIS ADVICE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
