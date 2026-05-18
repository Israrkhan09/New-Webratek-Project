import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { id: 1, title: 'Hover Me', type: 'ANIMATED BUTTON', style: 'button' },
  { id: 2, title: 'Click Me', type: 'CREEPY BUTTON', style: 'button-blue' },
  { id: 3, title: 'Flip', type: 'FLIP TEXT', style: 'flip' },
  { id: 4, title: '⌘ ⚙ 👤', type: 'GLASS DOCK', style: 'icons' },
  { id: 5, title: '', type: 'GLOW CARD', style: 'glow' },
  { id: 6, title: 'Liquid', type: 'LIQUID TEXT', style: 'liquid' },
  { id: 7, title: '', type: 'LIQUID OCEAN', style: 'ocean' },
  { id: 8, title: 'C O N T A C T', type: 'SOCIAL FLIP', style: 'contact' },
  { id: 9, title: '+', type: 'PERSPECTIVE GRID', style: 'grid' },
  { id: 10, title: '👥', type: 'MASKED AVATARS', style: 'avatars' },
  { id: 11, title: 'VengenceUI', type: 'INTERACTIVE BOOK', style: 'book' },
  { id: 12, title: 'Amazing!', type: 'TESTIMONIALS', style: 'testimonials' },
  { id: 13, title: 'About | Events', type: 'SPOTLIGHT NAV', style: 'nav' },
  { id: 14, title: '| | |', type: 'LIGHT LINES', style: 'lines' },
];

export default function ComponentsSection() {
  const sectionRef = useRef(null);
  const textGroupRef = useRef(null);
  const lettersRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: lettersRef.current[0]?.parentElement || sectionRef.current,
          start: 'top 95%',
          end: 'top 5%', // Finishes perfectly as the text reaches the top
          scrub: 1,
        }
      });

      // --- 3D Layered Text Animation ---
      const [heading, subheading, button] = textGroupRef.current.children;
      gsap.set([heading, subheading, button], { willChange: "transform, opacity" });

      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: textGroupRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Heading: slow movement (heavy)
      textTl.fromTo(heading,
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
        0
      )
      // Subheading: medium speed
      .fromTo(subheading,
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
        0
      )
      // Button: slightly faster
      .fromTo(button,
        { y: 120, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, ease: "power2.out" },
        0
      );
      // ---------------------------------

      // "COMPONENTS" letters - clean rise animation
      tl.fromTo(lettersRef.current,
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          stagger: 0.05,
          ease: 'power2.out',
        },
        0.2
      );

      // Cards Center-Out 3D Depth Animation
      const cards = cardsRef.current.filter(Boolean);
      gsap.set(cards, { willChange: "transform, opacity" });

      // Ensure center cards naturally overlap outer ones for the 3D depth illusion
      cards.forEach((card, i) => {
        const col = i % 7;
        const dist = Math.abs(col - 3);
        gsap.set(card, { zIndex: 10 - dist });
      });

      gsap.fromTo(cards,
        {
          opacity: 0,
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: (i) => {
            const col = i % 7;
            const dist = Math.abs(col - 3);
            if (dist === 0) return 1.05; // Center card pops out
            if (dist === 1) return 1.0;
            if (dist === 2) return 0.95;
            return 0.9; // Outer cards recede
          },
          duration: 1.2,
          ease: "power3.out",
          stagger: (i) => {
            const col = i % 7;
            const row = Math.floor(i / 7);
            const dist = Math.abs(col - 3);
            // Center animates first (0 delay), then radiates outward (+0.15s per step)
            // Second row follows slightly after (+0.3s)
            return (dist * 0.15) + (row * 0.3);
          },
          scrollTrigger: {
            trigger: cards[0]?.parentElement || sectionRef.current,
            start: "top 85%",
            end: "top 20%",
            scrub: false,
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const componentsWord = "COMPONENTS".split('');

  return (
    <section ref={sectionRef} className="py-24 bg-[#F5F5F5] relative overflow-hidden font-sans">
      {/* Background grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ backgroundImage: 'linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Top Text Section */}
        <div ref={textGroupRef} className="flex flex-col items-center text-center relative z-10 w-full">
          <h2 className="text-[3rem] md:text-[5.5rem] font-bold text-black tracking-tight leading-[1.1]">
            with precision and speed
          </h2>
          <p className="text-[1.1rem] md:text-[1.3rem] text-gray-500 mt-6 mb-10 font-medium">
            A curated collection of beautifully crafted React components.
          </p>
          <button className="px-8 py-4 bg-gradient-to-b from-[#1FC7A6] via-[#1FC7A6] to-[#0A5A4D] border-none transition-all hover:scale-105 active:scale-95 rounded-[14px] text-[15px] font-bold text-white shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)] relative z-20">
            Browse Components
          </button>
        </div>

        {/* Giant Animated Text */}
        {/* Added larger gap here, cards will be naturally below it */}
        <h1 className="flex justify-center text-[13vw] font-bold tracking-tighter mt-16 mb-40 select-none uppercase leading-none text-black w-full relative z-10">
          {componentsWord.map((char, idx) => (
            <span
              key={idx}
              ref={el => lettersRef.current[idx] = el}
              className="inline-block origin-center"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* 14 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5 relative z-20 w-full">
          {CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[idx] = el}
              className="flex flex-col h-[240px] rounded-[24px] border border-gray-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300 opacity-0 will-change-transform relative"
            >
              <div className="flex-1 flex items-center justify-center p-4 bg-[#F5F5F5]/50 relative overflow-hidden">

                {card.style === 'button' && (
                  <div className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700">{card.title}</div>
                )}
                {card.style === 'button-blue' && (
                  <div className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-sm text-sm font-medium">{card.title}</div>
                )}
                {card.style === 'flip' && (
                  <div className="text-gray-800 font-bold text-lg flex items-center gap-1">F<span className="text-gray-300">l</span>ip</div>
                )}
                {card.style === 'icons' && (
                  <div className="flex gap-3 px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-500 text-sm">⌘ ⚙ 👤</div>
                )}
                {card.style === 'glow' && (
                  <div className="absolute inset-4 rounded-xl opacity-30 bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 blur-xl group-hover:opacity-60 transition-opacity"></div>
                )}
                {card.style === 'liquid' && (
                  <div className="text-black font-bold tracking-widest transform -rotate-[15deg] skew-x-12">{card.title}</div>
                )}
                {card.style === 'ocean' && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"></div>
                )}
                {card.style === 'contact' && (
                  <div className="text-gray-800 font-mono tracking-[0.3em] text-[10px]">{card.title}</div>
                )}
                {card.style === 'grid' && (
                  <div className="w-full h-full absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(400px) rotateX(60deg) scale(2)' }}></div>
                )}
                {card.style === 'book' && (
                  <div className="w-20 h-28 bg-[#111] rounded-md shadow-2xl flex items-end p-2 border border-gray-800 transform group-hover:-translate-y-2 transition-transform">
                    <span className="text-white text-[7px] font-bold">{card.title}</span>
                  </div>
                )}

                {!['button', 'button-blue', 'flip', 'icons', 'glow', 'liquid', 'ocean', 'contact', 'grid', 'book'].includes(card.style) && (
                  <span className="text-gray-400 font-medium text-xs text-center">
                    {card.title}
                  </span>
                )}
              </div>

              <div className="h-[48px] border-t border-gray-100 flex items-center justify-center bg-white z-10 shrink-0">
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-gray-400">
                  {card.type}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
