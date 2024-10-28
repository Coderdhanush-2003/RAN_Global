import React from 'react';
import './Brands.scss'; // Import the SCSS file for styling
import logo1 from '../../img/Sub1.png'; 
import logo2 from '../../img/Sub2.png'; 
import logo3 from '../../img/Sub3.png'; 
import logo4 from '../../img/Sub4.jpeg'; 
import logo5 from '../../img/Sub5.jpeg'; 
import logo6 from '../../img/Sub6.png'; 
import logo7 from '../../img/Sub7.png'; 

const Brands = () => {
  const brands = [
    { id: 1, name: 'Brand A', logo: logo1 },
    { id: 2, name: 'Brand B', logo: logo2 },
    { id: 3, name: 'Brand C', logo: logo3 },
    { id: 4, name: 'Brand D', logo: logo4 },
    { id: 5, name: 'Brand E', logo: logo5 },
    { id: 6, name: 'Brand F', logo: logo6 },
    { id: 7, name: 'Brand G', logo: logo7 },
  ];

  return (
    <div className='container-1'>
      <div className="container-fluid brands-container text-center">
        <h2>Brands that Trust Us</h2>
        <div className="divider"></div> {/* Divider line below heading */}
        <div className="row">
          {brands.map(brand => (
            <div key={brand.id} className="col-md-2 col-lg brand-logo"> {/* Responsive grid */}
              <img src={brand.logo} alt={brand.name} className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
