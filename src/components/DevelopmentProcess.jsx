import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DevelopmentProcess = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Front & Back-End Development",
      content: [
        "Webratek provides complete front-end and back-end development services that focus on building modern, high-performing, and user-friendly web applications. Our team combines clean UI design with powerful server-side logic to ensure seamless interaction between users and digital platforms.",
        "We utilize the latest technologies, frameworks, and development standards to create responsive interfaces, secure databases, and scalable architectures. Every solution is optimized for speed, reliability, and long-term maintainability, ensuring your web application performs consistently as your business grows.",
        "From planning and development to testing and deployment, we deliver integrated solutions that provide a smooth user experience while supporting complex business operations efficiently."
      ]
    },
    {
      title: "PHP Development",
      content: [
        "Webratek offers advanced PHP development services to build dynamic, secure, and scalable web applications tailored to your business goals. Our experienced developers write clean and efficient code that ensures stability and long-term performance.",
        "Whether it's a custom website, content management system, or enterprise-level application, we focus on delivering solutions that are flexible and easy to maintain. Our PHP development approach emphasizes strong architecture, secure data handling, and seamless functionality.",
        "By following industry best practices and performance optimization techniques, we ensure your PHP application remains reliable, fast, and ready to evolve with changing business requirements."
      ]
    },
    {
      title: "Shopify Development Services",
      content: [
        "Webratek delivers professional Shopify development services to help businesses launch powerful and conversion-focused eCommerce stores. We specialize in creating custom Shopify themes that reflect your brand identity and engage customers effectively.",
        "Our Shopify experts optimize store performance, mobile responsiveness, and checkout experiences to maximize sales and customer satisfaction. We integrate third-party tools, payment gateways, and inventory systems to streamline your eCommerce operations.",
        "From store setup to advanced customization, we build scalable Shopify solutions designed to support long-term growth and deliver a seamless shopping experience across all devices."
      ]
    },
    {
      title: "Laravel Development",
      content: [
        "At Webratek, we specialize in Laravel development to create robust, secure, and scalable web applications that meet modern business demands. Laravel's powerful architecture allows us to develop feature-rich solutions with clean code and enhanced performance.",
        "Our developers leverage Laravel features such as middleware, routing, authentication, and Eloquent ORM to build applications that are efficient and easy to maintain. We ensure high security standards and optimized workflows throughout the development process.",
        "From concept and development to deployment and ongoing support, Webratek delivers future-ready Laravel solutions that adapt seamlessly to your business growth and evolving digital needs."
      ]
    }
  ];

  return (
    <section className="pt-12 pb-0 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">

        {/* Header Content - Refined Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-10 relative">

          {/* Left Sidebar Label */}
          <div className="lg:w-[33%] pt-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00A991] rounded-full flex items-center justify-center text-white text-[18px] font-bold leading-none pb-[2px]">
                +
              </div>
              <span className="text-[#00A991] text-[15px] font-bold tracking-wider uppercase">
                OUR PROCESS
              </span>
            </div>
          </div>

          {/* Right Content: Massive Heading & Description */}
          <div className="lg:w-[65%]">
            <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1] tracking-tighter mb-10">
              Our Web Process
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              Experience Webratek’s streamlined web development process, where innovation meets precision to create user-centric, high-performing digital solutions.
            </p>
          </div>
        </div>

        {/* Tabbed Content Area */}
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Side: Vertical Tabs */}
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

          {/* Right Side: Dynamic Content */}
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

export default DevelopmentProcess;
