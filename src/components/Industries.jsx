const INDUSTRIES = [
  { name: 'Engineering',    icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/engineering.png' },
  { name: 'Religion',       icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/religion.png' },
  { name: 'Financial',      icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/financial.png' },
  { name: 'Medical',        icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/medical.png' },
  { name: 'Communication',  icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/communication.png' },
  { name: 'Children',       icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/children.png' },

  { name: 'Construction',   icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/construction.png' },
  { name: 'Social',         icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/social.png' },
  { name: 'Insurance',      icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/insurance.png' },
  { name: 'Health',         icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/health.png' },
  { name: 'Entertainment',  icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/entertainment.png' },
  { name: 'Craft',          icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/craft.png' },

  { name: 'Technology',     icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/technology.png' },
  { name: 'Education',      icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/education.png' },
  { name: 'Consultation',   icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/consultation.png' },
  { name: 'Travel',         icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/travel.png' },
  { name: 'Environmental',  icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/environmental.png' },
  { name: 'Music',          icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/music.png' },

  { name: 'Automotive',     icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/automotive.png' },
  { name: 'Resource',       icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/resource.png' },
  { name: 'Architectural',  icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/architectural.png' },
  { name: 'Matrimony',      icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/religion.png' }, // Placeholder for matrimony if missing
  { name: 'Fashion',        icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/fashion.png' },
  { name: 'Navigation',     icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/navigation.png' },

  { name: 'Catalogues',     icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/social.png' }, // Placeholder
  { name: 'Sports',         icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/sports.png' },
  { name: 'Food',           icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/food.png' },
  { name: 'Art',            icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/art.png' },
  { name: 'Spa',            icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/spa.png' },
  { name: 'News',           icon: 'https://webhyteimages.rightwebs.com/assets/images/elements/news.png' },
]

export default function Industries() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="section-container">

        {/* Header - Balanced 3-Part Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 px-2 items-start">
          
          {/* 1. Left Label (col-span-3) */}
          <div className="lg:col-span-3 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300">
                <span className="text-[14px] leading-none mb-[2px]">+</span>
              </div>
              <span className="text-[14px] font-semibold text-black tracking-tight font-inter uppercase text-nowrap">
                Industries We Serve
              </span>
            </div>
          </div>

          {/* 2. Center Heading (col-span-5) */}
          <div className="lg:col-span-5">
            <h2 className="text-[48px] lg:text-[125px] font-bold text-gray-900 leading-[0.85] tracking-tighter">
              Smart <br/> Solutions
            </h2>
          </div>

          {/* 3. Right Description (col-span-4) */}
          <div className="lg:col-span-4 pt-6 lg:pt-12 lg:pl-16">
            <p className="text-[16px] lg:text-[18px] text-gray-500 leading-relaxed font-inter max-w-[300px]">
              We help businesses across 40+ industries with modern web solutions, branding, and digital growth.
            </p>
          </div>

        </div>

        {/* Grid - Clean Horizontal Layout (6 Columns Matching Reference) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 px-4 lg:pl-16 justify-center justify-items-center">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="flex items-center gap-3 group cursor-default lg:justify-self-center w-full max-w-[180px]"
            >
              <div className="w-8 h-8 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mix-blend-multiply">
                <img 
                  src={ind.icon} 
                  alt={ind.name} 
                  className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply"
                  onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/512/1067/1067555.png' }}
                />
              </div>
              <p className="text-[14px] lg:text-[15px] font-medium text-gray-700 tracking-tight font-inter transition-colors duration-300 group-hover:text-black">
                {ind.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
