import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/fashionData';
import { CollectionCategory } from '../types';

interface CollectionsProps {
  onSelectCategory: (categoryId: string) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCategory }) => {
  return (
    <section id="collections" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
                CURATED SARTORIAL WARDROBE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141312] font-normal tracking-tight">
              The Collections
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4A3B32] font-light max-w-md leading-relaxed">
            From regal ceremonial black-tie attire to relaxed Neapolitan soft tailoring, explore timeless silhouettes designed for every chapter of distinction.
          </p>
        </div>

        {/* Editorial Grid: 6 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {COLLECTIONS_DATA.map((cat, idx) => (
            <div
              key={cat.id}
              id={`collection-card-${cat.id}`}
              className="group cursor-pointer flex flex-col bg-[#F5EFEB] border border-[#E8E1D7] overflow-hidden transition-all duration-500 hover:border-[#C5A880] hover:shadow-lg"
              onClick={() => onSelectCategory(cat.id)}
            >
              {/* Image Frame with Zoom Hover Effect */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8E1D7]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#141312]/90 text-[#DFCAAB] text-[10px] tracking-[0.2em] uppercase font-medium px-3 py-1 backdrop-blur-sm border border-[#C5A880]/30">
                    {cat.accentText}
                  </span>
                </div>

                {/* Floating Explore Badge that slides up */}
                <div className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-[#FBF9F5] group-hover:bg-[#C5A880] text-[#141312] flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              {/* Text Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-[#F5EFEB]">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#9E7D47] font-semibold mb-1">
                    {cat.subtitle}
                  </div>
                  <h3 className="font-serif text-2xl text-[#141312] font-medium mb-3 group-hover:text-[#9E7D47] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A3B32] line-clamp-2 font-normal leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 border-t border-[#E8E1D7] flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#141312] group-hover:text-[#9E7D47] transition-colors inline-flex items-center gap-2">
                    Explore Collection
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                  <span className="text-[11px] text-[#8C827A] font-medium">
                    {cat.itemCount} Garments
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
