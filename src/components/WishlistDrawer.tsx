import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/fashionData';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size?: string) => void;
  onClearWishlist: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onAddToCart,
  onClearWishlist,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = FEATURED_PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div
      id="wishlist-drawer-backdrop"
      className="fixed inset-0 z-50 bg-[#141312]/70 backdrop-blur-xs flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="wishlist-drawer-panel"
        className="relative w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#E8E1D7] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 bg-[#141312] text-[#FBF9F5] border-b border-[#2C221E] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C5A880] fill-[#C5A880]" />
            <div>
              <h3 className="font-serif text-xl tracking-wide">Saved Pieces</h3>
              <span className="text-[10px] uppercase tracking-widest text-[#DFCAAB]">
                {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'Curated Garment' : 'Curated Garments'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-none bg-[#1D1B1A] hover:bg-[#2C221E] text-[#D8CEBF] hover:text-[#C5A880] border border-[#3E322C] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistedProducts.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#F5EFEB] border border-[#E8E1D7] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#8C827A]" />
              </div>
              <h4 className="font-serif text-xl text-[#141312] mb-1">Your Wishlist is Empty</h4>
              <p className="text-xs text-[#8C827A] max-w-xs mb-6 font-normal">
                Click the heart icon on any garment to save it for your next fitting or commission.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#141312] text-[#DFCAAB] text-xs uppercase tracking-[0.18em] font-semibold border border-[#C5A880] hover:bg-[#2C221E] cursor-pointer"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            wishlistedProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-[#F5EFEB] border border-[#E8E1D7] flex gap-4 transition-all hover:border-[#C5A880]/60"
              >
                {/* Image */}
                <div className="w-20 h-24 bg-[#E8E1D7] shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-sm font-medium text-[#141312] line-clamp-1">
                        {product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-[#8C827A] hover:text-[#C5A880] transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#8C827A] mt-0.5">
                      {product.origin} • {product.fabric.split(' ')[0]}
                    </div>

                    <div className="font-serif text-sm font-semibold text-[#141312] mt-1">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(product, product.sizes[0] || 'Standard');
                      onRemoveFromWishlist(product.id);
                    }}
                    className="mt-2 py-1.5 px-3 bg-[#141312] hover:bg-[#2C221E] text-[#DFCAAB] text-[11px] uppercase tracking-[0.16em] font-semibold border border-[#C5A880] flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3 h-3 text-[#C5A880]" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {wishlistedProducts.length > 0 && (
          <div className="p-6 bg-[#F5EFEB] border-t border-[#E8E1D7] flex items-center justify-between">
            <button
              onClick={onClearWishlist}
              className="text-xs uppercase tracking-wider text-[#8C827A] hover:text-[#141312] transition-colors cursor-pointer"
            >
              Clear Saved List
            </button>
            <button
              onClick={() => {
                wishlistedProducts.forEach((p) => {
                  onAddToCart(p, p.sizes[0] || 'Standard');
                });
                onClearWishlist();
              }}
              className="px-4 py-2 bg-[#141312] text-[#DFCAAB] text-xs uppercase tracking-[0.16em] font-semibold border border-[#C5A880] cursor-pointer"
            >
              Move All to Bag
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
