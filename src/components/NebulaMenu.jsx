import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import FlipButton from "./FlipButton";

const MENU_ITEMS = [
  { 
    title: "Web Development", 
    desc: "Custom high-performance websites and web applications.",
    href: "/web-development"
  },
  { 
    title: "Digital Marketing", 
    desc: "Data-driven strategies to grow your online presence.",
    href: "/digital-marketing"
  },
  { 
    title: "Logo Designing", 
    desc: "Unique brand identities that leave a lasting impression.",
    href: "/logo-designing"
  },
  { 
    title: "App Development", 
    desc: "Scalable mobile solutions for iOS and Android platforms.",
    href: "/app-development"
  },
];

const NebulaMenu = ({ isOpen, onMouseEnter, onMouseLeave, scrolled }) => {
  const navigate = useNavigate();
  // Dark theme when over light sections, light when over dark hero
  const isDark = scrolled;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-[88px] inset-x-0 flex justify-center hidden lg:flex z-[100] px-4 pointer-events-none"
        >
          <div 
            className="w-full max-w-[850px] pt-2 pointer-events-auto"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="w-full rounded-[5px] backdrop-blur-3xl overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.25)] transition-colors duration-300"
              style={{ backgroundColor: isDark ? '#111111' : '#F5F5F5' }}
            >
              <div className="grid grid-cols-12">
              {/* Left Sidebar */}
              <div className={`col-span-4 p-10 border-r flex flex-col justify-between transition-colors duration-300
                ${isDark ? 'bg-white/[0.04] border-white/10' : 'bg-black/[0.03] border-black/5'}`}>
                <div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>Our Services</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-white/50' : 'text-black/60'}`}>
                    Empowering your digital journey with cutting-edge technology and creative design solutions.
                  </p>
                </div>
                <FlipButton 
                  frontText="Contact Us" 
                  backText="Contact Us" 
                  className="mt-8 w-[160px] h-[44px]"
                  isDark={isDark}
                  borderClassName={isDark ? 'border-white' : 'border-black'}
                  onClick={() => {
                    onMouseLeave();
                    navigate('/contact-us');
                  }}
                />
              </div>

              {/* Right Content */}
              <div className="col-span-8 p-10 grid grid-cols-2 gap-x-10 gap-y-12">
                {MENU_ITEMS.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    className="group cursor-pointer block"
                    onClick={onMouseLeave}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300
                            ${isDark
                              ? 'bg-white/30 group-hover:bg-white group-hover:scale-125'
                              : 'bg-black/30 group-hover:bg-black group-hover:scale-125'}`} />
                          <h4 className={`text-[17px] font-semibold group-hover:translate-x-1 transition-all duration-300
                            ${isDark ? 'text-white' : 'text-black'}`}>
                            {item.title}
                          </h4>
                        </div>
                        <p className={`text-[13px] pl-4.5 transition-colors duration-300
                          ${isDark ? 'text-white/40 group-hover:text-white/70' : 'text-black/50 group-hover:text-black/70'}`}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NebulaMenu;
