import React from 'react';
import { Sparkles, Award, Shield, HeartHandshake } from 'lucide-react';
import { ASSET_IMAGES, BRAND_INFO } from '../data/fashionData';

interface AboutUsProps {
  onOpenAppointment: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenAppointment }) => {
  const pillars = [
    {
      title: "Master Craftsmanship",
      desc: "Every bespoke silhouette is engineered with full floating canvas, hand-attached collar, and meticulous iron-work shaping that mirrors the body's natural contours.",
      icon: <Award className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: "Rare & Sovereign Fabrics",
      desc: "We commission directly from centuries-old family mills across northern Italy and West Yorkshire, maintaining access to low-yield vintage bolts and Super 160s cloths.",
      icon: <Shield className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: "Personalized Sanctuary",
      desc: "Our Madison Avenue and Mayfair fitting lounges provide private styling suites, dedicated sartorial concierges, and continuous wardrobe record keeping for life.",
      icon: <HeartHandshake className="w-5 h-5 text-[#C5A880]" />,
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F5EFEB] border-b border-[#E8E1D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text & Story (Left Column) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
                THE AURA WEAR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight mb-6">
              Designed for the Modern Gentleman.
            </h2>

            <p className="text-base sm:text-lg text-[#4A3B32] font-light leading-relaxed mb-6">
              Established in 2023, AURA WEAR was conceived out of a reverence for classical European tailoring blended with the kinetic demands of modern living. We reject the fleeting cycles of fast fashion in pursuit of eternal grace, sculptured proportions, and enduring comfort.
            </p>

            <p className="text-sm sm:text-base text-[#4A3B32] font-normal leading-relaxed mb-8">
              Whether tailoring a groom's midnight velvet tuxedo, hand-cutting an everyday double-breasted hopsack blazer, or selecting a hand-rolled Como silk foulard, our master cutters and personal stylists approach every commission with unwavering devotion to artisanal detail.
            </p>

            {/* Craftsmanship Pillars */}
            <div className="space-y-5 mb-10">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-none bg-[#FBF9F5] border border-[#E8E1D7] flex items-center justify-center shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#141312] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#4A3B32] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4 border-t border-[#E8E1D7]">
              <button
                id="about-visit-boutique-btn"
                onClick={onOpenAppointment}
                className="px-8 py-3.5 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-colors shadow-sm cursor-pointer"
              >
                Experience The Atelier
              </button>
              <div className="text-xs text-[#8C827A] tracking-wider uppercase">
                Private Appointments • Mon – Sun
              </div>
            </div>
          </div>

          {/* Boutique Image (Right Column) */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl bg-[#141312]">
              <img
                src={ASSET_IMAGES.boutique}
                alt="AURA WEAR Flagship Mens Boutique Interior"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent opacity-40" />

              {/* Inset Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#141312]/90 backdrop-blur-md p-6 border border-[#C5A880]/30 text-[#FBF9F5]">
                <p className="font-serif italic text-base sm:text-lg text-[#DFCAAB] mb-2">
                  &ldquo;A suit must never precede the man; it must silently articulate his stature.&rdquo;
                </p>
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#8C827A] font-semibold">
                  AURA WEAR ATELIER DIRECTIVE • EST. 2023
                </div>
              </div>
            </div>

            {/* Decorative Gold Frame Offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A880]/40 -z-0 hidden sm:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
