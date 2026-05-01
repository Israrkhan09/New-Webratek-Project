import React, { useState, useEffect, useRef } from 'react'
import FlipButton from './FlipButton'

const TABS = [
  {
    id: 'website',
    label: 'Website Design',
    heading: 'Stunning Web Experiences',
    body: 'We design visually captivating, conversion-focused websites that reflect your brand identity and deliver seamless user experiences across all devices.',
    color: '#14d9c4',
    portfolioImages: [
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/1.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/2.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/3.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/4.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/5.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/6.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/7.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/8.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/9.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/10.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/11.jpg',
      'https://webhyteimages.rightwebs.com/assets/images/portfolio/website/half/12.jpg'
    ],
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    emoji: '🌐',
  },
  {
    id: 'ecommerce',
    label: 'Ecommerce Website',
    heading: 'Sell More, Grow Faster',
    body: 'Our ecommerce solutions are built to maximize revenue — from intuitive product pages and secure checkout flows to inventory and order management.',
    color: '#11A894',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    emoji: '🛒',
  },
  {
    id: 'logo',
    label: 'Logo Design',
    heading: 'Iconic Brand Identity',
    body: 'A logo is the face of your brand. Our designers craft meaningful, memorable logos that communicate your values at first glance.',
    color: '#0d9e8e',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.5 1.5" />
        <path d="M7.08 22.51c.36.14.78.14 1.14 0s.7-.44.82-.8l1.32-4.14-5.26-1.68L3.98 20c-.12.36-.1.78.04 1.14s.44.7.8.82l2.26.55z" />
      </svg>
    ),
    emoji: '✏️',
  },
  {
    id: 'animation',
    label: 'Animation',
    heading: 'Motion That Tells Stories',
    body: 'From explainer videos to brand animations, we bring your ideas to life with smooth, professional motion graphics that captivate your audience.',
    color: '#14b8a6',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    ),
    emoji: '🎬',
  },
  {
    id: 'branding',
    label: 'Branding',
    heading: 'Build a Brand That Lasts',
    body: 'We develop comprehensive brand systems — voice, visual identity, style guides — that create consistent, powerful impressions at every touchpoint.',
    color: '#0f766e',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    emoji: '🏆',
  },
]

const PLATFORMS = ['Google', 'Clutch', 'Bark.com', 'Trustpilot', 'Yelp']

