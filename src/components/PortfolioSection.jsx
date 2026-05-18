import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FlipButton from './FlipButton'

const CATEGORIES = [
  'Website Design',
  'Ecommerce Website',
  'Logo Design',
  'Animation',
  'Branding'
]

const PROJECTS = [
  // Website Design
  {
    id: 1,
    title: 'Pure Infused Edibles',
    category: 'Website Design',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/1.png',
    tags: ['UI/UX', 'Web Design']
  },
  {
    id: 2,
    title: 'KRAI Mountain Experience',
    category: 'Website Design',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/business/7.png',
    tags: ['Identity', 'Adventure']
  },
  {
    id: 3,
    title: 'Free Letics Fitness',
    category: 'Website Design',
    image: 'https://webhyteimages.rightwebs.com/assets/images/website%20category/portfolio/ecommerce/2.png',
    tags: ['Fitness', 'App']
  },

  // Ecommerce Website
  { id: 10, title: 'Ecommerce Project 1', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/1.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 11, title: 'Ecommerce Project 2', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/2.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 12, title: 'Ecommerce Project 3', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/3.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 13, title: 'Ecommerce Project 4', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/4.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 14, title: 'Ecommerce Project 5', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/5.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 15, title: 'Ecommerce Project 6', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/6.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 16, title: 'Ecommerce Project 7', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/7.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 17, title: 'Ecommerce Project 8', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/ecommerce/half/8.jpg', tags: ['Shopify', 'UI/UX'] },
  { id: 18, title: 'Ecommerce Project 13', category: 'Ecommerce Website', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/website/full/13.jpg', tags: ['Shopify', 'UI/UX'] },

  // Logo Design
  { id: 30, title: 'Logo Concept 1', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/1.jpg', tags: ['Branding', 'Vector'] },
  { id: 31, title: 'Logo Concept 2', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/2.jpg', tags: ['Branding', 'Vector'] },
  { id: 32, title: 'Logo Concept 3', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/3.jpg', tags: ['Branding', 'Vector'] },
  { id: 33, title: 'Logo Concept 4', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/4.jpg', tags: ['Branding', 'Vector'] },
  { id: 34, title: 'Logo Concept 5', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/5.jpg', tags: ['Branding', 'Vector'] },
  { id: 35, title: 'Logo Concept 6', category: 'Logo Design', image: 'https://webhyteimages.rightwebs.com/assets/images/portfolio/logo/6.jpg', tags: ['Branding', 'Vector'] },
  { id: 36, title: 'Logo Concept 9', category: 'Logo Design', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/logo/9.jpeg', tags: ['Branding', 'Vector'] },
  { id: 37, title: 'Logo Concept 10', category: 'Logo Design', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/logo/10.jpeg', tags: ['Branding', 'Vector'] },
  { id: 38, title: 'Logo Concept 11', category: 'Logo Design', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/logo/11.jpeg', tags: ['Branding', 'Vector'] },

  // Animation
  { id: 50, title: 'Animation 1', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/1.gif', tags: ['Motion', '2D/3D'] },
  { id: 51, title: 'Animation 2', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/2.gif', tags: ['Motion', '2D/3D'] },
  { id: 52, title: 'Animation 3', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/3.gif', tags: ['Motion', '2D/3D'] },
  { id: 53, title: 'Animation 4', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/4.gif', tags: ['Motion', '2D/3D'] },
  { id: 54, title: 'Animation 5', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/5.gif', tags: ['Motion', '2D/3D'] },
  { id: 55, title: 'Animation 6', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/6.gif', tags: ['Motion', '2D/3D'] },
  { id: 56, title: 'Animation 7', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/7.gif', tags: ['Motion', '2D/3D'] },
  { id: 57, title: 'Animation 8', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/8.gif', tags: ['Motion', '2D/3D'] },
  { id: 58, title: 'Animation 10', category: 'Animation', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/video/half/10.gif', tags: ['Motion', '2D/3D'] },

  // Branding
  { id: 70, title: 'Branding 1', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/1.jpg', tags: ['Identity', 'Strategy'] },
  { id: 71, title: 'Branding 2', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/2.jpg', tags: ['Identity', 'Strategy'] },
  { id: 72, title: 'Branding 3', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/3.jpg', tags: ['Identity', 'Strategy'] },
  { id: 73, title: 'Branding 4', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/4.jpg', tags: ['Identity', 'Strategy'] },
  { id: 74, title: 'Branding 5', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/5.jpg', tags: ['Identity', 'Strategy'] },
  { id: 75, title: 'Branding 6', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/6.jpg', tags: ['Identity', 'Strategy'] },
  { id: 76, title: 'Branding 7', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/7.jpg', tags: ['Identity', 'Strategy'] },
  { id: 77, title: 'Branding 8', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/8.jpg', tags: ['Identity', 'Strategy'] },
  { id: 78, title: 'Branding 9', category: 'Branding', image: 'https://webratek.com/webhyteimages.rightwebs.com/assets/images/portfolio/marketing/half/9.png', tags: ['Identity', 'Strategy'] }
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('Website Design')
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS)

  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredProjects(PROJECTS)
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.category === activeTab))
    }
  }, [activeTab])

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#006a63]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0F766E]/10 blur-[120px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        
        {/* Header Section: Left Content, Right Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#1FC7A6] font-mono text-sm tracking-widest uppercase mb-4">Bringing Precision and Creativity together</p>
              <h2 className="text-[48px] lg:text-[110px] font-bold text-white leading-[0.95] tracking-tighter mb-8">
                Showcasing <br />
                Excellence in <br />
                Every Project
              </h2>
              <p className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
                Explore our portfolio to see how we turn visionary ideas into impactful designs. 
                Each project reflects our commitment to creativity, quality, and delivering 
                results that elevate our clients' brands.
              </p>

              <div className="flex justify-start mb-12">
                <FlipButton 
                  frontText="Get Started" 
                  backText="Let's Work" 
                  className="w-[180px] h-[52px]"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`group relative h-[40px] px-6 rounded-full border transition-all duration-300 overflow-hidden shrink-0
                      ${activeTab === cat
                        ? 'bg-gradient-to-b from-[#1FC7A6] via-[#1FC7A6] to-[#0A5A4D] border-none text-white shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)]'
                        : 'bg-white/5 border-white/10 text-white/50 hover:border-[#1FC7A6]/20 hover:text-white'
                      }`}
                  >
                    <span className="font-bold text-[11px] lg:text-[12px] tracking-[0.05em] uppercase">{cat}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Mockup Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              {/* Floating Glow */}
              <div className="absolute inset-0 bg-[#1FC7A6]/20 blur-[60px] rounded-full animate-pulse" />
              
              <img 
                src="/premium_laptop_mockup_1777930660138.png" 
                alt="Premium Work Showcase"
                className="relative z-10 w-full h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          <AnimatePresence mode="wait">
            {filteredProjects.slice(0, 6).map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[380px] overflow-hidden rounded-3xl bg-[#111] border border-white/5"
              >
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#1FC7A6] font-mono text-[10px] tracking-widest uppercase mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-[#1FC7A6]">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-12">
          <FlipButton 
            frontText="View All Projects" 
            backText="Explore Work" 
            className="w-[200px] h-[52px]"
          />
        </div>

      </div>
    </section>
  )
}
