"use client";

import React from "react";
import { X, Trash2, ArrowRight, ShoppingBag } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

export default function CartDrawer({ isOpen, onClose, cartCount }: CartDrawerProps) {
  if (!isOpen) return null;

  const sampleItems = [
    {
      id: 1,
      title: "Custom Acrylic Modular Kitchen Package",
      category: "Modular Kitchen Design",
      price: 249000,
      image: "/images/cat_kitchen.jpg",
    },
    {
      id: 2,
      title: "Minimalist Executive Office Desk & Ergonomic Chair",
      category: "Workspaces",
      price: 65000,
      image: "/images/cat_workspace.jpg",
    },
  ];

  const total = sampleItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* HEADER */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-600" />
              <h2 className="text-base font-extrabold text-gray-900 uppercase tracking-tight">
                Your Shopping Bag ({sampleItems.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-900 p-1.5 rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ITEM LIST */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {sampleItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div
                  className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-extrabold text-gray-900">
                      ₹{item.price.toLocaleString("en-IN")}
                    </span>
                    <button className="text-gray-400 hover:text-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER & CHECKOUT */}
          <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 font-medium">Estimated Subtotal</span>
              <span className="font-extrabold text-gray-900 text-base">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>
            <p className="text-[11px] text-gray-500">
              Shipping & consultation design fees calculated at checkout.
            </p>
            <button
              onClick={() => alert("Redirecting to secure Nuform Checkout...")}
              className="w-full bg-[#e50914] text-white py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
            >
              PROCEED TO CHECKOUT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
