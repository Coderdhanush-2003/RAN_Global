import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css'; // Ensure your CSS file is imported
import '../../styles.scss'; // Ensure your SCSS file is imported
import useScrollReveal from "../useScrollReveal";

const OurUSPs = () => {
  useScrollReveal();

  const uspsData = [
    {
      category: "Safety",
      achievement: "We have achieved Zero Major Accidents in the last four years with our relentless focus on Safety."
    },
    {
      category: "Quality",
      achievement: "We have achieved Zero PPM with our customers Tenneco, JBM, and Rambal for Quality."
    },
    {
      category: "Employee Retention",
      achievement: "We are proud to retain more than 50% of our employees for more than 10 years. This enables us to maintain continuity and serve our customers better."
    },
    {
      category: "Flexibility",
      achievement: "Capable of handling volume variations. In our 20 year journey with Tenneco, we have manufactured volumes ranging from 500nos per month to 160,000 per month."
    },
    {
      category: "Variety",
      achievement: "We currently manufacture more than 100+ Part nos which belong to a diversified product Portfolio (Ford, FCA, M&M, Toyota, Maruti, Hyundai, Nissan, Renault, ISUZU, Vinfast and Royal Enfield)."
    },
    {
      category: "Agility",
      achievement: "To support our customer, we reduced Lead time for development of Proto Stamped parts for Vinfast, Vietnam from 30 days to 15 days."
    },
  ];

  return (
    <section className="usps-section reveal container my-5 py-1">
      <h2 className="text-center mb-5">OUR USP’s</h2>
      <div className="row">
        {uspsData.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="usp-card">
              <div className="usp-inner">
                <div className="usp-category">{item.category}</div>
                <div className="usp-achievement">{item.achievement}</div>
              </div>
              <div className="decorative-line" /> {/* Decorative line behind the cards */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurUSPs;
