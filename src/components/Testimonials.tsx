import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/fashionData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
              CLIENT TESTIMONIALS & COMMISSIONS
            </span>
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight">
            Words of Distinction
          </h2>
        </div>

        {/* Minimal Luxury Testimonial Carousel Card */}
        <div className="relative bg-[#F5EFEB] border border-[#E8E1D7] p-8 sm:p-14 lg:p-16 transition-all duration-500 shadow-sm">
          {/* Subtle gold quote mark */}
          <div className="absolute top-8 left-8 sm:top-10 sm:left-10 text-[#C5A880]/30 select-none pointer-events-none">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 rotate-180" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="font-serif text-lg sm:text-2xl md:text-2xl text-[#141312] font-normal leading-relaxed mb-10 italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Meta */}
            <div className="border-t border-[#E8E1D7] pt-6 flex flex-col items-center">
              <div className="text-base sm:text-lg font-serif font-semibold text-[#141312] tracking-wide">
                {current.author}
              </div>
              <div className="text-xs sm:text-sm text-[#4A3B32] font-medium mt-0.5">
                {current.role} • <span className="text-[#8C827A]">{current.location}</span>
              </div>
              <div className="inline-block mt-3 text-[10px] tracking-[0.2em] uppercase font-semibold text-[#9E7D47] px-3 py-1 bg-[#FBF9F5] border border-[#E8E1D7]">
                Commission: {current.service}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-4 sm:left-6 flex items-center">
            <button
              id="testimonial-prev-btn"
              onClick={prevSlide}
              className="w-10 h-10 bg-[#FBF9F5] hover:bg-[#141312] text-[#141312] hover:text-[#DFCAAB] border border-[#E8E1D7] hover:border-[#C5A880] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 sm:right-6 flex items-center">
            <button
              id="testimonial-next-btn"
              onClick={nextSlide}
              className="w-10 h-10 bg-[#FBF9F5] hover:bg-[#141312] text-[#141312] hover:text-[#DFCAAB] border border-[#E8E1D7] hover:border-[#C5A880] flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-[#C5A880]'
                  : 'w-2 bg-[#E8E1D7] hover:bg-[#C5A880]/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
