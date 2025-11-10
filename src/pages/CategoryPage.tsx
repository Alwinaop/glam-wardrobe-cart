import { useState, useMemo } from 'react';
import { Product, getProductsByCategory } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface CategoryPageProps {
  category: Product['category'];
  title: string;
  description: string;
}

const CategoryPage = ({ category, title, description }: CategoryPageProps) => {
  const allProducts = getProductsByCategory(category);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  
  const maxPrice = Math.max(...allProducts.map(p => p.price));

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortBy) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'newest':
        return [...filtered].reverse();
      default:
        return filtered;
    }
  }, [allProducts, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground text-lg">{description}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Showing {filteredAndSortedProducts.length} of {allProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Filters */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <h3 className="font-semibold text-lg">Filters</h3>
            <ProductFilters
              onSortChange={setSortBy}
              onPriceRangeChange={setPriceRange}
              maxPrice={maxPrice}
            />
          </div>
        </aside>

        {/* Mobile Filters */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters & Sort</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <ProductFilters
                  onSortChange={setSortBy}
                  onPriceRangeChange={setPriceRange}
                  maxPrice={maxPrice}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
