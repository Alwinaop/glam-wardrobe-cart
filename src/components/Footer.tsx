import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">LuxeShop</h3>
            <p className="text-sm text-muted-foreground">
              Your premier destination for luxury fashion accessories and apparel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shoes" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Shoes
                </Link>
              </li>
              <li>
                <Link to="/bags" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Bags
                </Link>
              </li>
              <li>
                <Link to="/watches" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Watches
                </Link>
              </li>
              <li>
                <Link to="/goggles" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Goggles
                </Link>
              </li>
              <li>
                <Link to="/dresses" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Dresses
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LuxeShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
