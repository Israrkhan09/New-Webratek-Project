import { useState, useEffect } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Show text after a small delay
    const textTimer = setTimeout(() => setTextVisible(true), 100);

    // Hide loader after 1.2 seconds
    const loaderTimer = setTimeout(() => setLoading(false), 1200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)]
        ${loading ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="relative flex flex-col items-center">
        {/* Container that matches text width */}
        <div className="inline-block relative">
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] text-white uppercase flex [perspective:1000px]">
            {"Webratek".split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]
                  ${textVisible ? 'translate-y-0 opacity-100 rotate-x-0' : 'translate-y-full opacity-0 -rotate-x-90'}`}
                style={{ 
                  transitionDelay: `${index * 60}ms`,
                  transformOrigin: "bottom"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          
          {/* Progress Line - Fills to text width */}
          <div className="mt-4 h-[2px] bg-white/20 rounded-full overflow-hidden w-full">
            <div
              className={`h-full bg-white transition-all duration-[1100ms] ease-out
                ${textVisible ? 'w-full' : 'w-0'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
