import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlipButton from './FlipButton';
import ProjectDrawer from './ProjectDrawer';

const AppCTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-10 bg-[#F5F5F5]">
      <div className="section-container">
        
        {/* CTA Bar Card */}
        <div className="max-w-[1440px] mx-auto bg-white rounded-[30px] py-6 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm border border-gray-100">
          <div className="text-center md:text-left">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-tight tracking-tight">
              Turn your <span className="text-[#006a63]">App Idea</span> into reality! <br />
              We code your vision.
            </h2>
          </div>
          <FlipButton 
            frontText="Get a Quote"
            backText="Let's Start"
            onClick={() => setIsFormOpen(true)}
            className="!w-[160px] !h-[48px] shadow-md"
            textSize="text-[15px]"
          />
        </div>

        {/* Quote Form Drawer */}
        <ProjectDrawer isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      </div>
    </section>
  );
};

export default AppCTASection;
