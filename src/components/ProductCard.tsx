import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>

      {/* Toggle Details on Button Click */}
      {showDetails && <p className="product-description">{product.description}</p>}

      <button onClick={() => setShowDetails(!showDetails)} className="details-button">
        {showDetails ? "Hide Details" : "View Details"}
      </button>

      <button onClick={() => navigate(`/product/${product.id}`)} className="go-to-product-button">Go to Product</button>
    </div>
  );
};

export default ProductCard;
