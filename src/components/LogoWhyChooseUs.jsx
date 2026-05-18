import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoWhyChooseUs = () => {
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
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-[1440px] mx-auto">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[42px] md:text-[56px] lg:text-[50px] font-bold text-gray-900 leading-[1.1] tracking-tighter mb-8">
              Our Expertise in Creative <br className="hidden xl:block" /> <span className="text-[#00A991]">Designing Solutions</span>
            </h2>
            <div className="flex flex-col gap-6 max-w-[650px]">
              <p className="text-gray-700 text-[17px] leading-relaxed">
                At Webratek, we bring your vision to life with our innovative and tailored creative design solutions. Our team of experienced designers specializes in crafting unique visual identities that resonate with your target audience. From eye-catching logos and branding materials to compelling website and app interfaces, we ensure every design element communicates your brand's values and objectives.
              </p>
              <p className="text-gray-700 text-[17px] leading-relaxed">
                We combine the latest design trends with your brand's distinct personality to deliver results that stand out in today's competitive market. By leveraging advanced design tools and a deep understanding of user experience, we create designs that not only look stunning but also drive engagement and growth. At Webratek, we don’t just design; we innovate to help your brand tell its story effectively and powerfully.
              </p>
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
                alt="Logo Showcase"
                loading="lazy"
                decoding="async"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoWhyChooseUs;
