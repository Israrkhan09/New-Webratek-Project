import React from 'react';
import HeroSection from '../components/HeroSection';
import ResponsiveShowcase from '../components/ResponsiveShowcase';
import DevelopmentProcess from '../components/DevelopmentProcess';
import WhyChooseUs from '../components/WhyChooseUs';
import WebCTASection from '../components/WebCTASection';
import WebDevHeroImg from '../assets/logos/header-logo/Web-Dev-Hero-Image.png';
import Reviews from '../components/Reviews';

const WebDevelopment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection
          title="Web Development Services"
          label="Custom Digital Solutions"
          heroImage={WebDevHeroImg}
        />
        <ResponsiveShowcase />
        <DevelopmentProcess />
        <WhyChooseUs />
        <Reviews />
      </main>
    </div>
  );
};

export default WebDevelopment;
