import FlipButton from './FlipButton'
import logoWhite from '../assets/logos/header-logo/white-text.png?url'

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-black font-inter relative overflow-hidden border-t border-gray-200/50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
        
        {/* Top Section: CTA Inline */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-12">
            <h2 className="text-4xl lg:text-[88px] font-bold tracking-tight leading-[0.95] max-w-4xl">
              Let's build something <br /> amazing together
            </h2>
            <div className="pb-2 lg:pb-6">
              <FlipButton 
                frontText="Get In Touch" 
                backText="Start Project" 
                className="w-[180px] h-[52px] !bg-white"
                borderClassName="border-gray-200"
                onClick={() => window.location.href = '#contact'}
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 border-t border-gray-200/50 pt-16 mb-24">
          
          {/* Quick Links */}
          <div className="lg:col-span-8">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-8">Quick links</p>
            <div className="flex flex-wrap lg:flex-nowrap gap-2">
              {['About', 'Services', 'Projects', 'Blog', 'Pricing', 'Contact'].map((link) => (
                <FlipButton 
                  key={link}
                  frontText={link} 
                  backText={link} 
                  className="w-[85px] h-[34px] !bg-white !rounded-full"
                  textSize="text-[10px]"
                  borderClassName="border-gray-200"
                  onClick={() => {}}
                />
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Searching for exceptional talents?</p>
            <a href="mailto:hello@webratek.com" className="text-2xl lg:text-[32px] font-bold tracking-tight hover:text-gray-500 transition-colors">
              hello@webratek.com
            </a>
          </div>
        </div>

        {/* Large Decorative Text & Logo */}
        <div className="relative flex flex-col lg:flex-row justify-between items-end gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoWhite} 
                alt="Webratek" 
                className="h-10 lg:h-12 w-auto object-contain brightness-0"
              />
            </div>
            <p className="text-sm font-medium text-gray-400 pl-1">Powered by Webratek</p>
          </div>

          <h1 className="text-[80px] lg:text-[180px] font-black tracking-tighter text-gray-900 leading-[0.8] select-none pointer-events-none">
            SAY HELLO!
          </h1>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-24 pt-8 border-t border-gray-200/50">
          <div className="flex flex-wrap justify-center gap-3">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-[11px] font-bold text-gray-600 hover:border-black hover:text-black transition-all duration-300 flex items-center gap-0 hover:gap-2 group"
              >
                {social}
                <div className="w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <p className="text-[11px] font-bold text-gray-400">Copyright © 2026 Webratek®</p>
        </div>
      </div>
    </footer>
  )
}
