import React from 'react';
import useScrollReveal from "../useScrollReveal";

const BriefBackground = () => {
  useScrollReveal();
  return (
    <section className="usps-section reveal">
      
      <div className="about-us ">
      <h2 className="section-title">About the Company</h2>
        <div className="company-info">
          <div className="row">
            <div className="col-md-6">
              <h3 > Vintage</h3>
              <p>More than 33 years - Started in September 1989 as RREnterprises and converted to Private Limited Firm by 2020 as RAN GLOBAL Auto Engg Pvt Ltd.</p>
            </div>
            <div className="col-md-6">
              <h3>Constitution</h3>
              <p>Private Limited</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Scope of Business</h3>
              <p>Manufacturing of Sheet Metal Stamping, Machined and Welded Components.</p>
            </div>
            <div className="col-md-6">
              <h3>Location</h3>
              <p>No: 18/16, Balaji Nagar Industrial Estate,<br /> Ambattur, Chennai,<br /> Tamil Nadu, India,<br /> Pincode: 600053</p>
            </div>
          </div>
          <div className="certifications">
            <h3>Certifications / Registrations</h3>
            <p>IATF 16949:2016 Certified Company from IR Class Certification Body.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefBackground;
