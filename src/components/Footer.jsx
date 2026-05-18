import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FlipButton from './FlipButton'
import ProjectDrawer from './ProjectDrawer'
import logoHeader from '../assets/logos/header-logo/webratekheader.png?url'

export default function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleLinkClick = (href) => {
    if (href.startsWith('/#')) {
      if (location.pathname === '/') {
        const id = href.split('#')[1]
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate(href)
      }
    } else {
      navigate(href)
    }
  }

  return (
    <footer className="bg-[#F5F5F5] text-black font-inter relative overflow-hidden border-t border-black">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:pt-16 lg:pb-8 relative z-10">

        {/* Top Section: CTA Inline */}
        <div className="mb-8 lg:mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            <h2 className="text-[46px] lg:text-[72px] font-bold tracking-tight leading-[0.95] max-w-4xl">
              Let's build something <br /> amazing together
            </h2>

            <FlipButton
              frontText="Get a Quote"
              backText="Get a Quote"
              className="!w-[160px] !h-[48px]"
              onClick={() => setIsFormOpen(true)}
            />
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="flex flex-col lg:flex-row border-t border-black pt-12 mb-16 lg:mb-24 gap-12 lg:gap-0">

          {/* Quick Links */}
          <div className="lg:pr-6 lg:border-r lg:border-black flex-shrink-0">
            <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest mb-1">Quick links</p>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 lg:flex lg:flex-nowrap lg:gap-x-6 lg:gap-y-0">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog', href: '/#blog' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Contact', href: '/contact-us' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-[16px] font-semibold text-black tracking-tight hover:text-[#006a63] transition-colors relative group normal-case whitespace-nowrap text-left"
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#006a63] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info - Horizontal on Desktop */}
          <div className="lg:pl-6 flex-grow">
            <div className="flex flex-col lg:flex-row lg:items-start justify-start gap-x-6 gap-y-8">
              <div className="flex flex-col gap-1 lg:pr-6 lg:border-r lg:border-black">
                <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Email</p>
                <a
                  href="mailto:info@webratek.com"
                  className="text-[16px] font-semibold tracking-tight text-black hover:text-[#006a63] transition-colors duration-300 block leading-none"
                >
                  info@webratek.com
                </a>
              </div>

              <div className="flex flex-col gap-1 lg:pr-6 lg:border-r lg:border-black">
                <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Contact Number</p>
                <a
                  href="tel:2138783006"
                  className="text-[16px] font-semibold tracking-tight text-black hover:text-[#006a63] transition-colors duration-300 block leading-none"
                >
                  (213) 878-3006
                </a>
              </div>

              <div className="max-w-none flex flex-col gap-1">
                <p className="text-[14px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Our Office</p>
                <p className="text-[16px] font-semibold text-black leading-none whitespace-nowrap">
                  360 E 2nd St Suite 800, Los Angeles, CA 90012
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Decorative Text & Logo */}
        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoHeader}
                alt="Webratek"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-medium text-gray-400 pl-1">Powered by Webratek</p>
          </div>

          <h1 className="text-[70px] sm:text-[64px] lg:text-[180px] font-black tracking-tighter text-gray-900 leading-[0.8] select-none pointer-events-none w-full lg:w-auto text-left whitespace-nowrap">
            SAY HELLO!
          </h1>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-8 lg:mt-12 pt-8 border-t border-black relative">
          <p className="text-[13px] font-medium text-gray-500 order-3 lg:order-1">Copyright © 2026 Webratek®</p>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group order-1 lg:order-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2 hover:text-[#006a63] transition-colors duration-300"
          >
            <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center group-hover:border-[#006a63] transition-colors duration-300">
              <svg 
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </span>
            <span className="text-[14px] font-bold tracking-widest uppercase">Scroll to top</span>
          </button>

          <div className="flex items-center gap-5 order-2 lg:order-3">
            {[
              { name: 'Discord', path: 'M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.5868 0-.1635-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z' },
              { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              { name: 'LinkedIn', path: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.8 1.7v-1.5H10v7.8h3v-4.1a1.2 1.2 0 0 1 1.2-1.2c.7 0 1.3.6 1.3 1.2v4.1h3m-10.5-9v-1.5h-3v1.5h3m0 9v-7.8h-3v7.8h3z' },
              { name: 'Bark', path: 'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z' },
              { name: 'Instagram', path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m4.4 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6m4.5-1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z' },
              { name: 'Facebook', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V14H7.5v-2H10V9.5C10 7.01 11.49 5.5 13.75 5.5c.94 0 1.91.17 1.91.17V8h-1.15c-1.22 0-1.6.76-1.6 1.54V12h2.75l-.44 2H13v7.8c4.56-.93 8-4.96 8-9.8z' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-[#006a63] hover:text-white hover:border-[#006a63] transition-all duration-300 shadow-sm"
                title={social.name}
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Form Drawer */}
      <ProjectDrawer isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </footer>
  )
}
