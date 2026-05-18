import { useState, useEffect } from 'react';

const PHRASES = [
  'Web Design',
  'Artificial Intelligence',
  'UI/UX Design',
  'SaaS Development',
  'Branding',
  'Product Strategy',
];

/**
 * FixedCursorTypewriter Component
 * A premium animation where the cursor remains stationary and the text 
 * builds/deletes towards/from it. Highly sophisticated agency aesthetic.
 */
export default function ScramblePhrases() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect (Snappy, professional timing)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing/Deleting logic
  useEffect(() => {
    if (index === PHRASES.length) return;

    // Logic for pause at the end of typing
    if (subIndex === PHRASES[index].length + 1 && !isDeleting) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(pauseTimer);
    }

    // Logic for pause at the start of next word
    if (subIndex === 0 && isDeleting) {
      const nextWordTimer = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % PHRASES.length);
      }, 500);
      return () => clearTimeout(nextWordTimer);
    }

    const typingTimer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 80); // Fast, realistic backspace vs smooth typing

    return () => clearTimeout(typingTimer);
  }, [subIndex, index, isDeleting]);

  return (
    <div className="flex items-center justify-center min-h-[1.3em] w-full overflow-visible py-1">
      <div className="relative text-center max-w-[90vw] sm:max-w-none">
        {/* The Typing Text + Cursor in one flow */}
        <span 
          className="whitespace-normal sm:whitespace-nowrap transition-all duration-75 bg-gradient-to-r from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent leading-[1.1]"
        >
          {PHRASES[index].substring(0, subIndex)}
        </span>

        {/* 
          Inline Blinking Cursor 
          Now part of the natural text flow.
        */}
        <span 
          className={`inline-block ml-1 w-[2px] h-[0.9em] translate-y-[0.1em] transition-opacity duration-75
            ${blink ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundColor: '#1FC7A6' }}
        />
      </div>
    </div>
  );
}
