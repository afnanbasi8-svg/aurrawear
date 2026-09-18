import React from 'react';
import { ShoppingBag, MapPin, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onShopOnline: () => void;
  onVisitBoutique: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onShopOnline, onVisitBoutique }) => {
  return (
    <section id="cta" className="relative py-28 sm:py-36 bg-[#141312] text-[#FBF9F5] overflow-hidden border-y border-[#2C221E]">
      {/* Decorative Gold Ambient Lighting & Editorial Borders */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#C5A880]/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-6 sm:inset-10 border border-[#C5A880]/20 pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A880]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A880]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A880]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A880]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#C5A880]" />
          <span className="text-[11px] sm:text-xs tracking-[0.3em] uppercase font-medium text-[#DFCAAB]">
            BESPOKE ELEVATION • EST. 2023
          </span>
          <span className="w-8 h-[1px] bg-[#C5A880]" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#DFCAAB] font-light tracking-tight leading-[1.15] mb-6">
          Your Signature Style <br className="hidden sm:inline" />
          <span className="italic text-[#FBF9F5]">Starts Here.</span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-xl text-[#D8CEBF] font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Discover refined menswear designed to make every occasion memorable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            id="cta-shop-online-btn"
            onClick={onShopOnline}
            className="w-full sm:w-auto px-9 py-4 bg-[#C5A880] hover:bg-[#B39255] text-[#141312] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:shadow-[#C5A880]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Online</span>
          </button>

          <button
            id="cta-visit-boutique-btn"
            onClick={onVisitBoutique}
            className="w-full sm:w-auto px-9 py-4 bg-transparent hover:bg-[#FBF9F5]/10 text-[#FBF9F5] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border border-[#C5A880] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C5A880]" />
            <span>Visit Our Boutique</span>
          </button>
        </div>
      </div>
    </section>
  );
};
