import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Android App Development",
      content: [
        "Webratek delivers high-quality Android app development services designed to create fast, secure, and scalable mobile applications. Our team focuses on intuitive UI design and smooth performance across all Android devices and screen sizes.",
        "From planning and development to testing and deployment, we follow industry best practices to ensure reliability and long-term stability. Our Android apps are optimized for performance, security, and future scalability.",
        "Whether you need a startup MVP or a full-featured enterprise solution, Webratek builds Android apps tailored to your business goals."
      ]
    },
    {
      title: "iOS App Development",
      content: [
        "Webratek specializes in iOS app development to create elegant and high-performance applications for iPhone and iPad users. We design apps that follow Apple's guidelines and deliver premium user experiences.",
        "Our iOS developers focus on performance optimization, data security, and seamless functionality to ensure smooth operation across all Apple devices and iOS versions.",
        "From concept validation to App Store deployment, we provide complete iOS development solutions that support long-term success."
      ]
    },
    {
      title: "Cross-Platform App Development",
      content: [
        "Webratek offers cross-platform app development services that allow businesses to reach both Android and iOS users with a single solution. Our apps deliver consistent design and native-like performance.",
        "By using modern cross-platform technologies, we reduce development time and cost while maintaining high performance and scalability.",
        "Our cross-platform solutions are built to adapt easily to future updates and evolving business needs."
      ]
    },
    {
      title: "App Maintenance & Support",
      content: [
        "Webratek provides reliable app maintenance and support services to ensure your applications remain secure, updated, and fully functional. We continuously monitor performance and resolve issues proactively.",
        "Our support services include updates, security enhancements, and performance optimization to keep your app competitive and stable.",
        "With ongoing support from Webratek, your app stays ready to scale alongside your business growth."
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
              Our App Process
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              Experience our structured and efficient app development process, designed to turn your mobile vision into a market-ready product.
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

export default AppProcess;
