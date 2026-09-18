import React, { useState } from 'react';
import { Instagram, ZoomIn, ArrowUpRight } from 'lucide-react';
import { LOOKBOOK_DATA } from '../data/fashionData';
import { LookbookItem } from '../types';

interface LookbookProps {
  onOpenLookModal: (item: LookbookItem) => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onOpenLookModal }) => {
  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-[#F5EFEB] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
                EDITORIAL PORTFOLIO & INSTAGRAM
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight">
              Sartorial Lookbook
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#141312] hover:text-[#9E7D47] transition-colors group"
          >
            <Instagram className="w-4 h-4 text-[#C5A880]" />
            <span>@aurawear.boutique</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 6 Category Lookbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LOOKBOOK_DATA.map((item, idx) => (
            <div
              key={item.id}
              id={`lookbook-item-${item.id}`}
              onClick={() => onOpenLookModal(item)}
              className="group relative aspect-[4/5] bg-[#E8E1D7] overflow-hidden cursor-pointer border border-[#E8E1D7] hover:border-[#C5A880] transition-all duration-500 shadow-sm"
            >
              {/* Image with smooth zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Permanent gentle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/90 via-[#141312]/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#141312]/85 text-[#DFCAAB] text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-[#C5A880]/30 backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Zoom Trigger Button on Hover */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#FBF9F5]/90 text-[#141312] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Text Information at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-xl sm:text-2xl text-[#FBF9F5] font-normal mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8CEBF] line-clamp-2 font-light leading-relaxed mb-3 opacity-90">
                  {item.description}
                </p>

                {/* Details tags */}
                <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-[9px] uppercase tracking-wider text-[#C5A880] bg-[#141312]/80 px-2 py-0.5 border border-[#C5A880]/30"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
