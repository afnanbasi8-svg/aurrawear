import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  Calendar,
  CheckCircle,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { BRAND_INFO } from '../data/fashionData';
import { AppointmentFormData } from '../types';

export const ContactAndBooking: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    serviceRequired: 'Bespoke Three-Piece Suit Commission',
    boutiqueLocation: '24 Savile Row, Mayfair, London',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello AURA WEAR Concierge, I would like to inquire about reserving a private tailoring consultation."
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
              CONCIERGE & APPOINTMENTS
            </span>
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight mb-4">
            Reserve Your Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#4A3B32] font-light leading-relaxed max-w-xl mx-auto">
            Book an intimate sartorial session with our master tailor, or contact our private concierge for bespoke commissions and wedding inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Boutique Locations */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-[#141312] font-medium mb-6">
                Boutique Ateliers
              </h3>

              {/* Locations */}
              <div className="space-y-6 mb-8">
                {BRAND_INFO.boutiqueLocations.map((loc, idx) => (
                  <div
                    key={loc.city}
                    className="p-5 bg-[#F5EFEB] border border-[#E8E1D7] hover:border-[#C5A880] transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#141312] mb-1.5">
                      <MapPin className="w-4 h-4 text-[#C5A880]" />
                      <span>{loc.city}</span>
                    </div>
                    <p className="text-xs text-[#4A3B32] leading-relaxed mb-2 font-normal">
                      {loc.address}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-[#8C827A]">
                      <Clock className="w-3.5 h-3.5 text-[#9E7D47]" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Communications */}
              <h3 className="font-serif text-xl text-[#141312] font-medium mb-4">
                Direct Inquiries
              </h3>

              <div className="space-y-3 mb-8">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center gap-3 p-3 bg-[#F5EFEB] border border-[#E8E1D7] hover:border-[#C5A880] text-sm text-[#141312] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E8E1D7] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#141312] transition-colors">
                    <Phone className="w-4 h-4 text-[#141312]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C827A]">Concierge Desk</div>
                    <div className="font-medium text-xs sm:text-sm">{BRAND_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 p-3 bg-[#F5EFEB] border border-[#E8E1D7] hover:border-[#C5A880] text-sm text-[#141312] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E8E1D7] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#141312] transition-colors">
                    <Mail className="w-4 h-4 text-[#141312]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C827A]">Electronic Mail</div>
                    <div className="font-medium text-xs sm:text-sm">{BRAND_INFO.email}</div>
                  </div>
                </a>

                {/* WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-between p-3.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#141312] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    <div className="text-left">
                      <div className="text-xs font-semibold tracking-wider uppercase text-[#141312]">
                        Direct WhatsApp Concierge
                      </div>
                      <div className="text-[11px] text-[#4A3B32]">
                        Average response time: &lt; 15 minutes
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#25D366]" />
                </button>

                {/* Instagram Link */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#F5EFEB] border border-[#E8E1D7] hover:border-[#C5A880] text-sm text-[#141312] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E8E1D7] flex items-center justify-center group-hover:bg-[#C5A880] group-hover:text-[#141312] transition-colors">
                    <Instagram className="w-4 h-4 text-[#141312]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#8C827A]">Follow Our Journal</div>
                    <div className="font-medium text-xs sm:text-sm">@aurawear.boutique</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Stylized Google Maps Luxury Integration Card */}
            <div className="bg-[#141312] text-[#FBF9F5] p-5 border border-[#C5A880]/30 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-xs uppercase tracking-[0.18em] font-semibold text-[#DFCAAB]">
                    Savile Row Atelier Map
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Savile+Row+London"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#C5A880] hover:underline uppercase tracking-wider flex items-center gap-1"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-32 bg-[#2C221E] relative flex items-center justify-center overflow-hidden border border-[#C5A880]/20">
                {/* Stylized dark luxury map lines */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-full h-[1px] bg-[#C5A880]/30 top-1/2" />
                <div className="absolute h-full w-[1px] bg-[#C5A880]/30 left-1/2" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-[#C5A880] text-[#141312] flex items-center justify-center shadow-lg font-serif font-bold text-xs animate-pulse">
                    A
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#DFCAAB] mt-1 font-medium bg-[#141312]/80 px-2 py-0.5">
                    Mayfair Flagship
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-[#F5EFEB] border border-[#E8E1D7] p-8 sm:p-12 shadow-sm relative">
            <div className="mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141312] font-normal mb-2">
                Book an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#4A3B32]">
                Please complete your preferences. Our master tailor will prepare tailored fabric swatches prior to your arrival.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 px-6 bg-[#FBF9F5] border border-[#C5A880] text-center">
                <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#9E7D47] flex items-center justify-center mx-auto mb-4 border border-[#C5A880]/50">
                  <CheckCircle className="w-8 h-8 text-[#9E7D47]" />
                </div>
                <h4 className="font-serif text-2xl text-[#141312] mb-2 font-medium">
                  Appointment Request Confirmed
                </h4>
                <p className="text-sm text-[#4A3B32] max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-[#141312]">{formData.name}</strong>. Our bespoke concierge has reserved your request and will contact you at <strong className="text-[#141312]">{formData.phone || formData.email}</strong> within 4 business hours to finalize fitting details.
                </p>

                <div className="inline-block p-4 bg-[#F5EFEB] border border-[#E8E1D7] text-left text-xs mb-8">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#8C827A] mb-1">
                    Booking Reference
                  </div>
                  <div className="font-mono text-base font-bold text-[#9E7D47] mb-2">
                    {submittedRef}
                  </div>
                  <div className="text-[#4A3B32]">
                    <strong>Service:</strong> {formData.serviceRequired}
                  </div>
                  <div className="text-[#4A3B32]">
                    <strong>Preferred Date:</strong> {formData.preferredDate || "Earliest Availability"}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        preferredDate: '',
                        serviceRequired: 'Bespoke Three-Piece Suit Commission',
                        boutiqueLocation: '24 Savile Row, Mayfair, London',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 bg-[#141312] text-[#DFCAAB] text-xs uppercase tracking-[0.16em] font-medium border border-[#C5A880] hover:bg-[#2C221E] cursor-pointer"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Wright"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] placeholder-[#8C827A] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2831"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] placeholder-[#8C827A] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] placeholder-[#8C827A] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="Bespoke Three-Piece Suit Commission">Bespoke Three-Piece Suit Commission</option>
                      <option value="Wedding Nuptial & Black-Tie Consultation">Wedding Nuptial & Black-Tie Consultation</option>
                      <option value="Made-to-Measure Blazer & Trousers">Made-to-Measure Blazer & Trousers</option>
                      <option value="Bespoke Shirtmaker Fitting">Bespoke Shirtmaker Fitting</option>
                      <option value="Private Wardrobe Styling Session">Private Wardrobe Styling Session</option>
                    </select>
                  </div>

                  {/* Boutique Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                      Boutique Location *
                    </label>
                    <select
                      value={formData.boutiqueLocation}
                      onChange={(e) => setFormData({ ...formData, boutiqueLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="24 Savile Row, Mayfair, London">Mayfair, London (24 Savile Row)</option>
                      <option value="680 Madison Avenue, New York">Madison Ave, New York (680 Madison Ave)</option>
                      <option value="Virtual Sartorial Video Consultation">Virtual Sartorial Video Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                    Special Requests or Fabric Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the occasion, preferred fabrics, or silhouette details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FBF9F5] border border-[#E8E1D7] text-sm text-[#141312] placeholder-[#8C827A] focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Reservation...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C5A880]" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>

                <div className="text-center text-[11px] text-[#8C827A]">
                  By submitting, you agree to our private bespoke consultation protocol and terms.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
