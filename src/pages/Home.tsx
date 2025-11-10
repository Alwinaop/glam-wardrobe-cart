import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/data/products';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  const categories = [
    { name: 'Shoes', path: '/shoes', image: '/placeholder.svg', description: 'Step into style' },
    { name: 'Bags', path: '/bags', image: '/placeholder.svg', description: 'Carry with confidence' },
    { name: 'Watches', path: '/watches', image: '/placeholder.svg', description: 'Timeless elegance' },
    { name: 'Goggles', path: '/goggles', image: '/placeholder.svg', description: 'See in style' },
    { name: 'Dresses', path: '/dresses', image: '/placeholder.svg', description: 'Dress to impress' },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6 text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elevate Your Style
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Discover luxury fashion accessories and apparel that define your unique taste.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shoes">
                <Button size="lg" variant="secondary" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-smooth group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/dresses">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Explore our curated collections</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative overflow-hidden rounded-lg aspect-square hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Hot deals you don't want to miss</p>
          </div>
          <TrendingUp className="h-8 w-8 text-accent" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-accent to-luxury text-accent-foreground">
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Limited Time Offer</h2>
          <p className="text-xl mb-8 opacity-90">Get up to 50% off on selected items</p>
          <Link to="/shoes">
            <Button size="lg" variant="secondary">
              Shop Sale Items
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
