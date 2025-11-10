export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'shoes' | 'bags' | 'watches' | 'goggles' | 'dresses';
  description: string;
  rating: number;
  reviews: number;
  sizes?: string[];
  colors?: { name: string; value: string }[];
  brand: string;
  inStock: boolean;
  features?: string[];
}

export const products: Product[] = [
  // Shoes
  {
    id: 'shoe-1',
    name: 'Classic Leather Sneakers',
    price: 89.99,
    originalPrice: 129.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'shoes',
    description: 'Premium leather sneakers with exceptional comfort and style. Perfect for everyday wear.',
    rating: 4.5,
    reviews: 234,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: [
      { name: 'White', value: '#FFFFFF' },
      { name: 'Black', value: '#000000' },
      { name: 'Navy', value: '#1E3A8A' },
    ],
    brand: 'StyleWalk',
    inStock: true,
    features: ['Genuine leather', 'Cushioned insole', 'Rubber outsole', 'Breathable lining'],
  },
  {
    id: 'shoe-2',
    name: 'Running Performance Shoes',
    price: 129.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'shoes',
    description: 'High-performance running shoes designed for speed and comfort.',
    rating: 4.8,
    reviews: 567,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: [
      { name: 'Red', value: '#EF4444' },
      { name: 'Blue', value: '#3B82F6' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'SpeedFlex',
    inStock: true,
  },
  {
    id: 'shoe-3',
    name: 'Formal Oxford Shoes',
    price: 159.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'shoes',
    description: 'Elegant oxford shoes for formal occasions.',
    rating: 4.6,
    reviews: 189,
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: [
      { name: 'Brown', value: '#92400E' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'EliteFormal',
    inStock: true,
  },
  // Bags
  {
    id: 'bag-1',
    name: 'Luxury Leather Tote',
    price: 249.99,
    originalPrice: 349.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bags',
    description: 'Spacious leather tote bag with multiple compartments. Perfect for work or travel.',
    rating: 4.7,
    reviews: 423,
    colors: [
      { name: 'Tan', value: '#D97706' },
      { name: 'Black', value: '#000000' },
      { name: 'Burgundy', value: '#991B1B' },
    ],
    brand: 'LuxeCarry',
    inStock: true,
    features: ['Genuine leather', 'Multiple pockets', 'Laptop compartment', 'Detachable strap'],
  },
  {
    id: 'bag-2',
    name: 'Designer Crossbody Bag',
    price: 179.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'bags',
    description: 'Chic crossbody bag with adjustable strap and gold hardware.',
    rating: 4.9,
    reviews: 612,
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Beige', value: '#F5F5DC' },
      { name: 'Red', value: '#DC2626' },
    ],
    brand: 'ChicStyle',
    inStock: true,
  },
  {
    id: 'bag-3',
    name: 'Travel Backpack',
    price: 119.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'bags',
    description: 'Durable backpack with laptop sleeve and water-resistant material.',
    rating: 4.5,
    reviews: 298,
    colors: [
      { name: 'Navy', value: '#1E3A8A' },
      { name: 'Gray', value: '#6B7280' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'TravelPro',
    inStock: true,
  },
  // Watches
  {
    id: 'watch-1',
    name: 'Chronograph Sport Watch',
    price: 299.99,
    originalPrice: 449.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'watches',
    description: 'Precision sport watch with chronograph function and water resistance.',
    rating: 4.8,
    reviews: 789,
    colors: [
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Black', value: '#000000' },
      { name: 'Gold', value: '#FFD700' },
    ],
    brand: 'TimeElite',
    inStock: true,
    features: ['Water resistant', 'Chronograph', 'Date display', 'Luminous hands'],
  },
  {
    id: 'watch-2',
    name: 'Classic Leather Watch',
    price: 189.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'watches',
    description: 'Timeless leather strap watch with minimalist design.',
    rating: 4.6,
    reviews: 445,
    colors: [
      { name: 'Brown', value: '#92400E' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'ClassicTime',
    inStock: true,
  },
  {
    id: 'watch-3',
    name: 'Digital Smart Watch',
    price: 349.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'watches',
    description: 'Advanced smartwatch with fitness tracking and notifications.',
    rating: 4.7,
    reviews: 1023,
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Silver', value: '#C0C0C0' },
    ],
    brand: 'TechWatch',
    inStock: true,
  },
  // Goggles
  {
    id: 'goggle-1',
    name: 'Aviator Sunglasses',
    price: 149.99,
    originalPrice: 199.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'goggles',
    description: 'Classic aviator sunglasses with UV protection and polarized lenses.',
    rating: 4.7,
    reviews: 534,
    colors: [
      { name: 'Gold', value: '#FFD700' },
      { name: 'Silver', value: '#C0C0C0' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'SunStyle',
    inStock: true,
    features: ['UV protection', 'Polarized lenses', 'Metal frame', 'Scratch resistant'],
  },
  {
    id: 'goggle-2',
    name: 'Sport Performance Goggles',
    price: 89.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'goggles',
    description: 'Performance sports goggles with anti-fog coating.',
    rating: 4.5,
    reviews: 267,
    colors: [
      { name: 'Red', value: '#EF4444' },
      { name: 'Blue', value: '#3B82F6' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'SportVision',
    inStock: true,
  },
  {
    id: 'goggle-3',
    name: 'Designer Cat-Eye Sunglasses',
    price: 179.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'goggles',
    description: 'Trendy cat-eye sunglasses with acetate frame.',
    rating: 4.9,
    reviews: 678,
    colors: [
      { name: 'Tortoise', value: '#8B4513' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'GlamLook',
    inStock: true,
  },
  // Dresses
  {
    id: 'dress-1',
    name: 'Elegant Evening Gown',
    price: 299.99,
    originalPrice: 449.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'dresses',
    description: 'Stunning floor-length evening gown perfect for special occasions.',
    rating: 4.9,
    reviews: 892,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', value: '#1E3A8A' },
      { name: 'Burgundy', value: '#991B1B' },
      { name: 'Black', value: '#000000' },
    ],
    brand: 'GlamourStyle',
    inStock: true,
    features: ['Floor length', 'Side zip', 'Fully lined', 'Dry clean only'],
  },
  {
    id: 'dress-2',
    name: 'Summer Floral Dress',
    price: 79.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'dresses',
    description: 'Light and breezy floral dress perfect for summer days.',
    rating: 4.6,
    reviews: 423,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Floral Pink', value: '#FDB7D6' },
      { name: 'Floral Blue', value: '#93C5FD' },
    ],
    brand: 'SummerBreeze',
    inStock: true,
  },
  {
    id: 'dress-3',
    name: 'Professional Work Dress',
    price: 129.99,
    image: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    category: 'dresses',
    description: 'Sophisticated work dress with modern silhouette.',
    rating: 4.7,
    reviews: 356,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Navy', value: '#1E3A8A' },
      { name: 'Black', value: '#000000' },
      { name: 'Gray', value: '#6B7280' },
    ],
    brand: 'CareerChic',
    inStock: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.originalPrice).slice(0, 8);
};
