import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ResponsiveShowcase = () => {
  const images = [
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/1.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/2.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/3.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/4.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/5.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/6.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/7.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/8.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/9.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/10.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/11.png',
    'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/responsive/12.png',
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
              <img src={img} alt="Portfolio" className="w-full h-full object-cover" />
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
              <img src={img} alt="Portfolio" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">
        
        {/* Header Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 relative">
          <div className="lg:w-[25%] pt-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#00A991] rounded-full flex items-center justify-center text-white text-[18px] font-bold leading-none pb-[2px]">+</div >
              <span className="text-[#00A991] text-[15px] font-bold tracking-wider uppercase">OUR EXPERTISE</span>
            </div>
          </div>

          <div className="lg:w-[75%]">
            <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1] tracking-tighter mb-10">
              Build Better Experiences
            </h2>
            <p className="text-gray-600 text-[17px] max-w-2xl leading-relaxed">
              Ensure your website looks great and functions flawlessly on all devices with our responsive design services. 
              We create adaptive websites that provide a seamless experience for users.
            </p>
          </div>
        </div>

        {/* Desktop View: Vertical Columns */}
        <div className="hidden lg:grid grid-cols-4 gap-1 max-w-[1440px] mx-auto">
          <ScrollingColumn items={images.slice(0, 3)} reverse={false} speed={10} />
          <ScrollingColumn items={images.slice(3, 6)} reverse={true} speed={12} />
          <ScrollingColumn items={images.slice(6, 9)} reverse={false} speed={11} />
          <ScrollingColumn items={images.slice(9, 12)} reverse={true} speed={9} />
        </div>

        {/* Mobile View: Horizontal Rows */}
        <div className="flex lg:hidden flex-col gap-1 w-full overflow-hidden">
          <ScrollingRow items={images.slice(0, 3)} reverse={false} speed={15} />
          <ScrollingRow items={images.slice(3, 6)} reverse={true} speed={18} />
          <ScrollingRow items={images.slice(6, 9)} reverse={false} speed={16} />
          <ScrollingRow items={images.slice(9, 12)} reverse={true} speed={20} />
        </div>
      </div>
    </section>
  );
};


export default ResponsiveShowcase;
