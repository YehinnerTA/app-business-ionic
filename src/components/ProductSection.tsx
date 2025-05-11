import ProductCard from './ProductCard';
import React from 'react';


interface Product {
  image: string;
  title: string;
  price: string;
  discount?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => (
  <div className="mb-6">
    <h2 className="text-lg font-bold px-4 mb-2">{title}</h2>
    <div className="flex overflow-x-auto space-x-4 px-4">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

export default ProductSection;
