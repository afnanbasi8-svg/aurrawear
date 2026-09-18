import React from 'react';
import { Layers, Scissors, Crown, Compass, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/fashionData';

export const BrandIntro: React.FC = () => {
  const featureIcons = {
    fabrics: <Layers className="w-6 h-6 text-[#C5A880]" />,
    tailoring: <Scissors className="w-6 h-6 text-[#C5A880]" />,
    heritage: <Crown className="w-6 h-6 text-[#C5A880]" />,
  };

  return (
    <section id="brand-intro" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7] relative overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E8E1D7]/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Brand Manifesto */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase font-semibold text-[#9E7D47]">
              L'ART DE LA TAILLE
            </span>
            <span className="w-8 h-[1px] bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal leading-[1.2] tracking-tight mb-8">
            &ldquo;{BRAND_INFO.founderQuote}&rdquo;
          </h2>

          <p className="text-[#4A3B32] text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {BRAND_INFO.introText}
          </p>

          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto mt-10" />
        </div>

        {/* Three Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BRAND_INFO.features.map((feature, idx) => (
            <div
              key={feature.id}
              id={`feature-card-${feature.id}`}
              className="group bg-[#F5EFEB] border border-[#E8E1D7] p-8 sm:p-10 transition-all duration-300 hover:border-[#C5A880] hover:shadow-md relative flex flex-col justify-between"
            >
              {/* Card corner accent on hover */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-transparent group-hover:border-[#C5A880] transition-all duration-300" />

              <div>
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-[#FBF9F5] border border-[#E8E1D7] flex items-center justify-center group-hover:border-[#C5A880]/50 transition-colors">
                    {featureIcons[feature.id as keyof typeof featureIcons]}
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C827A] px-2.5 py-1 bg-[#E8E1D7]/50">
                    {feature.badge}
                  </span>
                </div>

                {/* Subtitle & Title */}
                <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#9E7D47] mb-1">
                  {feature.subtitle}
                </div>
                <h3 className="font-serif text-2xl text-[#141312] font-medium mb-4 group-hover:text-[#9E7D47] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4A3B32] leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Index Marker */}
              <div className="pt-8 mt-6 border-t border-[#E8E1D7]/70 flex items-center justify-between text-xs text-[#8C827A]">
                <span className="tracking-[0.18em] uppercase text-[10px]">AURA WEAR CRAFT</span>
                <span className="font-serif italic text-sm text-[#9E7D47]">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
