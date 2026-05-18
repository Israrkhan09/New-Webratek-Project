import React from 'react';
import HeroSection from '../components/HeroSection';
import MarketingProcess from '../components/MarketingProcess';
import MarketingWhyChooseUs from '../components/MarketingWhyChooseUs';
import MarketingCTASection from '../components/MarketingCTASection';
import DigitalMarketingHeroImg from '../assets/logos/header-logo/Digital-Marketing-Hero-Image.png';
import Reviews from '../components/Reviews';

const DigitalMarketing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection
          title="Digital Marketing Services"
          label="Result-Oriented Marketing"
          heroImage={DigitalMarketingHeroImg}
        />
        <MarketingProcess />
        <MarketingWhyChooseUs />
        <Reviews />
      </main>
    </div>
  );
};

export default DigitalMarketing;
