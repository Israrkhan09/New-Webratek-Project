import React from 'react';
import HeroSection from '../components/HeroSection';
import LogoShowcase from '../components/LogoShowcase';
import LogoProcess from '../components/LogoProcess';
import LogoWhyChooseUs from '../components/LogoWhyChooseUs';
import LogoCTASection from '../components/LogoCTASection';
import LogoDesignHeroImg from '../assets/logos/header-logo/Logo-Design-Hero-Image.png';
import Reviews from '../components/Reviews';

const LogoDesigning = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection
          title="Logo Designing Services"
          label="Iconic Brand Identity"
          heroImage={LogoDesignHeroImg}
        />
        <LogoShowcase />
        <LogoProcess />
        <LogoWhyChooseUs />
        <Reviews />
      </main>
    </div>
  );
};

export default LogoDesigning;
