import { useState, useEffect, useRef } from 'react'
import FlipButton from './FlipButton'
import NebulaMenu from './NebulaMenu'
import logoWhite from '../assets/logos/header-logo/white-text.png?url'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews',   href: '#reviews' },
  { label: 'Contact',   href: '#contact' },
]

const SERVICES_DROPDOWN = [
  { label: 'Web Development',  href: '#' },
  { label: 'Digital Marketing', href: '#' },
  { label: 'Logo Designing',   href: '#' },
  { label: 'App Development',  href: '#' },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [dropdownOpen,   setDropdownOpen]   = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'bg-[#F5F5F5] shadow-nav py-1 border-b border-gray-300/30 translate-y-0' 
          : 'bg-transparent py-2 border-b border-transparent'}`}
    >
      <div className="section-container flex items-center justify-between h-[52px]">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 shrink-0 relative">
          <img 
            src={logoWhite} 
            alt="Webratek Logo" 
            className={`h-9 lg:h-10 w-auto object-contain transition-all duration-300 ${scrolled ? 'brightness-0' : ''}`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9 h-full">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} 
               className={`text-[15px] font-medium transition-colors duration-300
                 ${scrolled ? 'text-gray-700 hover:text-teal-dark' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </a>
          ))}

          {/* Services dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-300
                ${scrolled ? 'text-gray-700 hover:text-teal-dark' : 'text-white/80 hover:text-white'}`}
            >
              Services
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 10L3 5h10L8 10z"/>
              </svg>
            </button>

          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <FlipButton 
            frontText="Get In Touch" 
            backText="Let's Chat" 
            className="w-[160px] h-[44px]"
            borderClassName={scrolled ? 'border-black' : 'border-transparent'}
            onClick={() => window.location.href = '#contact'}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors duration-300
            ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          }
        </button>
      </div>

      <NebulaMenu 
        isOpen={dropdownOpen} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 space-y-2 shadow-nav">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-[15px] font-medium text-gray-700 hover:text-teal-dark border-b border-gray-50">
              {l.label}
            </a>
          ))}
          <div>
            <button
              onClick={() => setMobileServices(o => !o)}
              className="flex items-center justify-between w-full py-2.5 text-[15px] font-medium text-gray-700 border-b border-gray-50"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="currentColor"><path d="M8 10L3 5h10L8 10z"/></svg>
            </button>
            {mobileServices && (
              <div className="ml-4 mt-1 space-y-1">
                {SERVICES_DROPDOWN.map(s => (
                  <a key={s.label} href={s.href} onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm text-gray-600 hover:text-teal-dark">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center mt-3 !block text-center">
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}
