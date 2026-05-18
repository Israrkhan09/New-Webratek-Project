import { useState } from 'react'
import FlipButton from './FlipButton'

const TABS = [
  {
    id: 'website',
    label: 'Website Design',
    cards: [
      { label: 'Static Website', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/static.gif' },
      { label: 'B2B Portal', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/portal.gif' },
      { label: 'Ecommerce Website', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ecom.gif' },
      { label: 'Web Portal', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/web-portal.gif' },
      { label: 'Web Development', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/web.gif' },
    ],
  },
  {
    id: 'logo',
    label: 'Logo Design',
    cards: [
      { label: '3D Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/3d.gif' },
      { label: 'Animated Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/animated.gif' },
      { label: 'Iconic Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/iconic.gif' },
      { label: 'Illustration Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/illustration.gif' },
      { label: 'Typographic Logo', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/typography.gif' },
    ],
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    cards: [
      { label: 'Email Marketing', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/email.gif' },
      { label: 'ORM', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ORM.gif' },
      { label: 'PPC', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/PPC.gif' },
      { label: 'Social Media Marketing', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/SMM.gif' },
      { label: 'SEO', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/seo.gif' },
    ],
  },
  {
    id: 'apps',
    label: 'Mobile Apps',
    cards: [
      { label: 'Android', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/android.gif' },
      { label: 'Flutter', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/flutter.gif' },
      { label: 'Hybrid', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/hybrid.gif' },
      { label: 'iOS', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/ios.gif' },
      { label: 'Native', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/nativ.gif' },
    ],
  },
  {
    id: 'video',
    label: 'Video Animation',
    cards: [
      { label: '2D Videos', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/2d.gif' },
      { label: '3D Videos', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/3d-video.gif' },
      { label: 'Explainer', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/explan.gif' },
      { label: 'Logo Video', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/logo-video.gif' },
      { label: 'Illustration', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/illustration-video.gif' },
    ],
  },
  {
    id: 'collateral',
    label: 'Marketing Collateral',
    cards: [
      { label: 'Banner', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/banner.gif' },
      { label: 'Brochure', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/brochure.gif' },
      { label: 'Cards', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/card.gif' },
      { label: 'Magazine', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/magzine.gif' },
      { label: 'Letter', gif: 'https://webhyteimages.rightwebs.com/assets/images/elements/letter.gif' },
    ],
  },
]

const HEADING_WORDS = ['We', 'are', 'the', 'experts', 'for...']

export default function BusinessUnits() {
  const [active, setActive] = useState('website')
  const currentTab = TABS.find(t => t.id === active)

  return (
    <section id="services" className="py-24 bg-[#F5F5F5] overflow-hidden">
      <div className="section-container">

        {/* Header - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 px-2">
          {/* Left: Label */}
          <div className="lg:col-span-3 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#006a63] to-[#004d48] flex items-center justify-center text-white">
                <span className="text-[14px] font-bold leading-none">+</span>
              </div>
              <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#006a63] to-[#004d48] bg-clip-text text-transparent">
                Our Business Units
              </span>
            </div>
          </div>

          {/* Right: Heading */}
          <div className="lg:col-span-9">
            <h2 className="text-[65px] font-bold tracking-tighter text-gray-900 leading-[0.9] max-w-5xl">
              {HEADING_WORDS.map((word, idx) => (
                <span key={idx} className="inline-block mr-[0.2em] last:mr-0">
                  {word}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Tab Nav - Ensuring Dynamic Width & No Compression */}
        <div className="flex items-center justify-start lg:justify-center gap-4 overflow-x-auto whitespace-nowrap pb-12 no-scrollbar scroll-smooth px-6 -mx-6 lg:mx-0 lg:px-2">
          {TABS.map(t => {
            const isActive = active === t.id
            return (
              <FlipButton
                key={t.id}
                frontText={t.label}
                backText={t.label}
                onClick={() => setActive(t.id)}
                className={`!h-[46px] w-fit min-w-fit shrink-0 transition-all duration-500 whitespace-nowrap
                  ${isActive
                    ? '!bg-[#006a63] !border-none !shadow-[inset_0_-4px_8px_rgba(0,0,0,0.3)]'
                    : '!bg-white border-gray-100 !shadow-sm hover:!shadow-md'
                  }`}
                bgColor={isActive ? "bg-[#006a63]" : "bg-white"}
                textColor={isActive ? "text-white" : "text-gray-500"}
                textSize="text-[15px]"
              />
            )
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {currentTab.cards.map((card, i) => (
            <div key={i}>
              <div className="group cursor-pointer rounded bg-white border-[0.5px] border-black/20 h-[180px] p-9 flex flex-col items-center justify-center gap-4 transition-[box-shadow,border-color,transform] duration-500 hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.15)] hover:border-black/40 hover:-translate-y-1 w-full">
                <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
                  <img
                    src={card.gif}
                    alt={card.label}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-[16px] font-semibold text-center text-gray-900">
                  {card.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
