import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section1.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section4.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-6 bg-[#F5F5F5] overflow-hidden">
      <div className="w-full h-[1px] bg-gray-300 mb-20"></div>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-[1440px] mx-auto">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[42px] md:text-[56px] lg:text-[50px] font-bold text-gray-900 leading-[1.1] tracking-tighter mb-8">
              Why Choose Webratek for <br className="hidden xl:block" /> Web Development Services
            </h2>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <p className="text-gray-700 text-[17px] leading-relaxed">
                At Webratek, we don't just build websites; we create powerful digital engines that drive growth. Our approach combines technical excellence with strategic design to ensure your online presence is both stunning and functional.
              </p>
              <p className="text-gray-700 text-[17px] leading-relaxed">
                With a deep understanding of modern web standards and user behavior, we deliver solutions that are optimized for performance, security, and conversion. Partner with us to transform your digital vision into a reality that exceeds expectations.
              </p>
            </div>
          </div>

          {/* Right Content: Image Slider */}
          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl bg-gray-100">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Why Choose Us Showcase"
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
