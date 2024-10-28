import React from 'react';
import './Customers.scss';
import hyundaiLogo from '../../img/Cust1.jpg';
import marutiLogo from '../../img/Cust2.png';
import mahindraLogo from '../../img/Cus3.png';
import ToyotoLogo from '../../img/Cus4.png';
import TataLogo from '../../img/Cus5.png';
import FordLogo from '../../img/Cus6.png';
import RELogo from '../../img/Cus7.png';
import FCALogo from '../../img/Cus8.png';
import VLogo from '../../img/Cus9.png';
import Renault from '../../img/Cus10.png';
import Tenneco from '../../img/Sub1.png';
import Duroshox from '../../img/Sub2.png';
import Rambal from '../../img/Sub3.png';
import motherson from '../../img/Sub4.jpeg';
import Rane from '../../img/Sub5.jpeg';
import trw from '../../img/Sub6.png';
import marelli from '../../img/Sub7.png';

const Customers = () => {
  return (
    <div className="customers">
      <h1 className="title">Our Esteemed Customers</h1>
      <p className="subtitle">
        We are Tier 2 supplier for some of the Majors OEM’s through their Tier 1 Companies
      </p>

      <div className="section">
        <div className="oems">
          <h2>OEM's</h2>
          <div className="logos">
            <img src={hyundaiLogo} alt="Hyundai" />
            <img src={marutiLogo} alt="Maruti Suzuki" />
            <img src={mahindraLogo} alt="Mahindra" />
            <img src={ToyotoLogo} alt="ToyotoLogo" />
            <img src={TataLogo} alt="TataLogo" />
            <img src={FordLogo} alt="FordLogo" />
            <img src={RELogo} alt="RELogo" />
            <img src={FCALogo} alt="FCALogo" />
            <img src={VLogo} alt="VLogo" />
            <img src={Renault} alt="Renault" />
            
          </div>
        </div>

        <div className="arrow">↓</div>

        <div className="tier1">
          <h2>Tier 1 Companies (Our Esteemed Customers)</h2>
          <div className="logos">
            <img src={Tenneco} alt="Tenneco" />
            <img src={Duroshox} alt="Duroshox" />
            <img src={Rambal} alt="Rambal" />
            <img src={motherson} alt="motherson" />
            <img src={Rane} alt="Rane" />
            <img src={trw} alt="trw" />
            <img src={marelli} alt="marelli" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
