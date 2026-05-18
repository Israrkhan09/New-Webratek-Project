import React from 'react';
import { motion } from 'framer-motion';
import FlipButton from '../components/FlipButton';
import Reviews from '../components/Reviews';
import Industries from '../components/Industries';
import laptopMockup from '../assets/logos/header-logo/portfolio-main-image.png?url';

const ReviewsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section - Matching Portfolio Theme */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#2D6A4F] bg-gradient-to-b from-[#2D6A4F] via-[#1B4332] to-[#081C15]">
          {/* Bottom Blackish Gradient Overlay for Depth */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />

          {/* Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1FC7A6]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0F766E]/10 blur-[120px] rounded-full" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-white text-sm tracking-widest mb-4 font-inter uppercase">
                    Client Experiences That Inspire
                  </p>
                  <h1 className="text-[42px] lg:text-[72px] font-bold text-white leading-[1.1] tracking-tighter mb-8">
                    Hear From Our <br />
                    <span className="text-transparent [-webkit-text-stroke:1.5px_#fff] italic font-serif">Satisfied</span> Clients
                  </h1>
                  <p className="text-white/90 text-[16px] lg:text-[17px] max-w-[750px] leading-relaxed mb-10">
                    Discover how we’ve made a difference through the voices of those who matter most—our clients. 
                    Read their testimonials to see how our solutions have exceeded expectations and delivered exceptional results.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-6 relative flex items-center justify-end">
                <div className="relative w-full max-w-[1100px]">
                  <div className="absolute inset-0 bg-[#1FC7A6]/20 blur-[120px] rounded-full" />
                  <img
                    src="https://webhyteimages.rightwebs.com/assets/images/website%20category/review-banner.png"
                    alt="Client Reviews Showcase"
                    className="relative z-10 w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)] transform translate-y-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Content Section */}
        <div className="bg-[#F5F5F5]">
          <Reviews />
        </div>

        {/* Industries Section */}
        <Industries />
      </main>
    </div>
  );
};

export default ReviewsPage;
