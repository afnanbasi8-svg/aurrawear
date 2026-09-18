import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onProceedToBooking: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToBooking,
}) => {
  if (!isOpen) return null;

  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      onClearCart();
      setCheckoutComplete(false);
      onClose();
    }, 3500);
  };

  return (
    <div
      id="cart-drawer-backdrop"
      className="fixed inset-0 z-50 bg-[#141312]/70 backdrop-blur-xs flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="cart-drawer-panel"
        className="relative w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E1D7] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#141312] text-[#FBF9F5] border-b border-[#2C221E] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C5A880]" />
            <div>
              <h3 className="font-serif text-xl tracking-wide">Shopping Bag</h3>
              <span className="text-[10px] uppercase tracking-widest text-[#DFCAAB]">
                {cartItems.length} {cartItems.length === 1 ? 'Garment' : 'Garments'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-none bg-[#1D1B1A] hover:bg-[#2C221E] text-[#D8CEBF] hover:text-[#C5A880] border border-[#3E322C] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close bag"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {checkoutComplete ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#9E7D47] flex items-center justify-center mx-auto mb-4 border border-[#C5A880]/50">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#141312] mb-2 font-medium">
                Atelier Order Received
              </h4>
              <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed max-w-xs mx-auto mb-4">
                Thank you for your commission. Our sartorial concierge will confirm delivery coordinates and dispatch your bespoke pieces.
              </p>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#8C827A]">
                Dispatching via Insured White-Glove Courier
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#F5EFEB] border border-[#E8E1D7] flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-[#8C827A]" />
              </div>
              <h4 className="font-serif text-xl text-[#141312] mb-1">Your Bag is Empty</h4>
              <p className="text-xs text-[#8C827A] max-w-xs mb-6 font-normal">
                Explore our formal suits, cashmere blazers, and curated accessories.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#141312] text-[#DFCAAB] text-xs uppercase tracking-[0.18em] font-semibold border border-[#C5A880] hover:bg-[#2C221E] cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.product.id}-${item.selectedSize}-${index}`}
                className="p-4 bg-[#F5EFEB] border border-[#E8E1D7] flex gap-4 transition-all hover:border-[#C5A880]/60"
              >
                {/* Image */}
                <div className="w-20 h-24 bg-[#E8E1D7] shrink-0 overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-sm font-medium text-[#141312] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(index)}
                        className="text-[#8C827A] hover:text-[#C5A880] transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#8C827A] mt-0.5">
                      Size: <span className="font-medium text-[#141312]">{item.selectedSize}</span>
                      {item.selectedColor && (
                        <> • Color: <span className="font-medium text-[#141312]">{item.selectedColor}</span></>
                      )}
                    </div>

                    <div className="font-serif text-sm font-semibold text-[#141312] mt-1">
                      ${item.product.price.toLocaleString()}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#E8E1D7]">
                    <div className="flex items-center border border-[#E8E1D7] bg-[#FBF9F5]">
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#141312] hover:bg-[#E8E1D7]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#141312]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#141312] hover:bg-[#E8E1D7]"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs font-serif font-bold text-[#141312]">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && !checkoutComplete && (
          <div className="p-6 bg-[#F5EFEB] border-t border-[#E8E1D7] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="uppercase tracking-wider text-xs text-[#4A3B32]">Complimentary Shipping</span>
              <span className="text-xs font-semibold text-[#9E7D47]">Worldwide Express</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#E8E1D7]">
              <span className="font-serif text-base uppercase tracking-wider text-[#141312]">Subtotal</span>
              <span className="font-serif text-2xl font-bold text-[#141312]">
                ${subtotal.toLocaleString()}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full py-4 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              <span>Proceed to Luxury Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </button>

            <button
              onClick={() => {
                onClose();
                onProceedToBooking();
              }}
              className="w-full py-2.5 text-[11px] uppercase tracking-[0.16em] text-[#9E7D47] hover:underline text-center cursor-pointer"
            >
              Or Book In-Person Fitting for These Pieces
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
