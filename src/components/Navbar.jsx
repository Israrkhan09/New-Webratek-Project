import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FlipButton from './FlipButton'
import NebulaMenu from './NebulaMenu'
import logoHeader from '../assets/logos/header-logo/logoheder.png?url'
import logoFooter from '../assets/logos/header-logo/Webratekfooter.png?url'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact-us' },
]

const MOBILE_NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const [isSubmenuAnimatingOut, setIsSubmenuAnimatingOut] = useState(false)
  const timeoutRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setIsAnimatingOut(false)
        setSubmenuOpen(false)
        setIsSubmenuAnimatingOut(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 100)
  }

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.split('#')[1]
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const closeMenu = () => {
    setIsAnimatingOut(true)
    setTimeout(() => {
      setMobileOpen(false)
      setIsAnimatingOut(false)
      setSubmenuOpen(false)
      setIsSubmenuAnimatingOut(false)
    }, 600)
  }

  const closeSubmenu = () => {
    setIsSubmenuAnimatingOut(true)
    setTimeout(() => {
      setSubmenuOpen(false)
      setIsSubmenuAnimatingOut(false)
    }, 550)
  }

  return (
    <header
      className={`fixed top-4 left-6 right-6 z-50 transition-all duration-300 ease-in-out rounded-2xl
        ${scrolled
          ? 'bg-[#F5F5F5] shadow-nav border border-gray-300/30'
          : 'bg-transparent border border-transparent'}`}
    >
      <div className="section-container flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 relative">
          <img
            src={scrolled ? logoHeader : logoFooter}
            alt="Webratek Logo"
            className="h-9 lg:h-10 w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9 h-full">
          {NAV_LINKS.map(l => (
            <Link
              key={l.label}
              to={l.href}
              onClick={(e) => handleLinkClick(e, l.href)}
              className={`text-[15px] font-medium transition-colors duration-300
                 ${scrolled ? 'text-gray-700 hover:text-teal-dark' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-300
                ${scrolled ? 'text-gray-700 hover:text-teal-dark' : 'text-white/80 hover:text-white'}`}
            >
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 10L3 5h10L8 10z" />
              </svg>
            </Link>
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <FlipButton
            frontText="Contact Us"
            backText="Contact Us"
            className="!w-[150px] !h-[40px] !m-0"
            textSize="text-[15px]"
            borderClassName={scrolled ? 'border border-black' : 'border border-white'}
            onClick={() => navigate('/contact-us')}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300
            ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => {
            setMobileOpen(true)
            setIsAnimatingOut(false)
          }}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <NebulaMenu
        isOpen={dropdownOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        scrolled={scrolled}
      />

      {/* Premium Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimatingOut ? 0 : 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: isAnimatingOut ? 0.35 : 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Sidebar Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isAnimatingOut ? "100%" : "0%" }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.16, 1, 0.3, 1], // premium bezier ease-out
                duration: isAnimatingOut ? 0.45 : 0.6,
                delay: isAnimatingOut ? 0.35 : 0
              }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-[#F5F5F5] z-50 shadow-2xl flex flex-col p-8 lg:hidden border-l border-gray-200 overflow-hidden"
            >
              {/* Top Header of Menu */}
              <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
                  <img
                    src={logoHeader}
                    alt="Webratek Logo"
                    className="h-8 w-auto object-contain"
                  />
                </Link>

                {/* Close Button */}
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Vertically Centered Menu Links */}
              <div className="flex-grow flex flex-col justify-center">
                <nav className="flex flex-col gap-6">
                  {MOBILE_NAV_LINKS.map((link, idx) => {
                    const staggerDelay = isAnimatingOut 
                      ? (MOBILE_NAV_LINKS.length - 1 - idx) * 0.05 
                      : idx * 0.06;

                    const isServices = link.label === 'Services';

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ 
                          x: isAnimatingOut ? 60 : 0, 
                          opacity: isAnimatingOut ? 0 : 1 
                        }}
                        transition={{
                          type: "tween",
                          ease: "easeOut",
                          duration: 0.3,
                          delay: staggerDelay
                        }}
                        className="flex items-center justify-between group"
                      >
                        <Link
                          to={link.href}
                          onClick={(e) => {
                            handleLinkClick(e, link.href)
                            closeMenu()
                          }}
                          className="text-[32px] font-bold text-gray-900 leading-none tracking-tight hover:text-[#006a63] transition-colors inline-block duration-300 py-1"
                        >
                          {link.label}
                        </Link>

                        {isServices && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSubmenuOpen(true);
                            }}
                            className="p-2 ml-4 rounded-full border border-black/10 flex items-center justify-center text-gray-900 hover:bg-black/5 hover:border-black/30 transition-all duration-300"
                            aria-label="Open Services Submenu"
                          >
                            <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </motion.div>
                    )
                  })}
                </nav>
              </div>

              {/* Bottom Footer or Action Row */}
              <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Connect with us</p>
                <div className="flex items-center gap-4">
                  <a href="mailto:info@webratek.com" className="text-sm font-semibold text-gray-900 hover:text-[#006a63] transition-colors">
                    info@webratek.com
                  </a>
                </div>
              </div>

              {/* Services Submenu Overlay */}
              <AnimatePresence>
                {submenuOpen && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: isSubmenuAnimatingOut ? "100%" : 0 }}
                    exit={{ x: "100%" }}
                    transition={{
                      type: "tween",
                      ease: [0.16, 1, 0.3, 1], // premium bezier
                      duration: 0.5,
                      delay: isSubmenuAnimatingOut ? 0.35 : 0
                    }}
                    className="absolute inset-0 bg-[#F5F5F5] z-20 flex flex-col p-8"
                  >
                    {/* Top Header of Menu */}
                    <div className="flex items-center justify-between mb-6">
                      <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5">
                        <img
                          src={logoHeader}
                          alt="Webratek Logo"
                          className="h-8 w-auto object-contain"
                        />
                      </Link>

                      {/* Close Button */}
                      <button
                        onClick={closeMenu}
                        className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-gray-900 hover:bg-black/5 transition-colors duration-300"
                        aria-label="Close menu"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Back Button below the Logo */}
                    <div className="mb-8">
                      <button
                        onClick={closeSubmenu}
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 font-bold text-sm tracking-tight transition-colors duration-300 py-1"
                      >
                        ← Main Menu
                      </button>
                    </div>

                    {/* Vertically Centered Submenu Links */}
                    <div className="flex-grow flex flex-col justify-center">
                      <nav className="flex flex-col gap-6">
                        {[
                          { label: 'Web Development', href: '/web-development' },
                          { label: 'Digital Marketing', href: '/digital-marketing' },
                          { label: 'Logo Designing', href: '/logo-designing' },
                          { label: 'App Development', href: '/app-development' },
                        ].map((item, idx) => {
                          const itemStaggerDelay = isSubmenuAnimatingOut
                            ? (4 - 1 - idx) * 0.05
                            : idx * 0.08 + 0.15;

                          return (
                            <motion.div
                              key={item.label}
                              initial={{ x: 60, opacity: 0 }}
                              animate={{ 
                                x: isSubmenuAnimatingOut ? 60 : 0, 
                                opacity: isSubmenuAnimatingOut ? 0 : 1 
                              }}
                              transition={{
                                type: "tween",
                                ease: "easeOut",
                                duration: 0.3,
                                delay: itemStaggerDelay
                              }}
                            >
                              <Link
                                to={item.href}
                                onClick={() => {
                                  closeMenu();
                                }}
                                className="text-[32px] font-bold text-gray-900 hover:text-[#006a63] transition-colors inline-block duration-300 py-1"
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </nav>
                    </div>

                    {/* Bottom Footer or Action Row */}
                    <div className="pt-8 border-t border-black/10 flex flex-col gap-4">
                      <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Connect with us</p>
                      <div className="flex items-center gap-4">
                        <a href="mailto:info@webratek.com" className="text-sm font-semibold text-gray-900 hover:text-[#006a63] transition-colors">
                          info@webratek.com
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
