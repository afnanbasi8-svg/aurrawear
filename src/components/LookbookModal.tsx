import React from 'react';
import { X, Sparkles, Scissors, Eye } from 'lucide-react';
import { LookbookItem } from '../types';

interface LookbookModalProps {
  item: LookbookItem | null;
  onClose: () => void;
  onBookStyling: () => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({ item, onClose, onBookStyling }) => {
  if (!item) return null;

  return (
    <div
      id="lookbook-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141312]/85 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="lookbook-modal-container"
        className="relative w-full max-w-3xl bg-[#FBF9F5] border border-[#E8E1D7] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#141312]/90 hover:bg-[#141312] text-[#D8CEBF] hover:text-[#C5A880] border border-[#C5A880]/30 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close look"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* High-res Image */}
          <div className="relative aspect-[4/5] bg-[#E8E1D7]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-[#141312]/90 text-[#DFCAAB] text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-[#C5A880]/40">
                {item.category}
              </span>
            </div>
          </div>

          {/* Editorial Notes */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-[#FBF9F5]">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#9E7D47] mb-2">
                AURA WEAR ARCHIVE SARTORIAL LOOK
              </div>

              <h3 className="font-serif text-2xl text-[#141312] font-normal leading-tight mb-4">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              <div className="mb-6">
                <div className="text-xs uppercase tracking-[0.16em] font-semibold text-[#141312] mb-3">
                  Tailoring & Styling Elements
                </div>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#4A3B32]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E1D7]">
              <button
                onClick={() => {
                  onClose();
                  onBookStyling();
                }}
                className="w-full py-3 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <Scissors className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Recreate This Bespoke Look</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
