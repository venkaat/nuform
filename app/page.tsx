"use client";

import React, { useState } from "react";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";
import Header from "@/components/Header";
import CinematicHero from "@/components/CinematicHero";
import StarbucksSplitGrid from "@/components/StarbucksSplitGrid";
import CategoryGrid from "@/components/CategoryGrid";
import ServicesSection from "@/components/ServicesSection";
import SearchModal from "@/components/SearchModal";
import ConsultationModal from "@/components/ConsultationModal";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDesigner, setSelectedDesigner] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isNavRevealed, setIsNavRevealed] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenConsultation = (serviceOrDesigner?: string) => {
    if (serviceOrDesigner && serviceOrDesigner.includes("Designer")) {
      setSelectedDesigner(serviceOrDesigner);
      setSelectedService("");
    } else if (serviceOrDesigner) {
      setSelectedService(serviceOrDesigner);
      setSelectedDesigner("");
    } else {
      setSelectedService("");
      setSelectedDesigner("");
    }
    setIsConsultationOpen(true);
  };

  const handleSelectServiceFromSearch = (serviceName: string) => {
    setIsSearchOpen(false);
    handleOpenConsultation(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black text-white px-5 py-3.5 rounded-lg shadow-2xl border border-neutral-700 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Navigation & Top Announcement Bar - Fades down into view after Hero Loads */}
      <div className={`sticky top-0 z-40 transition-all duration-1000 ease-out transform ${
        isNavRevealed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
      }`}>
        <TopAnnouncementBar />
        <Header
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Full Cinematic Hero Section */}
        <CinematicHero
          onOpenConsultation={handleOpenConsultation}
          onHeroLoaded={() => {
            setTimeout(() => setIsNavRevealed(true), 600);
          }}
        />

        {/* Starbucks Style Split Grid Block Sections */}
        <StarbucksSplitGrid
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Shop By Category Grid */}
        <CategoryGrid
          onSelectCategory={(catName) => {
            showToast(`Filtered by ${catName}`);
          }}
          onShowToast={showToast}
        />

        {/* Interior Services Section */}
        <ServicesSection
          onSelectService={(serviceName) => handleOpenConsultation(serviceName)}
        />
      </main>

      {/* Footer */}
      <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
            <div>
              <a href="#" className="inline-block mb-4 p-3 bg-white rounded-lg shadow-lg">
                <img
                  src="/images/logo.png"
                  alt="Nüform - Interior Designs & Constructions"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                />
              </a>
              <p className="text-xs leading-relaxed text-neutral-400">
                Premium luxury interior design, bespoke architecture, and modular living solutions built to inspire beyond the surface.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#residential" className="hover:text-white transition-colors">Residential Interiors</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Modular Kitchens</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Smart Home Automation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#services" className="hover:text-white transition-colors">Bedroom & Wardrobes</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Home Theatre & Acoustic Paneling</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">False Ceiling & Track Lighting</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Balcony & Decking</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                Consultation
              </h4>
              <p className="text-xs leading-relaxed text-neutral-400 mb-4">
                Book a free 3D design consultation with our experienced interior architects today.
              </p>
              <button
                onClick={() => handleOpenConsultation()}
                className="w-full bg-[#e50914] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm"
              >
                BOOK FREE CONSULTATION
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
            <p>&copy; {new Date().getFullYear()} NUFORM Architectural & Interior Design. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectService={handleSelectServiceFromSearch}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedService}
        initialDesigner={selectedDesigner}
      />
    </div>
  );
}
