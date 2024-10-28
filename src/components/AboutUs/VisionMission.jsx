import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles.scss'; // Ensure your SCSS file is imported
import useScrollReveal from "../useScrollReveal";

const VisionMission = () => {
  useScrollReveal();
  return (
    <section className="vision-mission-section reveal container my-5">
      <div className="row">
        <div className="col-md-6 d-flex">
          <div className="vision card flex-fill">
            <div className="card-body">
              <h2>Vision</h2>
              <p>To be a globally recognized manufacturer of stamped, machined, and sub-assembly components for the automotive industry.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex">
          <div className="mission card flex-fill">
            <div className="card-body">
              <h2>Our Mission</h2>
              <p>To delight our customers with:</p>
              <ol>
                <li>RIGHT QUALITY, COST-EFFECTIVE SOLUTIONS</li>
                <li>TIMELY DELIVERY OF COMPONENTS</li>
              </ol>
              <p>We achieve this by implementing globally accepted safety and quality standards through complete employee involvement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
