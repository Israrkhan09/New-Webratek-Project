import { useState } from 'react'
import FlipButton from './FlipButton'

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you soon.')
  }

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden font-inter">
      {/* Background Texture/Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">

          {/* Left Side: Contact Form Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-10 lg:p-12 rounded shadow-2xl reveal font-inter h-full min-h-[370px] flex flex-col justify-between w-full">
              <div>
                <div className="mb-6">
                  <h3 className="text-black font-extrabold text-[13px] tracking-[0.2em] uppercase mb-4 opacity-80">
                    Webratek
                  </h3>
                  <h4 className="text-gray-900 text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.1]">
                    Have a project <br /> in mind?
                  </h4>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-800 uppercase tracking-widest pl-1">Your name*</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#F5F5F5] border-none rounded-2xl px-6 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-1 focus:ring-black/20 transition-all outline-none font-inter font-medium text-[15px]"
                      required
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-800 uppercase tracking-widest pl-1">E-mail*</label>
                    <input
                      type="email"
                      placeholder="hello@site.com"
                      className="w-full bg-[#F5F5F5] border-none rounded-2xl px-6 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-1 focus:ring-black/20 transition-all outline-none font-inter font-medium text-[15px]"
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-gray-800 uppercase tracking-widest pl-1">Message</label>
                    <textarea
                      placeholder="Your message"
                      rows="2"
                      className="w-full bg-[#F5F5F5] border-none rounded-2xl px-6 py-3 text-gray-900 placeholder:text-gray-300 focus:ring-1 focus:ring-black/20 transition-all outline-none resize-none font-inter font-medium text-[15px]"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                </form>
              </div>

              <div className="mt-6">
                <FlipButton
                  frontText="Book a Call"
                  backText="Let's Connect"
                  isDark={true}
                  className="w-full !rounded-full !h-[60px]"
                  onClick={handleSubmit}
                />
                <p className="text-[10px] text-gray-400 text-center mt-4 leading-relaxed font-inter opacity-70">
                  By submitting, you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer Column for Visible Gap */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Side: Content (Founder Card Removed) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full lg:pt-14 min-w-0">
            <div className="reveal">
              <h2 className="text-white text-[60px] lg:text-[115px] font-bold leading-[0.8] tracking-tighter mb-12 font-inter">
                Let's talk.
              </h2>
              <p className="text-gray-400 text-xl lg:text-[24px] font-medium max-w-2xl leading-[1.3] mb-12 font-inter">
                Tell us about your project, whether it's a website, Product redesign, or MVP.
              </p>

              {/* Horizontal Divider */}
              <div className="border-t border-white/10 mb-16 w-full max-w-4xl" />

              {/* Feature Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24 font-inter">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span className="text-white font-bold text-[18px] font-inter text-nowrap">Quick response.</span>
                  </div>
                  <p className="text-gray-500 text-[14px] leading-relaxed pl-9 font-inter">
                    If you're ready to create and collaborate, we'd love to hear from you.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3m12 0h3M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
                    </svg>
                    <span className="text-white font-bold text-[18px] font-inter text-nowrap">Clear next steps.</span>
                  </div>
                  <p className="text-gray-500 text-[14px] leading-relaxed pl-9 font-inter">
                    After the consultation, we'll provide you with a detailed plan and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
