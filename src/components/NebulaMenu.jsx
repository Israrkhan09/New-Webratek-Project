"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlipButton from "./FlipButton";

const MENU_ITEMS = [
  { 
    title: "Web Development", 
    desc: "Custom high-performance websites and web applications." 
  },
  { 
    title: "Digital Marketing", 
    desc: "Data-driven strategies to grow your online presence." 
  },
  { 
    title: "Logo Designing", 
    desc: "Unique brand identities that leave a lasting impression." 
  },
  { 
    title: "App Development", 
    desc: "Scalable mobile solutions for iOS and Android platforms." 
  },
];

const NebulaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-[52px] inset-x-0 flex justify-center hidden lg:flex z-[100] px-4 pointer-events-none"
        >
          <div 
            className="w-full max-w-[850px] pt-2 pointer-events-auto"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className="w-full rounded-[5px] backdrop-blur-3xl overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: "#F5F5F5" }}
            >
              <div className="grid grid-cols-12">
              {/* Left Sidebar */}
              <div className="col-span-4 p-10 bg-black/[0.03] border-r border-black/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-3">Our Services</h3>
                  <p className="text-sm leading-relaxed text-black/60">
                    Empowering your digital journey with cutting-edge technology and creative design solutions.
                  </p>
                </div>
                <FlipButton 
                  frontText="Get Started" 
                  backText="Let's Chat" 
                  className="mt-8 w-[160px] h-[44px]"
                  isDark={true}
                  onClick={() => window.location.href = '#contact'}
                />
              </div>

              {/* Right Content */}
              <div className="col-span-8 p-10 grid grid-cols-2 gap-x-10 gap-y-12">
                {MENU_ITEMS.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/30 group-hover:bg-black group-hover:scale-125 transition-all duration-300" />
                        <h4 className="text-[17px] font-semibold text-black group-hover:translate-x-1 transition-transform duration-300">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[13px] text-black/50 pl-4.5 group-hover:text-black/70 transition-colors duration-300">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
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
