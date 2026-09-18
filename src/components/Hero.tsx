import React from 'react';
import { ArrowDown, Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { ASSET_IMAGES } from '../data/fashionData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#141312]">
      {/* Background Image Container with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.hero}
          alt="AURA WEAR Bespoke Tailored Suit Model"
          className="w-full h-full object-cover object-center lg:object-[50%_25%] scale-105 transform animate-subtle-zoom transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Gradients and subtle overlays for exquisite contrast and gold warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141312]/90 via-[#141312]/60 to-[#141312]/80 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-[#141312]/50" />
        {/* Subtle champagne gold accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Decorative Gold Accent Lines (Editorial Framing) */}
      <div className="absolute inset-6 sm:inset-10 lg:inset-12 border border-[#C5A880]/20 pointer-events-none z-10 hidden sm:block">
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C5A880]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C5A880]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C5A880]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C5A880]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 w-full flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Prestige Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#1D1B1A]/85 border border-[#C5A880]/40 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span className="text-[#DFCAAB] text-[11px] sm:text-xs tracking-[0.25em] uppercase font-medium">
              HAUTE SUR-MESURE & SARTORIAL LUXURY
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-7xl text-[#FBF9F5] font-light leading-[1.1] tracking-tight mb-6">
            Timeless Style. <br />
            <span className="italic font-normal text-[#DFCAAB]">Tailored for You.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D8CEBF] font-light leading-relaxed max-w-xl mb-10">
            Premium menswear crafted with refined fabrics, master tailoring and contemporary sophistication.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
            <button
              id="hero-explore-collection-btn"
              onClick={() => handleScrollTo('#collections')}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C5A880] hover:bg-[#B39255] text-[#141312] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-lg hover:shadow-[#C5A880]/20 cursor-pointer"
            >
              <span>Explore Collection</span>
            </button>

            <button
              id="hero-book-appointment-btn"
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-[#FBF9F5]/10 text-[#FBF9F5] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border border-[#C5A880]/70 hover:border-[#C5A880] transition-all duration-300 cursor-pointer"
            >
              <Scissors className="w-4 h-4 text-[#C5A880] mr-2" />
              <span>Book a Tailoring Appointment</span>
            </button>
          </div>

          {/* Refined Metadata Pillars */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#C5A880]/20 max-w-lg">
            <div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C827A]">Heritage</div>
              <div className="text-sm sm:text-base font-serif text-[#FBF9F5] mt-0.5">Est. 2023</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C827A]">Construction</div>
              <div className="text-sm sm:text-base font-serif text-[#FBF9F5] mt-0.5">Full Canvas</div>
            </div>
            <div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#8C827A]">Provenance</div>
              <div className="text-sm sm:text-base font-serif text-[#FBF9F5] mt-0.5">Italian & British</div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        onClick={() => handleScrollTo('#brand-intro')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#DFCAAB]/70 hover:text-[#C5A880] transition-colors group cursor-pointer"
        aria-label="Scroll to introduction"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium mb-1.5">Discover</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#C5A880]" />
      </button>
    </section>
  );
};
