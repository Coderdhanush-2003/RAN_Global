import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
import mockProducts from './mockData';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    setProducts(mockProducts);
  }, []);

  return (
    <div className="product-page">
      <h2 className="page-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