export default function GoalSection() {
  const [active, setActive] = useState('website')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const modalRef = useRef(null)
  
  const tab = TABS.find(t => t.id === active)

  // Slideshow Effect
  useEffect(() => {
    let interval;
    if (isPlaying && selectedIndex !== null) {
      interval = setInterval(() => {
        setSelectedIndex(prev => prev < tab.portfolioImages.length - 1 ? prev + 1 : 0);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedIndex, tab.portfolioImages.length]);

  // Fullscreen Handler
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await modalRef.current?.requestFullscreen();
      } catch (err) {
        console.error("Error enabling fullscreen:", err);
      }
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  // Track Fullscreen state for ESC key
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    }
    return () => { 
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    };
  }, [selectedIndex]);

  return (
    <section id="portfolio" className="py-24 bg-[#F5F5F5] overflow-hidden border-t border-gray-50">
      <div className="section-container">

        {/* Standardized Header - Split Layout (Matching Business Units/Bark) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 px-2">
          {/* Left Column: Label */}
          <div className="lg:col-span-3 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300">
                <span className="text-[14px] leading-none mb-[2px]">+</span>
              </div>
              <span className="text-[14px] font-bold tracking-tight text-black uppercase font-inter">
                Goal & Oriented
              </span>
            </div>
          </div>

          {/* Right Column: Massive Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[48px] lg:text-[95px] font-bold text-gray-900 leading-[0.9] tracking-tighter max-w-5xl">
              Together With <span className="text-transparent [-webkit-text-stroke:1.5px_#111827] italic font-serif">Focused</span> Marketing Methods
            </h2>
            <p className="text-gray-500 max-w-2xl text-[17px] leading-relaxed mt-8">
              We create brands with impeccable design knowledge incorporated with strategies that attract your target audience and drive high-performance results.
            </p>
          </div>
        </div>

        {/* 2. Premium Minimalist Tab Navigation (Unified Style) */}
        <div className="flex items-center justify-start lg:justify-center gap-1.5 md:gap-2.5 overflow-x-auto whitespace-nowrap pb-12 no-scrollbar scroll-smooth px-2">
          {TABS.map(t => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`group relative h-[38px] lg:h-[44px] px-4 lg:px-6 rounded-full border transition-all duration-300 overflow-hidden
                  ${isActive
                    ? 'bg-black border-black text-white shadow-sm'
                    : 'bg-white border-gray-100 text-gray-500 hover:border-teal-primary/20'
                  }`}
              >
                {/* Content Container */}
                <div className="relative w-full h-full flex flex-col items-center justify-center">

                  {/* Front Layer */}
                  <div className={`flex items-center transition-all duration-[500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${!isActive ? 'group-hover:translate-y-[150%] group-hover:opacity-0' : ''}`}>
                    <span className="font-bold text-[11px] lg:text-[13px] tracking-[0.05em] uppercase">{t.label}</span>
                  </div>

                  {/* Back Layer (Only if NOT active) */}
                  {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center -translate-y-[150%] opacity-0 transition-all duration-[500ms] ease-[cubic-bezier(0.4,1.16,0.24,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-black font-bold text-[11px] lg:text-[13px] tracking-[0.05em] uppercase">{t.label}</span>
                    </div>
                  )}

                </div>
              </button>
            )
          })}
        </div>

        {/* 3. High-Impact Portfolio Showcase Gallery - Balanced Layout */}
        <div className="flex flex-col gap-0">

          {/* Image Grid */}
          <div className="w-full">
            {tab.portfolioImages ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.portfolioImages.map((img, idx) => (
                  <div
                    key={idx}
                    data-cursor-text="Enter"
                    className="group relative w-full overflow-hidden rounded-[5px] transition-all duration-700 shadow-sm cursor-pointer"
                    onClick={() => setSelectedIndex(idx)}
                  >
                    <img
                      src={img}
                      alt={`Portfolio ${idx + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-[1s] group-hover:scale-[1.1]"
                    />
                    {/* Subtle Grey Blur Overlay */}
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback for tabs without images yet */
              <div className="h-[400px] lg:h-[600px] w-full bg-gray-50 flex flex-col items-center justify-center text-center gap-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-sm">
                  {tab.emoji}
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Portfolio Update in Progress</p>
                  <p className="text-gray-500">Our latest {tab.label} projects are being uploaded.</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Full-Screen Lightbox Modal (Fancybox Style) */}
      {selectedIndex !== null && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={() => {
            if (showShareModal) {
              setShowShareModal(false);
            } else {
              setSelectedIndex(null);
              setIsPlaying(false);
              if (document.fullscreenElement) document.exitFullscreen();
            }
          }}
        >
          {/* Top Toolbar */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent" onClick={e => e.stopPropagation()}>
            {/* Counter */}
            <div className="text-white/70 text-[13px] font-medium tracking-widest pl-2 font-mono">
              {selectedIndex + 1} / {tab.portfolioImages.length}
            </div>
            
            {/* Tool Icons */}
            <div className="flex items-center gap-5 pr-2">
              <button 
                className={`${isPlaying ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                 {isPlaying ? (
                   // Pause Icon
                   <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                 ) : (
                   // Play Icon
                   <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                 )}
              </button>
              <button 
                className={`${isFullscreen ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
                onClick={toggleFullscreen}
              >
                 {isFullscreen ? (
                   // Zoom Out (Exit Fullscreen)
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 9L4 4m0 0v4m0-4h4m6 5l5-5m0 0v4m0-4h-4m-5 15l5 5m0 0v-4m0 4h-4M9 15l-5 5m0 0v-4m0 4h4" /></svg>
                 ) : (
                   // Zoom In (Enter Fullscreen)
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" /></svg>
                 )}
              </button>
              <button 
                className={`${showShareModal ? 'text-white' : 'text-white/60'} hover:text-white transition-colors`}
                onClick={() => setShowShareModal(!showShareModal)}
              >
                 {/* Share */}
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
              </button>
              <button 
                className="text-white/60 hover:text-white transition-colors ml-2" 
                onClick={() => {
                  setSelectedIndex(null);
                  setIsPlaying(false);
                  if (document.fullscreenElement) document.exitFullscreen();
                }}
              >
                 {/* Close */}
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-24 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/20 transition-all z-20 group"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => prev > 0 ? prev - 1 : tab.portfolioImages.length - 1); }}
          >
            <div className="w-10 h-10 bg-black/40 flex items-center justify-center rounded group-hover:bg-black/60 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </div>
          </button>

          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-24 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/20 transition-all z-20 group"
            onClick={(e) => { e.stopPropagation(); setSelectedIndex(prev => prev < tab.portfolioImages.length - 1 ? prev + 1 : 0); }}
          >
            <div className="w-10 h-10 bg-black/40 flex items-center justify-center rounded group-hover:bg-black/60 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </button>

          {/* Full Image Container */}
          <div className="relative w-full max-w-5xl h-full p-12 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={selectedIndex}
              src={tab.portfolioImages[selectedIndex].replace('/half/', '/full/')}
              alt={`Full Project View ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain animate-in fade-in zoom-in duration-300"
            />
            
            {/* Share Modal Overlay */}
            {showShareModal && (
              <div className="absolute inset-0 z-30 flex items-center justify-center p-4">
                <div className="bg-[#f9f9f9] w-full max-w-lg rounded-md shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-8 pb-10 text-center">
                    <h3 className="text-[26px] font-bold text-[#222] mb-6">Share</h3>
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                      <button className="flex items-center gap-2 bg-[#3b5998] hover:bg-[#2d4373] text-white text-[13px] font-bold py-2.5 px-6 rounded transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Facebook
                      </button>
                      <button className="flex items-center gap-2 bg-[#cb2027] hover:bg-[#9f191f] text-white text-[13px] font-bold py-2.5 px-6 rounded transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345l-.388 1.597c-.046.189-.153.23-.346.14-1.293-.604-2.1-2.502-2.1-4.04 0-3.284 2.386-6.302 6.899-6.302 3.623 0 6.444 2.584 6.444 6.03 0 3.606-2.27 6.505-5.426 6.505-1.059 0-2.053-.55-2.395-1.198l-.651 2.479c-.236.9-1.018 2.223-1.455 2.89C9.795 23.633 10.871 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                        Pinterest
                      </button>
                      <button className="flex items-center gap-2 bg-[#00aced] hover:bg-[#0084b4] text-white text-[13px] font-bold py-2.5 px-6 rounded transition-colors">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        Twitter
                      </button>
                    </div>
                    <div className="bg-gray-100 p-3 px-4 rounded text-[13px] text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap border border-gray-200 shadow-inner">
                      https://webratek.com/#portfolio-{tab.id}-{selectedIndex + 1}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
