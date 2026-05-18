import { useNavigate } from 'react-router-dom'
import partnerPrivilegeImg from '../assets/logos/header-logo/Partner Privilege-image.png'
import FlipButton from './FlipButton'

export default function BarkSection() {
  const navigate = useNavigate()
  return (
    <section className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">

        {/* Standardized Header - Split Layout (Matching Business Units) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 px-2 items-center">
          {/* Left Column: Label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] flex items-center justify-center text-white">
                <span className="text-[14px] font-bold leading-none">+</span>
              </div>
              <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent">
                Partner Privilege
              </span>
            </div>
          </div>

          {/* Right Column: Massive Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1.0] lg:leading-[0.9] tracking-tighter whitespace-normal lg:whitespace-nowrap">
              Exclusive Discount For Bark.Com
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
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  We value our clients and want you to feel safe and confident working with us.
                  That's why we offer <span className="text-gray-900 font-semibold">exclusive discounts</span>,
                  flexible installment plans, and complimentary value-added services.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-[17px] leading-relaxed">
                  We put your trust first. Enjoy complete peace of mind with our <span className="text-gray-900 font-bold underline underline-offset-4 decoration-gray-200">exclusive 100% money-back guarantee</span> for all our Bark.com partners. Experience excellence through our top-rated 5-star professional profile.
                </p>
              </div>
            </div>

            {/* 3. Integrated Action Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 pt-4">
              <FlipButton
                frontText="Get In Touch"
                backText="Let's Talk"
                onClick={() => navigate('/contact-us')}
              />

              {/* Divider 1 */}
              <div className="w-px h-10 bg-gray-200 hidden lg:block" />

              {/* Phone Section */}
              <div className="flex flex-col">
                <a 
                  href="tel:2138783006" 
                  className="group flex flex-col items-center justify-center border border-black/80 px-8 py-3 rounded-full hover:bg-black transition-all duration-300"
                >
                  <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-gray-300 transition-colors">Direct Assistance</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-black group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.07 11.5a19.79 19.79 0 01-3.07-8.67A2 2 0 013 .84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.09a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span className="text-[15px] font-bold text-gray-900 group-hover:text-white transition-colors tracking-tight">
                      (213) 878-3006
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Partner Privilege Image */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 lg:-mt-16 flex items-center justify-center overflow-visible">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-none scale-[1.1] lg:scale-[1.3] lg:origin-center overflow-visible mx-auto">
              <img
                src={partnerPrivilegeImg}
                alt="Bark.com Premium Partnership"
                loading="eager"
                fetchPriority="high"
                className="relative z-10 w-full h-auto mx-auto"
                style={{ filter: 'drop-shadow(0 24px 32px rgba(0,0,0,0.18))' }}
              />

              {/* Floating Rating Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-[-16px] lg:translate-x-0 z-20 bg-white border border-gray-100 shadow-lg p-2 px-3 rounded-xl flex items-center gap-2 w-auto whitespace-nowrap">
                <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-tight text-gray-400 mb-0.5">Rating</p>
                  <p className="text-[12px] font-black text-gray-900">5.0 ★ Agency</p>
                </div>
              </div>

            </div>
          </div>



        </div>
      </div>
    </section>
  )
}
