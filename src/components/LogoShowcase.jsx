import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LogoShowcase = () => {
  const column1 = [
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/1.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/2.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/3.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/4.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/5.png",
  ];

  const column2 = [
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/6.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/7.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/8.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/9.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/10.png",
  ];

  const column3 = [
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/11.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/mascot/12.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/7.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/8.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/entrepreneurship/9.png",
  ];

  const column4 = [
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/1.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/2.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/health/3.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/1.png",
    "https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/education/2.png",
  ];

  const ScrollingColumn = ({ items, reverse = false, speed = 40 }) => {
    const colRef = useRef(null);
    useEffect(() => {
      const col = colRef.current;
      const totalHeight = col.scrollHeight / 2;
      if (reverse) {
        gsap.set(col, { y: -totalHeight });
        gsap.to(col, { y: 0, duration: speed, ease: "none", repeat: -1 });
      } else {
        gsap.set(col, { y: 0 });
        gsap.to(col, { y: -totalHeight, duration: speed, ease: "none", repeat: -1 });
      }
    }, [reverse, speed]);

    return (
      <div className="h-[700px] overflow-hidden rounded-[5px]">
        <div ref={colRef} className="flex flex-col gap-1 p-1">
          {[...items, ...items].map((img, idx) => (
            <div key={idx} className="w-full aspect-[1.5/1] rounded-[5px] overflow-hidden shadow-sm">
              <img src={img} alt="Portfolio" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ScrollingRow = ({ items, reverse = false, speed = 20 }) => {
    const rowRef = useRef(null);
    useEffect(() => {
      const row = rowRef.current;
      const totalWidth = row.scrollWidth / 2;
      if (reverse) {
        gsap.set(row, { x: -totalWidth });
        gsap.to(row, { x: 0, duration: speed, ease: "none", repeat: -1 });
      } else {
        gsap.set(row, { x: 0 });
        gsap.to(row, { x: -totalWidth, duration: speed, ease: "none", repeat: -1 });
      }
    }, [reverse, speed]);

    return (
      <div className="w-full overflow-hidden rounded-[5px]">
        <div ref={rowRef} className="flex gap-1 p-1 w-fit">
          {[...items, ...items].map((img, idx) => (
            <div key={idx} className="w-[280px] aspect-[1.5/1] rounded-[5px] overflow-hidden shadow-sm flex-shrink-0">
              <img src={img} alt="Portfolio" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 relative">
          <div className="lg:w-[35%] pt-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00A991] rounded-full flex items-center justify-center text-white text-[18px] font-bold leading-none pb-[2px]">+</div >
              <span className="text-[#00A991] text-[15px] font-bold tracking-wider uppercase">OUR PORTFOLIO</span>
            </div>
          </div>
          <div className="lg:w-[65%]">
            <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1] tracking-tighter mb-10">
              Craft Iconic Brands
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              We have partnered with a number of small businesses, and here are just some of the ones that have been propped up to success by our team!
            </p>
          </div>
        </div>
        <div key={isMobile ? 'mobile' : 'desktop'} className="w-full">
          {isMobile ? (
            <div className="flex flex-col gap-1 w-full overflow-hidden">
              <ScrollingRow items={column1} reverse={false} speed={20} />
              <ScrollingRow items={column2} reverse={true} speed={25} />
              <ScrollingRow items={column3} reverse={false} speed={22} />
              <ScrollingRow items={column4} reverse={true} speed={28} />
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-1 max-w-[1440px] mx-auto">
              <ScrollingColumn items={column1} reverse={false} speed={40} />
              <ScrollingColumn items={column2} reverse={true} speed={45} />
              <ScrollingColumn items={column3} reverse={false} speed={38} />
              <ScrollingColumn items={column4} reverse={true} speed={42} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
