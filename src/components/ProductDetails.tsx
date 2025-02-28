// src/components/ProductDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Access the product ID from the URL
  const navigate = useNavigate(); // For navigation
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product data: ', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const handleBackToList = () => {
    navigate('/'); // Go back to the product list
  };

  return (
    <div className="product-details">
      <h1 className='product-title'>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <button onClick={handleBackToList}>Back to List</button>
    </div>
  );
};

export default ProductDetails;
