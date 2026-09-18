import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { Collections } from './components/Collections';
import { BespokeTailoring } from './components/BespokeTailoring';
import { Accessories } from './components/Accessories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutUs } from './components/AboutUs';
import { Testimonials } from './components/Testimonials';
import { Lookbook } from './components/Lookbook';
import { CtaSection } from './components/CtaSection';
import { ContactAndBooking } from './components/ContactAndBooking';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { AppointmentModal } from './components/AppointmentModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { LookbookModal } from './components/LookbookModal';
import { Product, CartItem, AccessoryItem, LookbookItem } from './types';
import { FEATURED_PRODUCTS } from './data/fashionData';

export default function App() {
  // Wishlist state with localStorage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wear_wishlist');
      return saved ? JSON.parse(saved) : ['prod-1', 'prod-5'];
    } catch {
      return ['prod-1', 'prod-5'];
    }
  });

  // Cart state with localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('aura_wear_cart');
      if (saved) return JSON.parse(saved);
      // Preload 1 curated piece for immediate luxury immersion
      return [
        {
          product: FEATURED_PRODUCTS[0],
          selectedSize: '40R',
          selectedColor: 'Charcoal Herringbone',
          quantity: 1,
        },
      ];
    } catch {
      return [];
    }
  });

  // Modals state
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeLookbook, setActiveLookbook] = useState<LookbookItem | null>(null);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState<string>('Bespoke Three-Piece Suit Commission');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Sync states to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aura_wear_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_wear_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Wishlist handlers
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
  };

  const handleClearWishlist = () => {
    setWishlistIds([]);
  };

  // Cart handlers
  const handleAddToCart = (product: Product, size: string = 'Standard', color?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size && item.selectedColor === color
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
      }
    });
  };

  const handleUpdateCartQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
      return;
    }
    setCartItems((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Category selection handler from Collections section
  const handleSelectCollectionCategory = (categoryId: string) => {
    const el = document.querySelector('#featured-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick view accessory conversion to Product
  const handleQuickViewAccessory = (item: AccessoryItem) => {
    const prod: Product = {
      id: item.id,
      name: item.name,
      category: 'accessories',
      subcategory: item.typeName,
      shortDescription: item.description,
      fullDescription: `${item.description} Masterfully handcrafted using certified ${item.material}. Designed for the distinguished gentleman who demands perfection down to the finest detail.`,
      price: item.price,
      image: item.image,
      fabric: item.material,
      origin: 'European Artisan Guild',
      fit: 'Universal Size',
      sizes: ['One Size'],
      colors: [{ name: 'Artisan Finish', hex: '#3E322C' }],
    };
    setActiveProduct(prod);
  };

  // Fitting modal trigger from product modal
  const handleBookFittingFromProduct = (product: Product) => {
    setActiveProduct(null);
    setAppointmentService(`Fitting & Measurement: ${product.name}`);
    setIsAppointmentOpen(true);
  };

  const handleScrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141312] flex flex-col font-sans selection:bg-[#C5A880]/30 selection:text-[#141312]">
      {/* Sticky Header with navigation and counts */}
      <Header
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAppointment={() => {
          setAppointmentService('Bespoke Three-Piece Suit Commission');
          setIsAppointmentOpen(true);
        }}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenAppointment={() => {
            setAppointmentService('Bespoke Three-Piece Suit Commission');
            setIsAppointmentOpen(true);
          }}
        />

        {/* Brand Introduction Section */}
        <BrandIntro />

        {/* Collections Editorial Grid */}
        <Collections onSelectCategory={handleSelectCollectionCategory} />

        {/* Bespoke Tailoring Split-Screen */}
        <BespokeTailoring
          onOpenAppointment={() => {
            setAppointmentService('Bespoke Three-Piece Suit Commission');
            setIsAppointmentOpen(true);
          }}
        />

        {/* Accessories Product Grid */}
        <Accessories
          onQuickViewAccessory={handleQuickViewAccessory}
          onAddToCart={handleAddToCart}
        />

        {/* Featured Products Section */}
        <FeaturedProducts
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onViewProductDetails={(product) => setActiveProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* About AURA WEAR Editorial Section */}
        <AboutUs
          onOpenAppointment={() => {
            setAppointmentService('Private Wardrobe Styling Session');
            setIsAppointmentOpen(true);
          }}
        />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Sartorial Lookbook & Instagram Grid */}
        <Lookbook
          onOpenLookModal={(item) => setActiveLookbook(item)}
        />

        {/* Full-Width Dark CTA Section */}
        <CtaSection
          onShopOnline={() => handleScrollToSection('#featured-products')}
          onVisitBoutique={() => {
            setAppointmentService('Bespoke Consultation');
            setIsAppointmentOpen(true);
          }}
        />

        {/* Contact & Appointment Booking Section */}
        <ContactAndBooking />
      </main>

      {/* Dark Luxury Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        isWishlisted={activeProduct ? wishlistIds.includes(activeProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBookFitting={handleBookFittingFromProduct}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedService={appointmentService}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onProceedToBooking={() => {
          setAppointmentService('Fitting for Selected Bag Garments');
          setIsAppointmentOpen(true);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
        onClearWishlist={handleClearWishlist}
      />

      <LookbookModal
        item={activeLookbook}
        onClose={() => setActiveLookbook(null)}
        onBookStyling={() => {
          setAppointmentService(`Styling Commission: ${activeLookbook?.title || 'Lookbook Ensemble'}`);
          setIsAppointmentOpen(true);
        }}
      />
    </div>
  );
}
