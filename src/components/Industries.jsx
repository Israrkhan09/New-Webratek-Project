const INDUSTRIES = [
  { name: 'Engineering', icon: 'engineering.png' },
  { name: 'Religion', icon: 'relegious.png' },
  { name: 'Financial', icon: 'Finaincial.png' },
  { name: 'Medical', icon: 'medical.png' },
  { name: 'Communication', icon: 'communications.png' },
  { name: 'Children', icon: 'children.png' },

  { name: 'Construction', icon: 'construction.png' },
  { name: 'Social', icon: 'social.png' },
  { name: 'Insurance', icon: 'insurance.png' },
  { name: 'Health', icon: 'health.png' },
  { name: 'Entertainment', icon: 'entertainment .png' },
  { name: 'Craft', icon: 'craft.png' },

  { name: 'Technology', icon: 'technology.png' },
  { name: 'Education', icon: 'education.png' },
  { name: 'Consultation', icon: 'consultation.png' },
  { name: 'Travel', icon: 'travel.png' },
  { name: 'Environmental', icon: 'environment.png' },
  { name: 'Music', icon: 'music.png' },

  { name: 'Automotive', icon: 'automotive.png' },
  { name: 'Resource', icon: 'resource.png' },
  { name: 'Architectural', icon: 'Architectural.png' },
  { name: 'Matrimony', icon: 'marriage.png' },
  { name: 'Fashion', icon: 'fashion.png' },
  { name: 'Navigation', icon: 'navigation.png' },

  { name: 'Catalogues', icon: 'Catalogues.png' },
  { name: 'Sports', icon: 'sports.png' },
  { name: 'Food', icon: 'food.png' },
  { name: 'Art', icon: 'art.png' },
  { name: 'Spa', icon: 'spa.png' },
  { name: 'News', icon: 'news.png' },
]

export default function Industries() {
  return (
    <section className="py-12 bg-[#F5F5F5]">
      <div className="section-container">

        {/* Header - Centered Heading, Label Left, Description Right */}
        <div className="relative mb-8 px-2 flex flex-col items-start lg:items-center min-h-[100px] justify-center">

          {/* Left Label - Absolute on Desktop */}
          <div className="lg:absolute lg:left-2 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-3 mb-4 lg:mb-0">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] flex items-center justify-center text-white">
              <span className="text-[14px] font-bold leading-none">+</span>
            </div>
            <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </div>

          {/* Center Heading */}
          <h2 className="text-[46px] lg:text-[65px] font-bold text-gray-900 leading-[1.0] lg:leading-[0.85] tracking-tighter text-left lg:text-center whitespace-normal lg:whitespace-nowrap w-full">
            Digital Industries
          </h2>

          {/* Right Description - Absolute on Desktop */}
          <div className="lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2 text-left lg:text-right mt-4 lg:mt-0">
            <p className="text-[17px] text-gray-500 leading-relaxed font-inter max-w-[300px] lg:mr-0 lg:ml-auto">
              We help businesses across 40+ industries with modern web solutions, branding, and digital growth.
            </p>
          </div>

        </div>

        {/* Horizontal Infinite Carousel */}
        <div className="relative w-full overflow-hidden mask-h-fade py-2 pause-on-hover">
          <div
            className="flex gap-6 animate-horizontal-ticker-reverse w-max"
            style={{ animationDuration: '60s' }}
          >
            {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-[5px] shadow-sm group cursor-default transition-all duration-300 hover:border-teal-200 hover:shadow-md"
              >
                <div className="w-7 h-7 shrink-0 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">
                  <img
                    src={`https://webhyteimages.rightwebs.com/assets/images/elements/${ind.icon}`}
                    alt={ind.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                    onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/1067/1067555.png' }}
                  />
                </div>
                <p className="text-[15px] font-bold text-gray-700 tracking-tight font-inter whitespace-nowrap group-hover:text-black transition-colors duration-300">
                  {ind.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
