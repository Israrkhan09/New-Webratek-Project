import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

const REVIEWS = [
  {
    name:   'Trina Gill',
    title:  'Senior Publisher',
    text:   'WebraTek is a life savior. My business was all set to operate but my website crashed at the last moment. Thanks to the team at WebraTek — they had everything back up and running perfectly.',
    avatar: 'TG',
    color:  '#000000',
  },
  {
    name:   'Tyrone Turner',
    title:  'Editor',
    text:   'Worth sharing my experience with WebraTek. The team has all the expertise to design a business logo and guided me through every step of the process with professionalism.',
    avatar: 'TT',
    color:  '#1A1A1A',
  },
  {
    name:   'Milton Sims',
    title:  'Brand Manager',
    text:   'Highly appreciated their work and commitment. They worked according to our business needs and their output was absolutely flawless. Will definitely work with them again.',
    avatar: 'MS',
    color:  '#2D2D2D',
  },
  {
    name:   'Belle Boyd',
    title:  'Senior Content Creator',
    text:   'A loud shout-out to the team at WebraTek! My mobile application is running smoothly and all my clients are thoroughly satisfied. Incredible work from start to finish.',
    avatar: 'BB',
    color:  '#111111',
  },
  {
    name:   'Gareth Lawson',
    title:  'Tech Founder',
    text:   'The level of creativity WebraTek brought to our platform was unexpected. They didnt just build what we asked; they improved the entire user journey. Exceptional partner.',
    avatar: 'GL',
    color:  '#1F1F1F',
  },
  {
    name:   'Sarah Jenkins',
    title:  'Marketing Director',
    text:   'I have worked with many agencies, but WebraTeks responsiveness and attention to detail are on another level. Our SEO traffic increased by 140% within three months.',
    avatar: 'SJ',
    color:  '#000000',
  },
  {
    name:   'David Chen',
    title:  'Startup CEO',
    text:   'Building a complex web portal is no easy task, but the team handled it with grace. Their codebase is clean, and their design sense is top-notch. Highly recommended.',
    avatar: 'DC',
    color:  '#1A1A1A',
  },
  {
    name:   'Elena Rodriguez',
    title:  'Creative Lead',
    text:   'WebraTek transformed our outdated brand into something modern and powerful. The feedback from our customers has been overwhelmingly positive. They are true artists.',
    avatar: 'ER',
    color:  '#2D2D2D',
  },
  {
    name:   'Marcus Thorne',
    title:  'Operation Manager',
    text:   'Professional, punctual, and highly skilled. They delivered our project ahead of schedule without compromising on quality. A rare find in the digital agency world.',
    avatar: 'MT',
    color:  '#111111',
  },
  {
    name:   'Sophia Wells',
    title:  'E-commerce Owner',
    text:   'Our online store sales doubled after the redesign by WebraTek. The checkout process is now seamless, and the mobile experience is better than we ever imagined.',
    avatar: 'SW',
    color:  '#1F1F1F',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FFC107">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="pt-12 pb-24 lg:py-24 bg-[#F5F5F5]">
      <div className="section-container">

        {/* Header - Label Left, Heading Centered */}
        <div className="relative mb-10 lg:mb-20 px-2 flex flex-col items-start lg:items-center">
          {/* Label - Absolute on Desktop, Normal on Mobile */}
          <div className="lg:absolute lg:left-2 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-3 mb-6 lg:mb-0">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] flex items-center justify-center text-white">
              <span className="text-[14px] font-bold leading-none">+</span>
            </div>
            <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </div>

          {/* Heading - Always Centered */}
          <h2 className="text-[55px] lg:text-[65px] font-bold text-gray-900 leading-[1.0] lg:leading-[0.9] tracking-tighter max-w-5xl text-left lg:text-center w-full">
            Our Reviews
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative px-4">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            freeMode={true}
            speed={6000}
            allowTouchMove={true}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              pauseOnMouseEnter: false
            }}
            className="ticker-swiper"
          >
            {REVIEWS.map((r, i) => (
              <SwiperSlide key={i}>
                <div className="review-card bg-white h-[320px] flex flex-col justify-between p-8">
                  {/* Decorative quote */}
                  <span className="absolute top-5 right-6 text-8xl font-serif leading-none select-none bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent opacity-30">
                    &ldquo;
                  </span>

                  <div>
                    <StarRating />
                    <p className="text-gray-600 text-[14px] leading-relaxed relative z-10 line-clamp-4">
                      <span className="bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent font-bold">"</span>
                      {r.text}
                      <span className="bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent font-bold">"</span>
                    </p>
                  </div>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: `linear-gradient(135deg, ${r.color}, #333333)` }}
                    >
                      {r.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 line-clamp-1">{r.name}</p>
                      <p className="text-xs text-gray-400 line-clamp-1">{r.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
