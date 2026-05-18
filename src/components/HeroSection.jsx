import React, { useState } from 'react';
import FlipButton from './FlipButton';
import ProjectDrawer from './ProjectDrawer';

const HeroSection = ({
  title = <>Drive 10x Revenue With Our <br className="hidden lg:block" /> Digital Services</>,
  label = "Sales-oriented Website",
  heroImage = "https://webhyteimages.rightwebs.com/assets/images/website%20category/responsive-banner.png"
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-screen w-full flex flex-col bg-[#2D6A4F] bg-gradient-to-b from-[#2D6A4F] via-[#1B4332] to-[#081C15] relative overflow-hidden">
      {/* Navbar Spacing + Main Content Centering */}
      <div className="flex-grow flex flex-col items-center justify-start pt-[90px] md:pt-[100px]">

        {/* Compact Content Container */}
        <div className="flex flex-col items-center text-center max-w-[1440px] mx-auto z-10 w-full px-4">

          {/* Top Label */}
          <span className="text-white text-[12px] md:text-[14px] font-medium tracking-[0.1em] mt-8 mb-3 uppercase opacity-90">
            {label}
          </span>

          {/* Main Heading - Tightened Line Height */}
          <h1 className="text-white text-[48px] md:text-[52px] lg:text-[72px] font-bold leading-[1.1] tracking-tighter mb-4 max-w-[950px] mx-auto px-2">
            {title}
          </h1>

          {/* Description - Reduced Margin */}
          <p className="text-white/80 text-[14px] md:text-[17px] font-normal leading-relaxed mb-6 max-w-[700px] mx-auto px-4">
            Establish your online presence with a website tailor-made to maximize traffic and generate impressive leads!
          </p>

          {/* Start Your Project Button */}
          <div className="mb-[18px] md:mb-2">
            <FlipButton
              frontText="Start Your Project"
              backText="Start Your Project"
              bgColor="bg-[#006A63]"
              onClick={() => setIsFormOpen(true)}
            />
          </div>

          {/* Hero Image Showcase - Standardized Gap & Fixed to bottom */}
          <div className="w-[135%] md:w-full max-w-none md:max-w-[1200px] relative left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:mx-auto transform translate-y-4 overflow-visible flex justify-center">
            <img
              src={heroImage}
              alt="Hero Showcase"
              className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)] block scale-110 md:scale-100 origin-bottom transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Satisfaction Banner - Refined to match reference */}
      <div className="bg-[#E6FFFA] py-6 w-full z-20 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <p className="text-[#081C15] font-bold text-[18px] md:text-[24px] lg:text-[28px] text-center md:text-left leading-tight">
            99% client satisfaction trusted <br className="hidden lg:block" /> reviews by partners
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6 md:h-7 object-contain" />
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex text-[#00b67a] text-lg font-bold">★ Trustpilot</div>
              <p className="text-[#081C15] text-[12px] font-bold opacity-80 uppercase tracking-tighter">Excellent 4.9/5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blackish Gradient Overlay for Depth */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      {/* Subtle Background Depth */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      {/* Project Drawer */}
      <ProjectDrawer isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default HeroSection;
