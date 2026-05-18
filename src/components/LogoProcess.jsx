import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Logo Design",
      content: [
        "Webratek understands that the concept of a logo design goes beyond an image — it represents the visual identity of your brand. Our experienced designers collaborate closely with you to understand your vision, values, and business goals before transforming them into a powerful visual mark.",
        "Whether you are launching a new brand or refreshing an existing one, we ensure every design element aligns with your brand personality and target audience. Our logos are crafted to be distinctive, memorable, and timeless.",
        "We focus on creating logos that not only look visually appealing but also communicate your brand message effectively. With a strong understanding of design principles and industry trends, we deliver logos that elevate your brand presence and leave a lasting impression."
      ]
    },
    {
      title: "UI/UX Design",
      content: [
        "Webratek delivers user-focused UI/UX design solutions that enhance usability and create engaging digital experiences. We design intuitive interfaces that guide users effortlessly through your website or application.",
        "Our UI/UX process combines research, wireframing, and visual design to ensure seamless interaction and improved user satisfaction across all devices.",
        "By aligning aesthetics with functionality, we create designs that improve engagement, increase conversions, and strengthen your brand identity."
      ]
    },
    {
      title: "Marketing Materials",
      content: [
        "Webratek designs impactful marketing materials that support your branding and promotional goals. From brochures and flyers to social media creatives, we ensure consistent and professional brand representation.",
        "Our design approach focuses on clarity, creativity, and visual storytelling to communicate your message effectively across multiple channels.",
        "Every marketing asset is crafted to capture attention, build trust, and reinforce your brand presence in competitive markets."
      ]
    },
    {
      title: "Banner Ads",
      content: [
        "Webratek creates high-performing banner ads designed to attract attention and drive engagement across digital platforms. Our banners combine strong visuals with compelling messaging to maximize impact.",
        "We design banner ads optimized for different formats and devices, ensuring consistent performance and brand visibility across campaigns.",
        "From concept to final delivery, we focus on creating banner designs that support your marketing objectives and generate measurable results."
      ]
    }
  ];

  return (
    <section className="pt-12 pb-0 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 relative">
          <div className="lg:w-[33%] pt-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00A991] rounded-full flex items-center justify-center text-white text-[18px] font-bold leading-none pb-[2px]">+</div >
              <span className="text-[#00A991] text-[15px] font-bold tracking-wider uppercase">OUR PROCESS</span>
            </div>
          </div>
          <div className="lg:w-[65%]">
            <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1] tracking-tighter mb-10">
              Our Design Process
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              Experience our artistic yet strategic approach to brand identity. We craft timeless visuals that capture your brand's essence.
            </p>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-[35%] flex flex-col gap-3">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-6 py-4 rounded-[5px] text-[17px] font-semibold transition-all duration-300 border-none outline-none
                  ${activeTab === index
                    ? 'bg-[#006a63] text-white shadow-lg scale-[1.02]'
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-[65%] min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {tabs[activeTab].content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-[17px] md:text-[18px] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-black mt-20"></div>
    </section>
  );
};

export default LogoProcess;
