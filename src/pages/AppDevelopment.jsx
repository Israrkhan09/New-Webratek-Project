import React from 'react';
import HeroSection from '../components/HeroSection';
import AppShowcase from '../components/AppShowcase';
import AppProcess from '../components/AppProcess';
import AppWhyChooseUs from '../components/AppWhyChooseUs';
import AppCTASection from '../components/AppCTASection';
import AppDevHeroImg from '../assets/logos/header-logo/App-Dev-Hero-Image.png';
import Reviews from '../components/Reviews';

const AppDevelopment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection
          title="App Development Services"
          label="Next-Gen Mobile Solutions"
          heroImage={AppDevHeroImg}
        />
        <AppShowcase />
        <AppProcess />
        <AppWhyChooseUs />
        <Reviews />
      </main>
    </div>
  );
};

export default AppDevelopment;
