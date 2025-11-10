import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

const Header = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: 'Shoes', path: '/shoes' },
    { name: 'Bags', path: '/bags' },
    { name: 'Watches', path: '/watches' },
    { name: 'Goggles', path: '/goggles' },
    { name: 'Dresses', path: '/dresses' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-luxury-gold animate-pulse" />
            <h1 className="text-2xl font-serif font-bold tracking-tight group-hover:luxury-text transition-all duration-500">
              LuxeShop
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-luxury-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-luxury-gold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-luxury-gold after:transition-all after:duration-300 hover:after:w-full pb-1"
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="hidden md:flex hover:text-luxury-gold transition-colors">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-luxury-gold transition-colors group"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-luxury-gold text-primary text-xs flex items-center justify-center font-bold shadow-gold animate-pulse">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t py-6 space-y-4 animate-fade-in">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="block py-2 text-sm font-medium tracking-wide transition-colors hover:text-luxury-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium tracking-wide transition-colors hover:text-luxury-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
