import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Scissors, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (product: Product, size: string, color?: string) => void;
  onBookFitting: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onBookFitting,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141312]/80 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="product-modal-container"
        className="relative w-full max-w-4xl bg-[#FBF9F5] border border-[#E8E1D7] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#FBF9F5] hover:bg-[#141312] text-[#141312] hover:text-[#DFCAAB] border border-[#E8E1D7] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left: Product Image */}
          <div className="md:col-span-5 relative bg-[#E8E1D7] min-h-[350px] md:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-[#141312]/90 text-[#DFCAAB] text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 border border-[#C5A880]/30 backdrop-blur-xs">
                {product.origin}
              </span>
            </div>
          </div>

          {/* Right: Product Details & Actions */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-[#FBF9F5]">
            <div>
              {/* Category & Origin */}
              <div className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#9E7D47] mb-2">
                {product.subcategory || product.category} • Atelier Series
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl text-[#141312] font-normal leading-tight mb-3">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-2xl text-[#141312] font-semibold">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C827A] line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-[#9E7D47] uppercase tracking-wider font-medium ml-2">
                  Complimentary Atelier Delivery
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#4A3B32] leading-relaxed mb-6 font-normal">
                {product.fullDescription}
              </p>

              {/* Fabric & Technical Specs */}
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#F5EFEB] border border-[#E8E1D7] mb-6 text-xs">
                <div>
                  <span className="text-[10px] text-[#8C827A] uppercase tracking-wider block">Fabric Provenance</span>
                  <span className="font-medium text-[#141312]">{product.fabric}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8C827A] uppercase tracking-wider block">Tailoring Silhouette</span>
                  <span className="font-medium text-[#141312]">{product.fit}</span>
                </div>
              </div>

              {/* Colors */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-[0.16em] font-medium text-[#141312] mb-2">
                    Color Selection: <span className="text-[#9E7D47]">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all p-0.5 ${
                          selectedColor === c.name
                            ? 'border-[#9E7D47] scale-110'
                            : 'border-transparent hover:border-[#E8E1D7]'
                        }`}
                        title={c.name}
                      >
                        <span
                          className="w-full h-full rounded-full block border border-black/10"
                          style={{ backgroundColor: c.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-[0.16em] font-medium text-[#141312]">
                    Select Size
                  </label>
                  <button
                    onClick={() => onBookFitting(product)}
                    className="text-[11px] text-[#9E7D47] hover:underline uppercase tracking-wider"
                  >
                    Need Custom Measurements?
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.12em] font-medium border transition-colors ${
                        selectedSize === size
                          ? 'bg-[#141312] text-[#DFCAAB] border-[#C5A880]'
                          : 'bg-[#F5EFEB] text-[#141312] border-[#E8E1D7] hover:border-[#C5A880]/60'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#E8E1D7]">
              <div className="flex items-center gap-3">
                <button
                  id="modal-add-to-bag-btn"
                  onClick={handleAdd}
                  className="flex-1 py-3.5 bg-[#141312] hover:bg-[#2C221E] text-[#FBF9F5] hover:text-[#DFCAAB] text-xs uppercase tracking-[0.2em] font-semibold border border-[#C5A880] transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-[#C5A880]" />
                      <span>Added to Shopping Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
                      <span>Add to Bag (${product.price.toLocaleString()})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-3.5 border transition-colors ${
                    isWishlisted
                      ? 'bg-[#141312] border-[#C5A880] text-[#C5A880]'
                      : 'bg-[#F5EFEB] border-[#E8E1D7] text-[#141312] hover:border-[#C5A880]'
                  }`}
                  aria-label="Toggle wishlist"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#C5A880]' : ''}`} />
                </button>
              </div>

              <button
                onClick={() => onBookFitting(product)}
                className="w-full py-3 bg-[#F5EFEB] hover:bg-[#E8E1D7] text-[#141312] text-xs uppercase tracking-[0.16em] font-medium border border-[#E8E1D7] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scissors className="w-3.5 h-3.5 text-[#9E7D47]" />
                <span>Book Bespoke Fitting for this Piece</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
