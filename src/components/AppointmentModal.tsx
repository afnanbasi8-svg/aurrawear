import React, { useState } from 'react';
import { X, Calendar, CheckCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/fashionData';
import { AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    serviceRequired: preselectedService || 'Bespoke Three-Piece Suit Commission',
    boutiqueLocation: '24 Savile Row, Mayfair, London',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(ref);
    setSubmitted(true);
  };

  return (
    <div
      id="appointment-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141312]/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="appointment-modal-container"
        className="relative w-full max-w-2xl bg-[#FBF9F5] border border-[#E8E1D7] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#141312] text-[#FBF9F5] p-6 border-b border-[#2C221E] flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#DFCAAB] mb-1">
              HAUTE ATELIER SESSIONS
            </div>
            <h3 className="font-serif text-2xl text-[#FBF9F5] font-light">
              Book a Tailoring Appointment
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#1D1B1A] hover:bg-[#2C221E] text-[#D8CEBF] hover:text-[#C5A880] border border-[#3E322C] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#C5A880]/20 text-[#9E7D47] flex items-center justify-center mx-auto mb-4 border border-[#C5A880]/50">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-[#141312] mb-2">
                Consultation Reserved
              </h4>
              <p className="text-xs sm:text-sm text-[#4A3B32] max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-[#141312]">{formData.name}</strong>. Your reference code is <span className="font-mono font-bold text-[#9E7D47]">{bookingRef}</span>. Our concierge team will reach out promptly to confirm your fitting suite reservation.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#141312] hover:bg-[#2C221E] text-[#DFCAAB] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] cursor-pointer"
              >
                Return to Boutique
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@address.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="Bespoke Three-Piece Suit Commission">Bespoke Three-Piece Suit Commission</option>
                    <option value="Wedding Nuptial & Black-Tie Consultation">Wedding Nuptial & Black-Tie Consultation</option>
                    <option value="Made-to-Measure Blazer & Trousers">Made-to-Measure Blazer & Trousers</option>
                    <option value="Bespoke Shirtmaker Fitting">Bespoke Shirtmaker Fitting</option>
                    <option value="Private Wardrobe Styling Session">Private Wardrobe Styling Session</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                    Boutique Location *
                  </label>
                  <select
                    value={formData.boutiqueLocation}
                    onChange={(e) => setFormData({ ...formData, boutiqueLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="24 Savile Row, Mayfair, London">Mayfair, London (24 Savile Row)</option>
                    <option value="680 Madison Avenue, New York">Madison Ave, New York (680 Madison Ave)</option>
                    <option value="Virtual Sartorial Video Consultation">Virtual Sartorial Video Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-1.5">
                  Message / Special Fitting Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Occasion date, preferred fabric mills, style inspirations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5EFEB] border border-[#E8E1D7] text-xs sm:text-sm text-[#141312] focus:outline-none focus:border-[#C5A880] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Confirm Tailoring Reservation</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
