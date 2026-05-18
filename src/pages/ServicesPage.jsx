import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TechCarousel from '../components/TechCarousel';
import Reviews from '../components/Reviews';

const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TechCarousel />
        <Reviews />
      </main>
    </div>
  );
};

export default ServicesPage;
