import barkPerson from '../assets/bark-person.png'
import FlipButton from './FlipButton'

export default function BarkSection() {
  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">

        {/* Standardized Header - Split Layout (Matching Business Units) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 px-2">
          {/* Left Column: Label */}
          <div className="lg:col-span-3 pt-1">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300">
                <span className="text-[14px] leading-none mb-[2px]">+</span>
              </div>
              <span className="text-[14px] font-semibold text-black tracking-tight font-inter uppercase">
                Partner Privilege
              </span>
            </div>
          </div>

          {/* Right Column: Massive Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[48px] lg:text-[125px] font-bold text-gray-900 leading-[0.9] tracking-tighter max-w-5xl">
              Exclusive Discount <br />
              For <span className="text-transparent [-webkit-text-stroke:1.5px_#111827] italic font-serif">Bark.Com</span>
            </h2>
          </div>
        </div>

        {/* Content Row: Description & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Side: DescriptionBlocks (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {/* Two-Column Description Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We value our clients and want you to feel safe and confident working with us.
                  That's why we offer <span className="text-gray-900 font-semibold">exclusive discounts</span>,
                  flexible installment plans, and complimentary value-added services.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Your satisfaction is our priority. We offer a <span className="text-teal-600 font-bold underline underline-offset-4 decoration-teal-200">100% money-back guarantee</span> for all clients coming from Bark.com. Check out our 5-star profile today.
                </p>
              </div>
            </div>

            {/* 3. Integrated Action Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 pt-4">
              <FlipButton text="Get In Touch" />
              
              {/* Divider 1 */}
              <div className="w-px h-10 bg-gray-200 hidden lg:block" />

              {/* Phone Section */}
              <div className="flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Direct Assistance</p>
                <a href="tel:2138783006" className="text-[17px] font-bold text-gray-900 hover:text-teal-primary transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.09a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  (213) 878-3006
                </a>
              </div>

              {/* Divider 2 */}
              <div className="w-px h-10 bg-gray-200 hidden lg:block" />

              {/* Chat Section */}
              <div className="flex flex-col">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Click Here To</p>
                <button className="text-[17px] font-bold text-gray-900 hover:text-teal-primary transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Premium Mockup (Cols 8-12) */}
          <div className="lg:col-span-5 relative lg:-mt-12">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-teal-primary/5 rounded-[40px] rotate-3 transition-transform group-hover:rotate-6 duration-700" />
                <div className="absolute -inset-4 border border-gray-100 rounded-[40px] -rotate-2" />

                <img
                  src={barkPerson}
                  alt="Premium Bark Experience"
                  className="relative z-10 w-full h-auto rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                />

                {/* Architectural Floating Badge */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white border border-gray-100 shadow-2xl p-6 rounded-2xl flex items-center gap-4 max-w-[200px]">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-teal-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-tight text-gray-400 mb-0.5">Rating</p>
                    <p className="text-[16px] font-black text-gray-900">5.0 ★ Agency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-radial-gradient from-teal-primary/5 to-transparent -z-10 opacity-60" />
          </div>

        </div>
      </div>
    </section>
  )
}
