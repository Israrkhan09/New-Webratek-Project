import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlipButton from '../components/FlipButton';

const ContactPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Hero Section - Matching Reviews/Portfolio Theme */}
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#2D6A4F] bg-gradient-to-b from-[#2D6A4F] via-[#1B4332] to-[#081C15]">
          {/* Bottom Blackish Gradient Overlay for Depth */}
          <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-0" />

          {/* Optimized Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-[#006a63]/20 blur-[80px] rounded-full will-change-transform" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-[#004d48]/20 blur-[80px] rounded-full will-change-transform" />
          </div>

          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-white text-sm tracking-widest mb-4 font-inter uppercase">
                    Connect with Us Today
                  </p>
                  <h1 className="text-[36px] lg:text-[64px] font-bold text-white leading-[1.1] tracking-tighter mb-6">
                    Get in <span className="text-transparent [-webkit-text-stroke:1.5px_#fff] italic font-serif">Touch</span> with Us
                  </h1>
                  <p className="text-white/60 text-[15px] lg:text-[16px] max-w-2xl leading-relaxed">
                    At Webratek, we are more than just a design agency — we are your strategic partner in crafting exceptional digital experiences. Our team is deeply committed to understanding your vision and transforming it into impactful, future-ready solutions. Whether you need a powerful website, distinctive brand identity, or a scalable application, we’re here to bring your ideas to life. Share your project details below and let’s create something remarkable together.
                  </p>
                </motion.div>
              </div>

              <div className="lg:col-span-5 relative flex items-center justify-end">
                <div className="relative w-full max-w-[800px]">
                  <div className="absolute inset-0 bg-[#006a63]/20 blur-[120px] rounded-full" />
                  <img
                    src="https://webhyteimages.rightwebs.com/assets/images/website%20category/contact-banner.png"
                    alt="Contact Webratek"
                    className="relative z-10 w-full h-auto drop-shadow-2xl transform translate-y-0 will-change-transform"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Now Section - Matching Site Theme */}
        <section className="py-16 bg-[#F5F5F5] relative overflow-hidden">
          <div className="section-container">
            {/* Available Now Label */}
            <div className="flex justify-center mb-6">
              <span className="px-5 py-2 bg-[#F8F9FA] text-[#006a63] text-[13px] font-bold rounded-full border border-gray-100 shadow-sm tracking-widest uppercase">
                Available Now
              </span>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-12">
              <h2 className="text-[52px] lg:text-[65px] font-bold text-gray-900 leading-[0.9] tracking-tighter mb-8">
                We'd Love to Hear From You.
              </h2>
              <div className="flex flex-col items-center gap-6">
                <p className="text-gray-500 text-[17px] md:text-[18px] max-w-2xl mx-auto">
                  Tell us about your project. We’d love to partner with you and create something exceptional.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Email Card */}
              <div className="bg-white p-12 rounded-[40px] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006a63]/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-gray-200/50 group-hover:scale-110 group-hover:bg-[#006a63] transition-all duration-500">
                  <svg className="w-9 h-9 text-[#006a63] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-[26px] font-bold text-gray-900 mb-3">Email Support</h3>
                <p className="text-gray-500 text-[16px] mb-8 leading-relaxed">Our team can respond in <br /> real time.</p>
                <a href="mailto:info@webratek.com" className="text-[#006a63] font-bold text-[19px] hover:text-[#004d48] transition-colors tracking-tight">info@webratek.com</a>
              </div>

              {/* Visit Office Card */}
              <div className="bg-white p-12 rounded-[40px] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006a63]/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-gray-200/50 group-hover:scale-110 group-hover:bg-[#006a63] transition-all duration-500">
                  <svg className="w-9 h-9 text-[#006a63] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[26px] font-bold text-gray-900 mb-3">Visit Our Office</h3>
                <p className="text-gray-500 text-[16px] mb-8 leading-relaxed">Visit our location in <br /> real life.</p>
                <p className="text-[#006a63] font-bold text-[18px] leading-tight tracking-tight">360 E 2nd St Suite 800,<br /> Los Angeles, CA 90012</p>
              </div>

              {/* Call Card */}
              <div className="bg-[#F8F9FA] p-12 rounded-[40px] border border-gray-100 flex flex-col items-center text-center group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#006a63]/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-gray-200/50 group-hover:scale-110 group-hover:bg-[#006a63] transition-all duration-500">
                  <svg className="w-9 h-9 text-[#006a63] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-[26px] font-bold text-gray-900 mb-3">Call Us Directly</h3>
                <p className="text-gray-500 text-[16px] mb-8 leading-relaxed">Available during working <br /> hours.</p>
                <a href="tel:2138783006" className="text-[#006a63] font-bold text-[19px] hover:text-[#004d48] transition-colors tracking-tight">(213) 878-3006</a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Drawer */}
        <AnimatePresence>
          {isFormOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsFormOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
              />

              {/* Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
                className="fixed top-0 right-0 h-screen w-full max-w-[500px] bg-[#0A0A0A] text-white z-[1000] p-8 md:p-10 shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mt-4">
                  <h3 className="text-[40px] font-bold mb-2 leading-none tracking-tight">
                    Got a <span className="text-[#006a63]">project?</span>
                  </h3>
                  <p className="text-gray-400 text-[15px] mb-6 leading-relaxed">
                    Brief us on your vision. Our experts will review your requirements and get back to you with a tailored strategic solution.
                  </p>

                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="bg-[#1A1A1A] border-none rounded-xl p-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#006a63] outline-none text-[15px]"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-[#1A1A1A] border-none rounded-xl p-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#006a63] outline-none text-[15px]"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="bg-[#1A1A1A] border-none rounded-xl p-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#006a63] outline-none text-[15px]"
                    />
                    <textarea 
                      placeholder="Message" 
                      rows={3}
                      className="bg-[#1A1A1A] border-none rounded-xl p-4 text-white placeholder-gray-500 focus:ring-1 focus:ring-[#006a63] outline-none resize-none text-[15px]"
                    />
                    
                    <button className="mt-3 bg-[#006a63] hover:bg-[#004d48] text-white py-4 rounded-xl text-[16px] font-bold transition-all duration-300">
                      SEND MESSAGE
                    </button>
                    
                    <p className="text-gray-500 text-[11px] mt-4 text-center leading-normal">
                      We'll keep your information in our CRM to respond to your request. For more details, consult our <span className="underline cursor-pointer">privacy policy</span>.
                    </p>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ContactPage;
