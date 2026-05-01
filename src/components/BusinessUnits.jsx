import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TABS = [
  {
    id: 'website',
    label: 'Website Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    cards: [
      { label: 'Static Website', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/static.gif' },
      { label: 'B2B Portal', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/portal.gif' },
      { label: 'Ecommerce Website', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ecom.gif' },
      { label: 'Web Portal', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/web-portal.gif' },
      { label: 'Web Development', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/web.gif' },
    ],
  },
  {
    id: 'logo',
    label: 'Logo Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    cards: [
      { label: '3D Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/3d.gif' },
      { label: 'Animated Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/animated.gif' },
      { label: 'Iconic Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/iconic.gif' },
      { label: 'Illustration Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/illustration.gif' },
      { label: 'Typographic Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/typography.gif' },
    ],
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    cards: [
      { label: 'Email Marketing', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/email.gif' },
      { label: 'ORM', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ORM.gif' },
      { label: 'PPC', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/PPC.gif' },
      { label: 'Social Media Marketing', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/SMM.gif' },
      { label: 'SEO', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/seo.gif' },
    ],
  },
  {
    id: 'apps',
    label: 'Mobile Apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" />
      </svg>
    ),
    cards: [
      { label: 'Android', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/android.gif' },
      { label: 'Flutter', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/flutter.gif' },
      { label: 'Hybrid', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/hybrid.gif' },
      { label: 'iOS', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ios.gif' },
      { label: 'Native', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/nativ.gif' },
    ],
  },
  {
    id: 'video',
    label: 'Video Animation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    cards: [
      { label: '2D Videos', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/2d.gif' },
      { label: '3D Videos', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/3d-video.gif' },
      { label: 'Explainer', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/explan.gif' },
      { label: 'Logo Video', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/logo-video.gif' },
      { label: 'Illustration', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/illustration-video.gif' },
    ],
  },
  {
    id: 'collateral',
    label: 'Marketing Collateral',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    cards: [
      { label: 'Banner', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/banner.gif' },
      { label: 'Brochure', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/brochure.gif' },
      { label: 'Cards', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/card.gif' },
      { label: 'Magazine', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/magzine.gif' },
      { label: 'Letter', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/letter.gif' },
    ],
  },
]

export default function BusinessUnits() {
  const [active, setActive] = useState('website')
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const wordsRef = useRef([])     // each word of the heading
  const tabsRef = useRef(null)
  const cardsRef = useRef([])
  const previousActive = useRef(active)

  const currentTab = TABS.find(t => t.id === active)

  const HEADING_WORDS = ['We', 'are', 'the', 'experts', 'for...']

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top -20%',
          scrub: 2,
        }
      })

      // Step 1: "Our Business Units" label
      tl.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )

      // Step 2: Heading words one by one
      tl.fromTo(wordsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power2.out',
        },
        '>' // Start after label finishes
      )

      // Step 3: Tab buttons appear after heading finishes
      tl.fromTo(tabsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '>' // Start after words finish
      )

      // Step 4: Cards appear after tabs
      const cards = cardsRef.current.filter(Boolean)
      if (cards.length > 0) {
        tl.fromTo(cards,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            stagger: 0.2,
          },
          '>' // Start after tabs finish
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate cards on tab change
  useEffect(() => {
    if (previousActive.current === active) {
      return;
    }
    previousActive.current = active;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length > 0) {
      // Kill any active GSAP animations on these cards to prevent conflicts
      gsap.killTweensOf(cards);
      
      gsap.fromTo(cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          overwrite: true
        }
      );
    }
  }, [active]);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">
        {/* Header - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 px-2">
          {/* Left Column: Label */}
          <div className="lg:col-span-3 pt-6">
            <div ref={headerRef} className="flex items-center gap-3 will-change-transform opacity-0">
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-90">
                <span className="text-[14px] leading-none mb-[2px]">+</span>
              </div>
              <span className="text-[14px] font-semibold text-black tracking-tight font-inter">
                Our Business Units
              </span>
            </div>
          </div>

          {/* Right Column: Word-by-Word Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-6xl md:text-8xl lg:text-[130px] font-semibold tracking-tighter text-gray-900 leading-[0.8] max-w-5xl">
              {HEADING_WORDS.map((word, idx) => (
                <span
                  key={idx}
                  ref={el => wordsRef.current[idx] = el}
                  className="inline-block mr-[0.2em] last:mr-0 will-change-transform opacity-0"
                >
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Tab Nav - Rounded Minimalist Single Row */}
        <div ref={tabsRef} className="flex items-center justify-start lg:justify-center gap-1.5 md:gap-2.5 overflow-x-auto whitespace-nowrap pb-12 no-scrollbar scroll-smooth px-2 will-change-transform opacity-0">
          {TABS.map(t => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`group relative h-[36px] lg:h-[42px] px-3.5 lg:px-5 rounded-full border transition-all duration-300 overflow-hidden
                  ${isActive
                    ? 'bg-black border-black text-white shadow-sm'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-teal-primary/20'}`}
              >
                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col items-center justify-center font-inter">

                  {/* Front Layer */}
                  <div className={`flex items-center transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${!isActive ? 'group-hover:translate-y-[150%] group-hover:opacity-0' : ''}`}>
                    <span className="font-bold text-[10px] lg:text-[12px] tracking-[0.1em] uppercase">{t.label}</span>
                  </div>

                  {/* Back Layer (Only if NOT active) */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center -translate-y-[150%] opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.4,1.16,0.24,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-black font-bold text-[10px] lg:text-[12px] tracking-[0.1em] uppercase">{t.label}</span>
                    </div>
                  )}

                </div>
              </button>
            );
          })}
        </div>

        {/* Cards Grid - Precise Refinement */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {currentTab.cards.map((card, i) => {
            return (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                className="will-change-transform opacity-0"
              >
                <div className="group cursor-pointer rounded bg-white border-[0.5px] border-black/20 h-[180px] p-9 flex flex-col items-center justify-center gap-4 transition-[box-shadow,border-color,transform] duration-500 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.15)] hover:border-black/40 hover:-translate-y-1 w-full">
                  {/* Animated GIF Icon */}
                  <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                    <img
                      src={card.gif}
                      alt={card.label}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Constant Black Label */}
                  <p className="text-[16px] font-semibold text-center text-gray-900 transition-colors duration-500">
                    {card.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
