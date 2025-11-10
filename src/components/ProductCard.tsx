import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      category: product.category,
      size: product.sizes?.[0],
      color: product.colors?.[0]?.name,
    });
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <Card className="overflow-hidden border-0 shadow-luxury hover:shadow-gold transition-all duration-500 hover:-translate-y-3 bg-card">
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-background">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {product.originalPrice && (
            <div className="absolute top-3 right-3 bg-luxury-gold text-primary px-3 py-1.5 rounded-md text-xs font-bold tracking-wider shadow-gold">
              SALE
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/90 flex items-center justify-center backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-wide">OUT OF STOCK</span>
            </div>
          )}

          {/* Quick Add Overlay */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full rounded-none bg-primary/95 hover:bg-luxury-gold hover:text-primary backdrop-blur-sm h-12 font-semibold tracking-wide"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              QUICK ADD
            </Button>
          </div>
        </div>
        
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="h-3.5 w-3.5 fill-luxury-gold text-luxury-gold" />
              <span className="text-xs font-semibold">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
          
          <h3 className="font-serif font-semibold line-clamp-2 text-base leading-snug group-hover:luxury-text transition-all duration-500">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
