import React from 'react';

const TechCarousel = () => {
  const row1 = [
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Angular", icon: "https://cdn.simpleicons.org/angular/DD0031" },
    { name: "Vue.js", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "React JS", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  ];

  const row2 = [
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  ];

  const row3 = [
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/FF3E00" },
    { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "WordPress", icon: "https://cdn.simpleicons.org/wordpress/21759B" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/7AB55C" },
    { name: "Microsoft .NET", icon: "https://cdn.simpleicons.org/dotnet/512BD4" },
  ];

  const MarqueeRow = ({ items, reverse = false }) => {
    // Duplicate items for seamless loop
    const displayItems = [...items, ...items, ...items, ...items];

    return (
      <div className="flex overflow-hidden select-none py-4">
        <div
          className={`flex min-w-full shrink-0 items-center justify-around gap-6 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'
            }`}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm px-8 py-5 rounded-2xl min-w-[240px] transition-all duration-300 hover:scale-105 cursor-default group"
            >
              <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-[18px] font-bold text-gray-800 uppercase tracking-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="pt-12 pb-24 bg-[#F5F5F5] overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-[48px] md:text-[65px] font-bold font-black text-gray-900 text-center tracking-tighter">
          Tech That Powers Us
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse={true} />
        <MarqueeRow items={row3} />
      </div>
    </section>
  );
};

export default TechCarousel;
