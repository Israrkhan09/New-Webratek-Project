import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hoverText, setHoverText] = useState(null);
  const hoverTextRef = useRef(null);
  
  // Track target mouse position
  const mouse = useRef({ x: -100, y: -100 });
  // Track current cursor position (for smooth interpolation)
  const cursor = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      // Check if we are hovering over an element that requests custom cursor text
      const target = e.target.closest('[data-cursor-text]');
      const newText = target ? target.getAttribute('data-cursor-text') : null;
      
      if (hoverTextRef.current !== newText) {
        hoverTextRef.current = newText;
        setHoverText(newText);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop for smooth trailing effect
    const render = () => {
      // Lerp (Linear Interpolation) formula for smooth "water-like" following
      cursor.current.x += (mouse.current.x - cursor.current.x) * 0.15;
      cursor.current.y += (mouse.current.y - cursor.current.y) * 0.15;

      if (cursorRef.current) {
        // translate(-50%, -50%) centers the cursor exactly on the dot, no matter how much it expands!
        cursorRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(render);
    };
    
    // Start loop
    const animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center transition-all duration-300 ease-out shadow-sm
        ${hoverText 
          ? 'w-[90px] h-[90px] bg-black/60 backdrop-blur-md rounded-full text-white text-[15px] font-medium tracking-wide' 
          : 'w-2 h-2 bg-gray-400 rounded-full'
        }`}
      style={{ willChange: 'transform, width, height' }}
    >
      {hoverText && (
        <span className="animate-in fade-in zoom-in duration-300 delay-100">{hoverText}</span>
      )}
    </div>
  );
}
