import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart, Calendar, Phone, MapPin, ChevronRight } from 'lucide-react';
import { BRAND_INFO } from '../data/fashionData';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenAppointment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Bespoke Tailoring', href: '#bespoke' },
    { label: 'Accessories', href: '#accessories' },
    { label: 'Shop Online', href: '#featured-products' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div id="top-announcement-bar" className="bg-[#141312] text-[#DFCAAB] text-[11px] md:text-xs tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-[#2C221E] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-block text-[#8C827A] text-[10px]">MAYFAIR • MADISON AVE • MILANO</span>
          <span className="mx-auto sm:mx-0 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] inline-block animate-pulse"></span>
            Complimentary Private Tailoring Consultations & Worldwide Concierge
          </span>
          <a
            href={`tel:${BRAND_INFO.phone}`}
            className="hidden md:flex items-center gap-1.5 hover:text-[#C5A880] transition-colors text-[10px] text-[#A69C92]"
          >
            <Phone className="w-3 h-3 text-[#C5A880]" />
            {BRAND_INFO.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D7] py-3.5'
            : 'bg-[#FBF9F5] border-b border-[#E8E1D7]/70 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#141312] hover:text-[#C5A880] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <a
              id="header-brand-logo"
              href="#hero"
              className="flex flex-col items-center group text-center"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-semibold text-[#141312] group-hover:text-[#C5A880] transition-colors">
                AURA WEAR
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase text-[#8C827A] font-medium -mt-0.5">
                Mens Boutique • Est. 2023
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-7 xl:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-[13px] uppercase tracking-[0.16em] font-medium text-[#2C221E] hover:text-[#9E7D47] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Wishlist, Cart, Book Button */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Wishlist Button */}
              <button
                id="header-wishlist-btn"
                onClick={onOpenWishlist}
                className="relative p-2 text-[#2C221E] hover:text-[#C5A880] transition-colors focus:outline-none"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5 stroke-[1.7]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A880] text-[#141312] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                id="header-cart-btn"
                onClick={onOpenCart}
                className="relative p-2 text-[#2C221E] hover:text-[#C5A880] transition-colors focus:outline-none"
                aria-label="View Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.7]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#141312] text-[#DFCAAB] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Prominent Book an Appointment Button */}
              <button
                id="header-book-appointment-btn"
                onClick={onOpenAppointment}
                className="hidden sm:inline-flex items-center gap-2 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs uppercase tracking-[0.18em] font-medium px-4 py-2.5 rounded-none border border-[#C5A880]/50 hover:border-[#C5A880] shadow-sm transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden fixed inset-x-0 top-full bg-[#FBF9F5] border-b border-[#E8E1D7] shadow-xl px-6 py-8 transition-all"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between text-base uppercase tracking-[0.15em] font-medium text-[#141312] hover:text-[#C5A880] py-2 border-b border-[#E8E1D7]/60"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A880]" />
                </a>
              ))}
              <div className="pt-4">
                <button
                  id="mobile-book-appointment-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointment();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#141312] text-[#FBF9F5] text-xs uppercase tracking-[0.2em] font-medium py-3 border border-[#C5A880] shadow-sm hover:bg-[#2C221E]"
                >
                  <Calendar className="w-4 h-4 text-[#C5A880]" />
                  <span>Book an Appointment</span>
                </button>
              </div>
              <div className="pt-2 text-center text-xs text-[#8C827A] flex items-center justify-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Mayfair, London & Madison Ave, New York</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
