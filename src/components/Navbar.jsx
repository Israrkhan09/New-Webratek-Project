import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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

const SERVICES_DROPDOWN = [
  { label: 'Web Development', href: '/web-development' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'Logo Designing', href: '/logo-designing' },
  { label: 'App Development', href: '/app-development' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const timeoutRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

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

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const id = href.split('#')[1]
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileOpen(false)
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
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Menu"
        >
          {mobileOpen
            ? <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      <NebulaMenu
        isOpen={dropdownOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        scrolled={scrolled}
      />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 space-y-2 shadow-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.label} to={l.href} onClick={(e) => handleLinkClick(e, l.href)}
              className="block py-2.5 text-[15px] font-medium text-gray-700 hover:text-teal-dark border-b border-gray-50">
              {l.label}
            </Link>
          ))}
          <div>
            <button
              onClick={() => setMobileServices(o => !o)}
              className="flex items-center justify-between w-full py-2.5 text-[15px] font-medium text-gray-700 border-b border-gray-50"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`} viewBox="0 0 16 16" fill="currentColor"><path d="M8 10L3 5h10L8 10z" /></svg>
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
          <button
            onClick={() => {
              setMobileOpen(false)
              navigate('/contact-us')
            }}
            className="w-full justify-center mt-3 block text-center py-3 rounded-full bg-[#006a63] text-white font-bold shadow-lg"
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  )
}
