"use client";

import React, { useState } from "react";
import { X, Calendar, CheckCircle2, User, Phone, Mail, Sparkles } from "lucide-react";
import { INTERIOR_SERVICES } from "./Header";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDesigner?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  initialService = "",
  initialDesigner = "",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService || INTERIOR_SERVICES[0].title,
    designer: initialDesigner || "Ranjith - Lead Designer",
    budget: "$5,000 - $15,000",
    date: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
              Consultation Booked!
            </h3>
            <p className="text-sm text-gray-600 mt-2 max-w-xs">
              Thank you, <span className="font-bold text-gray-900">{formData.name || "Client"}</span>! Our lead designer Sarah will review your request for{" "}
              <span className="font-bold text-red-600">{formData.service}</span> and reach out within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-600">
                NUFORM INTERIOR CONSULTATION
              </span>
            </div>

            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight font-sans">
              BOOK YOUR DESIGN SESSION
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Free 45-minute expert consultation with 3D visualization preview.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 focus:bg-white text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 focus:bg-white text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection (All 9 Services) */}
              <div>
                <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                  Select Interior Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 text-gray-900 font-medium"
                >
                  {INTERIOR_SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Range & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 text-gray-900 font-medium"
                  >
                    <option>$3,000 - $5,000</option>
                    <option>$5,000 - $15,000</option>
                    <option>$15,000 - $35,000</option>
                    <option>$35,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-600 text-gray-900"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-[#e50914] text-white py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                CONFIRM CONSULTATION BOOKING
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
