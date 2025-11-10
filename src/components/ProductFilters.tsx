import { useState } from 'react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Button } from './ui/button';

interface ProductFiltersProps {
  onSortChange: (sort: string) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  maxPrice: number;
}

const ProductFilters = ({ onSortChange, onPriceRangeChange, maxPrice }: ProductFiltersProps) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
  };

  const applyPriceFilter = () => {
    onPriceRangeChange(priceRange);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label>Sort By</Label>
        <Select onValueChange={onSortChange} defaultValue="featured">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-3">
        <Label>Price Range</Label>
        <div className="pt-4">
          <Slider
            min={0}
            max={maxPrice}
            step={10}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mb-4"
          />
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <Button size="sm" className="w-full mt-2" onClick={applyPriceFilter}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
