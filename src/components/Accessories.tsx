import React, { useState } from 'react';
import { Sparkles, Eye, ShoppingBag, Check } from 'lucide-react';
import { ACCESSORIES_DATA } from '../data/fashionData';
import { AccessoryItem, Product } from '../types';

interface AccessoriesProps {
  onQuickViewAccessory: (item: AccessoryItem) => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const Accessories: React.FC<AccessoriesProps> = ({
  onQuickViewAccessory,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Accessories' },
    { id: 'wallets', label: 'Wallets' },
    { id: 'belts', label: 'Belts' },
    { id: 'ties', label: 'Ties' },
    { id: 'pocket-squares', label: 'Pocket Squares' },
    { id: 'cufflinks', label: 'Cufflinks' },
    { id: 'shoes', label: 'Formal Shoes' },
    { id: 'watches', label: 'Watches' },
  ];

  const filteredItems = activeFilter === 'all'
    ? ACCESSORIES_DATA
    : ACCESSORIES_DATA.filter((item) => item.type === activeFilter);

  const handleAddAccessoryToBag = (item: AccessoryItem) => {
    // Map accessory to standard product format for the cart
    const prod: Product = {
      id: item.id,
      name: item.name,
      category: 'accessories',
      subcategory: item.typeName,
      shortDescription: item.description,
      fullDescription: `${item.description} Handcrafted with ${item.material}.`,
      price: item.price,
      image: item.image,
      fabric: item.material,
      origin: 'European Atelier',
      fit: 'Universal / Bespoke',
      sizes: ['Standard'],
      colors: [{ name: 'Default', hex: '#2C221E' }],
    };

    onAddToCart(prod, 'Standard');
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  return (
    <section id="accessories" className="py-24 sm:py-32 bg-[#FBF9F5] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#9E7D47]">
              SARTORIAL FINISHING TOUCHES
            </span>
            <span className="w-6 h-[1.5px] bg-[#C5A880]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141312] font-normal tracking-tight mb-5">
            The Accessories Atelier
          </h2>
          <p className="text-sm sm:text-base text-[#4A3B32] font-light leading-relaxed max-w-xl mx-auto">
            From hand-patinated box calf shoes to 18k gold cufflinks and seven-fold Como silk ties, discover refined accents crafted in warm brown and gold tones.
          </p>

          {/* Filter Pills with Horizontal Scroll on Mobile */}
          <div className="flex items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                id={`accessory-tab-${tab.id}`}
                onClick={() => setActiveFilter(tab.id)}
                className={`text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium px-4 py-2 whitespace-nowrap transition-all duration-300 border ${
                  activeFilter === tab.id
                    ? 'bg-[#2C221E] text-[#DFCAAB] border-[#C5A880]'
                    : 'bg-[#F5EFEB] text-[#4A3B32] border-[#E8E1D7] hover:border-[#C5A880]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`accessory-card-${item.id}`}
              className="group bg-[#F5EFEB] border border-[#E8E1D7] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#C5A880] hover:shadow-md"
            >
              <div>
                {/* Image Container with Warm Tones */}
                <div className="relative aspect-square overflow-hidden bg-[#E8E1D7]/50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#2C221E]/10 group-hover:bg-transparent transition-colors" />

                  {/* Material Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#141312]/85 text-[#DFCAAB] text-[9px] tracking-[0.18em] uppercase font-medium px-2.5 py-1 border border-[#C5A880]/40 backdrop-blur-xs">
                      {item.material}
                    </span>
                  </div>

                  {/* Hover Quick Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-[#141312]/40 backdrop-blur-[2px] transition-opacity duration-300">
                    <button
                      onClick={() => onQuickViewAccessory(item)}
                      className="p-3 bg-[#FBF9F5] text-[#141312] hover:bg-[#C5A880] transition-colors shadow-lg cursor-pointer"
                      title="Inspect Details"
                      aria-label="Inspect details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleAddAccessoryToBag(item)}
                      className="p-3 bg-[#141312] text-[#DFCAAB] hover:bg-[#2C221E] transition-colors border border-[#C5A880] shadow-lg cursor-pointer"
                      title="Add to Shopping Bag"
                      aria-label="Add to shopping bag"
                    >
                      {addedItem === item.id ? (
                        <Check className="w-4 h-4 text-[#C5A880]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9E7D47] mb-1">
                    {item.typeName}
                  </div>
                  <h3 className="font-serif text-lg text-[#141312] font-medium leading-snug mb-2 group-hover:text-[#9E7D47] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#4A3B32] line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Bag Footer */}
              <div className="p-5 pt-0 border-t border-[#E8E1D7]/60 flex items-center justify-between mt-auto">
                <span className="font-serif text-lg text-[#141312] font-semibold">
                  ${item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAddAccessoryToBag(item)}
                  className="text-xs uppercase tracking-[0.16em] font-semibold text-[#141312] hover:text-[#9E7D47] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {addedItem === item.id ? (
                    <span className="text-[#9E7D47] flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Added
                    </span>
                  ) : (
                    <span>Add to Bag +</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
