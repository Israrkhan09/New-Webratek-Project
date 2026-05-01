import { useState, useEffect } from 'react'

export default function Popup() {
  const [visible, setVisible] = useState(false)
  const [closed,  setClosed]  = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!closed) setVisible(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [closed])

  const close = () => { setVisible(false); setClosed(true) }

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[999] popup-enter max-w-[320px] w-full">
      <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100 overflow-hidden">

        {/* Header bar */}
        <div className="bg-teal-gradient px-5 py-4 flex items-start justify-between">
          <div>
            <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-0.5">
              Wait! Looking for an Amazing Offer?
            </p>
            <h3 className="text-white text-lg font-extrabold leading-tight">
              Get 70% Discount<br/>Design Now
            </h3>
          </div>
          <button onClick={close}
            className="text-white/70 hover:text-white transition-colors mt-0.5 shrink-0"
            aria-label="Close popup">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5 space-y-3">
          {[
            { label: 'Email',   value: 'info@webratek.com',              href: 'mailto:info@webratek.com' },
            { label: 'Phone',   value: '(213) 878-3006',                 href: 'tel:2138783006' },
            { label: 'Address', value: '360 E 2nd St Suite 800, LA CA', href: '#' },
          ].map(item => (
            <a key={item.label} href={item.href}
              className="flex flex-col group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-teal-dark mb-0.5">
                {item.label}
              </span>
              <span className="text-sm text-gray-700 group-hover:text-teal-dark transition-colors font-medium">
                {item.value}
              </span>
            </a>
          ))}

          <a href="#contact" onClick={close}
            className="btn-primary w-full justify-center mt-2 !block text-center">
            Claim My 70% Discount
          </a>
        </div>

      </div>
    </div>
  )
}
