"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { DETAILED_SERVICES } from "./ServicesSection";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectService }: SearchModalProps) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredServices = DETAILED_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* INPUT HEADER */}
        <div className="relative flex items-center border-b border-gray-200 pb-4">
          <Search className="w-6 h-6 text-red-600 mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, projects, or categories (e.g. Kitchen, Lighting, Balcony)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-bold text-gray-900 bg-transparent focus:outline-none placeholder-gray-400"
          />
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* RESULTS */}
        <div className="mt-4 max-h-96 overflow-y-auto divide-y divide-gray-100">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => {
                  onSelectService(service.title);
                  onClose();
                }}
                className="py-3 px-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">{service.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-xs text-gray-400">
              No matching design services found for "{query}".
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
