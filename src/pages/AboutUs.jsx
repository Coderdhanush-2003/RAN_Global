import React from 'react';
import OurUSPs from '../components/AboutUs/OurUSPs';
import VisionMission from '../components/AboutUs/VisionMission';
import GoalsValues from '../components/AboutUs/GoalsValues';
import BriefBackground from '../components/AboutUs/BriefBackground';
import Banner from '../components/AboutUs/AboutUsBanner';
import '../styles.scss'; // Make sure to import your SCSS/CSS file

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Banner/>
      <BriefBackground />
      <OurUSPs />
      <VisionMission />
      <GoalsValues />
   
    </div>
  );
};

export default AboutUs;
