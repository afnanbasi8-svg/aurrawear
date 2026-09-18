import React from 'react';
import { Scissors, CheckCircle2, Ruler, Clock, Sparkles } from 'lucide-react';
import { ASSET_IMAGES } from '../data/fashionData';

interface BespokeTailoringProps {
  onOpenAppointment: () => void;
}

export const BespokeTailoring: React.FC<BespokeTailoringProps> = ({ onOpenAppointment }) => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Silhouette',
      desc: 'An intimate discussion over espresso or champagne exploring your lifestyle, posture, and sartorial aspirations.',
    },
    {
      num: '02',
      title: 'Cloth & Monogram Curation',
      desc: 'Selection from rare archive bunches: Super 160s wools, pure Irish linens, and hand-woven silks with custom linings.',
    },
    {
      num: '03',
      title: 'The Basting Fitting',
      desc: 'Your bespoke garment is basted with white cotton thread on floating horsehair canvas to sculpt shoulder line and balance.',
    },
    {
      num: '04',
      title: 'Final Hand Finishing',
      desc: 'Hand-sewn Milanese lapel buttonhole, horn buttons, silk thread bar tacks, and final pressing ready for delivery.',
    },
  ];

  return (
    <section id="bespoke" className="py-24 sm:py-32 bg-[#F5EFEB] border-b border-[#E8E1D7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Master Tailor Image */}
          <div className="lg:col-span-6 relative">
            {/* Elegant Background Framing */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C5A880]/40 -z-0 hidden sm:block pointer-events-none" />
            
            <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl bg-[#141312]">
              <img
                src={ASSET_IMAGES.tailor}
                alt="Master Tailor Measuring a Premium Bespoke Suit"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent opacity-40" />

              {/* Floating Atelier Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#141312]/90 backdrop-blur-md p-5 border border-[#C5A880]/40 text-[#FBF9F5]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A880]/20 flex items-center justify-center border border-[#C5A880]/50">
                      <Scissors className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCAAB]">
                        Bespoke Master Cutter
                      </div>
                      <div className="text-[11px] text-[#A69C92]">
                        180+ Individual Hand Operations
                      </div>
                    </div>
                  </div>
                  <div className="text-right hidden sm:block">
                    <div className="font-serif text-lg text-[#C5A880]">35+</div>
                    <div className="text-[10px] text-[#A69C92] uppercase tracking-[0.1em]">Anatomical Coordinates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Heading, Story, 4-Step Process & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
                THE SAVILE ROW & MILANESE ATELIER
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight mb-6">
              Crafted Around You.
            </h2>

            <p className="text-base sm:text-lg text-[#4A3B32] font-light leading-relaxed mb-8">
              Experience the art of bespoke tailoring. From fabric selection to the final fitting, every detail is carefully considered to create a garment that reflects your personality and style.
            </p>

            {/* 4-Step Journey */}
            <div className="space-y-4 mb-10">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4 p-3.5 bg-[#FBF9F5] border border-[#E8E1D7] transition-all hover:border-[#C5A880]/60"
                >
                  <span className="font-serif text-base text-[#9E7D47] font-semibold px-2 py-1 bg-[#E8E1D7]/40">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#141312] mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#4A3B32] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div>
              <button
                id="bespoke-book-consultation-btn"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-all duration-300 shadow-md cursor-pointer"
              >
                <Scissors className="w-4 h-4 text-[#C5A880] mr-2" />
                <span>Book a Bespoke Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
