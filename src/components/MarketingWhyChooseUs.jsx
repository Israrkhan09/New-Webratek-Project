import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarketingWhyChooseUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const images = [
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section1.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section4.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/business-section3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="w-full h-[1px] bg-gray-300 mb-20"></div>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-[1440px] mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[42px] md:text-[56px] lg:text-[50px] font-bold text-gray-900 leading-[1.1] tracking-tighter mb-8">
              How We Grow Your <span className="text-[#00A991]">Brand Awareness</span> <br className="hidden xl:block" /> & Customer Base
            </h2>
            <div className="flex flex-col gap-6 max-w-[600px]">
              <p className="text-gray-700 text-[17px] leading-relaxed">
                We believe that brand awareness is the cornerstone of business growth. Our customized strategies blend modern digital marketing methods and a thorough knowledge of your market to ensure your company is noticed in today's highly competitive market. From creating compelling content to improving your online presence to using social media platforms in an effective and efficient way, we design campaigns that boost your exposure and appeal to your target audience. Utilizing the potential of SEO, PPC, and analytics based on data, we put your business at the top of search results and ensure prospective customers come across your website first.
              </p>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#00A991] font-bold text-[18px] flex items-center gap-2 hover:translate-x-1 transition-transform duration-300 w-fit"
              >
                {isExpanded ? 'Read More -' : 'Read More +'}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 text-[17px] leading-relaxed pt-2">
                      Expanding your customer base requires more than just visibility, it demands engagement and trust. At Webratek, we design customer-centric strategies that nurture meaningful connections and foster loyalty. Our team focuses on delivering personalized experiences, whether through targeted campaigns, engaging social media interactions, or tailored website enhancements that convert visitors into loyal customers. By integrating analytics and continuous optimization, we ensure your growth is not only measurable but sustainable, setting the foundation for long-term success. With Webratek, your brand doesn’t just grow; it thrives.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-[5px] overflow-hidden shadow-2xl bg-gray-100">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Marketing Showcase"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingWhyChooseUs;
