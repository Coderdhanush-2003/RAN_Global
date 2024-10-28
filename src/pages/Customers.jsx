import React from 'react';
import CustomerCard from '../components/Companies/Customercard'; // Renamed to avoid conflict
import '../styles.scss';

const CustomersPage = () => {
  return (
    <div className="about-us-page">
      <CustomerCard />
    </div>
  );
};

export default CustomersPage;
