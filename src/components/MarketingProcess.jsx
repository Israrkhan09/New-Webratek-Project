import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MarketingProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Search Engine Optimization (SEO)",
      content: [
        "Search Engine Optimization (SEO) is vital for boosting website visibility and driving organic traffic. At Webratek, we tailor SEO strategies to enhance your website's ranking on search engines, utilizing keyword optimization, content refinement, and on-page improvements. Our expert team ensures your site is optimized for better user experience and increased conversions.",
        "With Webratek's comprehensive SEO services, we focus on long-term results and consistent growth. We cover every optimization aspect, from technical SEO and mobile optimization to backlink building and local SEO. Contact Us to help you reach your target audience and stay ahead of the competition with customized solutions designed for your unique business needs."
      ]
    },
    {
      title: "Social Media Marketing",
      content: [
        "Webratek is a leading provider of social media marketing services. We offer Social Media Marketing services designed to help you build your brand's image across multiple platforms such as Facebook, Instagram, Twitter, LinkedIn, and more.",
        "We also offer complete social media analytics to analyze your social media performance and adjust in real time. If you're looking to boost your brand's visibility, increase web traffic, or increase customer satisfaction, Webratek can provide results that boost your social presence."
      ]
    },
    {
      title: "Google Ads",
      content: [
        "Webratek provides expert Google Ads services to increase your online visibility and drive targeted traffic. Our team develops custom campaigns tailored to your business goals, ensuring a superior yield on your investment.",
        "With Webratek's Google Ads expertise, you'll experience enhanced brand awareness, increased sales, and customer engagement. We use data-driven insight to optimize ad placement and budget allocation."
      ]
    },
    {
      title: "Branding",
      content: [
        "At Webratek, we understand the importance of branding in shaping your business's image and success. Our experienced team offers extensive branding services, including logo design, positioning, and messaging.",
        "Our data-driven approach blends creativity with strategic insights, ensuring your brand stands out in today's competitive market and builds long-term trust and growth."
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
            <h2 className="text-[65px] font-bold text-gray-900 leading-[1] tracking-tighter mb-10">
              Our Marketing Process
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              Elevate your brand with data-driven marketing strategies. We combine SEO, social media, and paid advertising to ensure your message reaches the right audience.
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
    </section>
  );
};

export default MarketingProcess;
