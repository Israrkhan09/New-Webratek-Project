import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "DESIGN",
      description: "We create user-centered interfaces and visually stunning websites, focusing on clarity and usability to ensure impactful user journeys across all platforms",
      tags: ["UI Design", "UX Design", "Website Design", "Mobile App Design", "SaaS Product Design"],
      className: "lg:col-span-1"
    },
    {
      title: "AI",
      description: "We develop intelligent AI solutions for automation, insights, and better decisions, leveraging machine learning, NLP, and custom applications to boost your business",
      tags: ["Machine Learning", "NLP", "AI Automation", "Predictive Analytics", "Computer Vision", "AI Consulting"],
      className: "lg:col-span-1"
    },
    {
      title: "DEVELOPMENT",
      description: "Our expert team builds scalable applications with MERN, .NET, LAMP, React Native, Flutter, and Go — delivering high-quality, efficient solutions tailored to your needs.",
      tags: ["MERN Stack", ".NET Development", "LAMP Stack", "React Native", "Flutter", "Go (Golang)"],
      className: "lg:col-span-2"
    }
  ];

  return (
    <section className="pt-24 pb-12 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-[25px] text-gray-800 font-medium leading-relaxed">
            Webratek crafts exceptional digital experiences through strategic design, cutting-edge development, and the power of artificial intelligence — driving your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-10 lg:p-14 transition-all duration-300 hover:shadow-xl ${service.className}`}
            >
              <h2 className="text-[46px] lg:text-[55px] font-semibold text-gray-900 mb-6 tracking-tighter uppercase">
                {service.title}
              </h2>
              
              <p className="text-gray-600 text-[16px] lg:text-[18px] leading-relaxed mb-10 max-w-2xl">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-gray-500 text-[22px] font-medium tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
