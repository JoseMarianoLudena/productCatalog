import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      <h1 className="catalog-title">Product Catalog</h1>
      <input
        type="text"
        placeholder="Search products..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
