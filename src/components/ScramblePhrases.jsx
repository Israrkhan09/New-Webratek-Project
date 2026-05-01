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
    <div className="inline-flex items-center justify-center w-full">
      {/* 
        Container for the text. 
        We use a flex container with items-center and justify-end 
        to ensure the text "pushes left" as it types towards the cursor.
      */}
      <div className="relative flex items-center justify-end h-[1.2em]">
        
        {/* The Typing Text */}
        <span 
          style={{ color: '#F5F5F5' }}
          className="whitespace-nowrap transition-all duration-75"
        >
          {PHRASES[index].substring(0, subIndex)}
        </span>

        {/* 
          Fixed Blinking Cursor 
          Positioned relatively to stay perfectly still while text moves.
        */}
        <span 
          className={`ml-1 w-[2px] h-[1em] md:h-[1.1em] bg-teal-primary transition-opacity duration-75
            ${blink ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
}
