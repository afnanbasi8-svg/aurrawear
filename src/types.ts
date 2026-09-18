export interface Product {
  id: string;
  name: string;
  category: 'suits' | 'blazers' | 'shirts' | 'trousers' | 'casual' | 'accessories';
  subcategory?: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  fabric: string;
  origin: string;
  fit: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isBespoke?: boolean;
  isBestseller?: boolean;
}

export interface CollectionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  accentText: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  type: 'wallets' | 'belts' | 'ties' | 'pocket-squares' | 'cufflinks' | 'shoes' | 'watches';
  typeName: string;
  description: string;
  price: number;
  image: string;
  material: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  service: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'Suit Styling' | 'Boutique Interiors' | 'Tailoring' | 'Accessories' | 'Wedding Looks' | 'Smart Casual Outfits';
  image: string;
  description: string;
  details: string[];
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  serviceRequired: string;
  boutiqueLocation: string;
  message: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
}
