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
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover-lift">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-sale text-sale-foreground px-2 py-1 rounded-md text-xs font-semibold">
              SALE
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-sm font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{product.brand}</span>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
          
          <h3 className="font-semibold line-clamp-2 text-sm">{product.name}</h3>
          
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <span className="font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <Button
            size="sm"
            className="w-full"
            variant="default"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
