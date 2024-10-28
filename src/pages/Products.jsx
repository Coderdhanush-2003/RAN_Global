import React from 'react';
import ProductPage from '../components/Products/ProductCard';
import '../styles.scss'; // Make sure to import your SCSS/CSS file

const Products = () => {
  return (
    <div className="about-us-page">
      <ProductPage/>
    </div>
  );
};

export default Products;
