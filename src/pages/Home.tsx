import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';
import heroImage from '@/assets/hero-bg.jpg';
import shoeImage from '@/assets/shoe-1.jpg';
import bagImage from '@/assets/bag-1.jpg';
import watchImage from '@/assets/watch-1.jpg';
import goggleImage from '@/assets/goggle-1.jpg';
import dressImage from '@/assets/dress-1.jpg';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  const categories = [
    { name: 'Shoes', path: '/shoes', image: shoeImage, description: 'Step into style' },
    { name: 'Bags', path: '/bags', image: bagImage, description: 'Carry with confidence' },
    { name: 'Watches', path: '/watches', image: watchImage, description: 'Timeless elegance' },
    { name: 'Goggles', path: '/goggles', image: goggleImage, description: 'See in style' },
    { name: 'Dresses', path: '/dresses', image: dressImage, description: 'Dress to impress' },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-8 text-white animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-luxury-gold/20 backdrop-blur-sm px-4 py-2 rounded-full border border-luxury-gold/30">
              <Star className="h-4 w-4 text-luxury-gold fill-luxury-gold" />
              <span className="text-sm font-semibold tracking-wide">LUXURY COLLECTION 2024</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight">
              Elevate Your
              <span className="block luxury-text">Style</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Discover luxury fashion accessories and apparel that define your unique taste and sophistication.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/shoes">
                <Button size="lg" className="group bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-semibold tracking-wide h-14 px-8 shadow-gold">
                  SHOP COLLECTION
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/dresses">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm h-14 px-8 font-semibold tracking-wide">
                  NEW ARRIVALS
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our curated collections of premium accessories and apparel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative overflow-hidden rounded-lg aspect-square hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-gold/0 group-hover:bg-luxury-gold/10 transition-colors duration-500 z-10" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-2xl font-serif font-bold mb-1 group-hover:luxury-text transition-all duration-500">
                  {category.name}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
              </div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none">
                <div className="absolute inset-0 animate-shimmer" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-luxury-gold" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Featured Products</h2>
            </div>
            <p className="text-muted-foreground text-lg">Exclusive deals you don't want to miss</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-black to-primary py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,193,7,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-shimmer" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-luxury-gold px-4 py-2 rounded-full">
              <span className="text-primary text-xs font-bold tracking-wider">LIMITED TIME</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
              Exclusive Sale
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get up to 50% off on selected luxury items
            </p>
            <Link to="/shoes">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-primary font-bold tracking-wide h-14 px-10 shadow-gold">
                SHOP SALE ITEMS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
