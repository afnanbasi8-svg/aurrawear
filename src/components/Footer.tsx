import React, { useState } from 'react';
import { Instagram, Send, MapPin, Phone, Mail, Check, Sparkles } from 'lucide-react';
import { BRAND_INFO, COLLECTIONS_DATA } from '../data/fashionData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Bespoke Tailoring', href: '#bespoke' },
    { label: 'Featured Products', href: '#featured-products' },
    { label: 'About Aura Wear', href: '#about' },
    { label: 'Lookbook & Journal', href: '#lookbook' },
    { label: 'Book Consultation', href: '#contact' },
  ];

  const supportLinks = [
    { label: 'Private Fitting Protocol', href: '#contact' },
    { label: 'Sartorial Garment Care', href: '#featured-products' },
    { label: 'Global Shipping & Delivery', href: '#contact' },
    { label: 'Returns & Alterations Policy', href: '#contact' },
    { label: 'Corporate & Wedding Inquiries', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#141312] text-[#FBF9F5] border-t border-[#2C221E] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Newsletter Subscription */}
        <div className="pb-16 mb-16 border-b border-[#2C221E] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#DFCAAB] mb-2">
              SARTORIAL CORRESPONDENCE
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FBF9F5] font-light">
              Receive Privileged Invitations & Private Cloth Drops
            </h3>
            <p className="text-xs sm:text-sm text-[#8C827A] mt-2 font-light">
              Subscribers receive early access to seasonal fabric trunk shows, private styling salons, and bespoke editorial releases.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-[#2C221E] border border-[#C5A880] text-center flex items-center justify-center gap-2 text-sm text-[#DFCAAB]">
                <Check className="w-4 h-4 text-[#C5A880]" />
                <span>Thank you. You have been added to the AURA WEAR Private Register.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#1D1B1A] border border-[#3E322C] text-sm text-[#FBF9F5] placeholder-[#8C827A] focus:outline-none focus:border-[#C5A880] transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#C5A880] hover:bg-[#B39255] text-[#141312] text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Tier: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2C221E]">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="font-serif text-2xl tracking-[0.22em] font-semibold text-[#FBF9F5]">
                AURA WEAR
              </span>
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#C5A880] mt-0.5">
                Mens Boutique • Est. 2023
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8C827A] leading-relaxed max-w-sm font-light">
              A contemporary luxury men's fashion boutique dedicated to timeless style, master tailoring, bespoke suits, and sartorial elegance.
            </p>

            <div className="space-y-2 text-xs text-[#D8CEBF]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>24 Savile Row, Mayfair, London W1S 2ES</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{BRAND_INFO.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-[#1D1B1A] border border-[#3E322C] hover:border-[#C5A880] hover:text-[#C5A880] text-[#D8CEBF] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-none bg-[#1D1B1A] border border-[#3E322C] hover:border-[#C5A880] hover:text-[#C5A880] text-[#D8CEBF] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-xs font-serif font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCAAB] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#8C827A] hover:text-[#C5A880] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCAAB] mb-5">
              Collections
            </h4>
            <ul className="space-y-3">
              {COLLECTIONS_DATA.map((col) => (
                <li key={col.id}>
                  <a
                    href="#collections"
                    className="text-xs text-[#8C827A] hover:text-[#C5A880] transition-colors"
                  >
                    {col.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFCAAB] mb-5">
              Customer Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#8C827A] hover:text-[#C5A880] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C827A] gap-4">
          <div>
            &copy; 2026 AURA WEAR Mens Boutique. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#contact" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-[#C5A880] transition-colors">Terms of Sartorial Service</a>
            <span>•</span>
            <a href="#contact" className="hover:text-[#C5A880] transition-colors">Atelier Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
