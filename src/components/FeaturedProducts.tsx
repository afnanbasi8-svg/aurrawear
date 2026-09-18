import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Sparkles, Check } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/fashionData';
import { Product } from '../types';

interface FeaturedProductsProps {
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onViewProductDetails: (product: Product) => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  wishlistIds,
  onToggleWishlist,
  onViewProductDetails,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories = ['All', 'Bespoke & Suits', 'Blazers & Knitwear', 'Fine Shirts', 'Smart Casual', 'Accessories'];

  const filteredProducts = selectedCategory === 'All'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.subcategory === selectedCategory || p.category === selectedCategory.toLowerCase());

  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.sizes[0] || 'Standard';
    onAddToCart(product, defaultSize);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1800);
  };

  return (
    <section id="featured-products" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
                READY-TO-WEAR & ATELIER COMMISSIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight">
              Featured Garments
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium px-4 py-2 whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-[#141312] text-[#DFCAAB] border-[#C5A880]'
                    : 'bg-[#F5EFEB] text-[#4A3B32] border-[#E8E1D7] hover:border-[#C5A880]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-[#F5EFEB] border border-[#E8E1D7] flex flex-col justify-between transition-all duration-400 hover:border-[#C5A880] hover:shadow-lg relative"
              >
                {/* Image Container with Hover Zoom & Image Swap */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E1D7]/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.isBespoke && (
                      <span className="bg-[#141312]/90 text-[#DFCAAB] text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 border border-[#C5A880]/50 backdrop-blur-xs">
                        Bespoke
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-[#C5A880] text-[#141312] text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1">
                        New Season
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="bg-[#2C221E] text-[#FBF9F5] text-[9px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 border border-[#C5A880]/30">
                        Signature
                      </span>
                    )}
                  </div>

                  {/* Wishlist Icon */}
                  <button
                    id={`wishlist-toggle-${product.id}`}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isWishlisted
                        ? 'bg-[#141312] text-[#C5A880] scale-110'
                        : 'bg-[#FBF9F5]/90 text-[#2C221E] hover:bg-[#141312] hover:text-[#C5A880]'
                    }`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      className={`w-4 h-4 ${isWishlisted ? 'fill-[#C5A880] stroke-[#C5A880]' : 'stroke-current stroke-[1.8]'}`}
                    />
                  </button>

                  {/* Overlay Action on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#141312]/90 via-[#141312]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={() => onViewProductDetails(product)}
                      className="flex-1 py-2.5 bg-[#FBF9F5] hover:bg-[#C5A880] text-[#141312] text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="p-2.5 bg-[#141312] hover:bg-[#2C221E] text-[#DFCAAB] border border-[#C5A880] transition-colors shadow"
                      title="Quick Add to Bag"
                    >
                      {justAddedId === product.id ? (
                        <Check className="w-4 h-4 text-[#C5A880]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 flex flex-col flex-grow justify-between bg-[#F5EFEB]">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E7D47] mb-1">
                      {product.origin} • {product.fabric.split(' ')[0]}
                    </div>
                    <h3 className="font-serif text-lg text-[#141312] font-medium leading-snug mb-2 group-hover:text-[#9E7D47] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#4A3B32] line-clamp-2 leading-relaxed mb-4 font-normal">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-[#E8E1D7] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-lg text-[#141312] font-semibold">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-[#8C827A] line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#8C827A] tracking-wider uppercase">
                        {product.fit}
                      </div>
                    </div>

                    <button
                      id={`view-details-btn-${product.id}`}
                      onClick={() => onViewProductDetails(product)}
                      className="text-xs uppercase tracking-[0.16em] font-semibold text-[#141312] hover:text-[#9E7D47] transition-colors cursor-pointer"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
