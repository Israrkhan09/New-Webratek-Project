import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    id: '01',
    label: 'Discover',
    subheading: 'Understanding your vision.',
    title: 'Initialize your project',
    desc: 'We analyze your business goals, audience, and competitors to build a strong digital strategy.',
    points: [
      'Business & competitor research',
      'Brand positioning strategy',
      'Requirement gathering'
    ]
  },
  {
    id: '02',
    label: 'Design',
    subheading: 'Crafting premium experiences.',
    title: 'Configure the system',
    desc: 'We create modern, user-focused designs that align perfectly with your brand identity.',
    points: [
      'UI/UX wireframing',
      'Mobile & web interface design',
      'Brand identity & logo concepts'
    ]
  },
  {
    id: '03',
    label: 'Develop',
    subheading: 'Turning ideas into reality.',
    title: 'Build the product',
    desc: 'We develop scalable, high-performance digital products using modern technologies.',
    points: [
      'Responsive web development',
      'Mobile app development',
      'API & backend integration'
    ]
  },
  {
    id: '04',
    label: 'Market',
    subheading: 'Scaling your online presence.',
    title: 'Deploy to production',
    desc: 'We grow your brand through targeted digital marketing and audience engagement.',
    points: [
      'Social media marketing',
      'SEO optimization',
      'Paid advertising campaigns'
    ]
  },
  {
    id: '05',
    label: 'Launch',
    subheading: 'Deploying with confidence.',
    title: 'Project Live',
    desc: 'We launch your project with optimized performance, security, and long-term scalability.',
    points: [
      'Production deployment',
      'Speed optimization',
      'Monitoring & maintenance'
    ]
  }
]

export default function WorkflowPipeline() {
  const triggerRef = useRef(null)
  const pinRef = useRef(null)

  useEffect(() => {
    const pin = pinRef.current
    const trigger = triggerRef.current

    const totalHorizontalScroll = (STEPS.length - 1) * 100

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: `+=${STEPS.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onRefresh: (self) => {
            if (self.spacer) {
              self.spacer.style.width = '100%';
              self.spacer.style.overflow = 'hidden';
            }
          }
        }
      })

      tl.to(pin, {
        xPercent: -100 * (STEPS.length - 1) / STEPS.length,
        ease: "none",
      })

      STEPS.forEach((_, i) => {
        const cardSelector = `.step-card-${i}`
        const numSelector = `${cardSelector} .step-num`

        // Number parallax
        gsap.fromTo(numSelector,
          { x: -20 },
          {
            x: 60,
            scrollTrigger: {
              trigger: trigger,
              start: `${i * 100}% top`,
              end: `${(i + 1) * 100}% top`,
              scrub: true,
              containerAnimation: tl,
            }
          }
        )
      })
    }, trigger)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={triggerRef} className="w-full max-w-full overflow-x-hidden bg-black">
      <div ref={pinRef} className="relative h-screen flex items-center overflow-hidden" style={{ width: `${STEPS.length * 100}%` }}>

        {/* Header Label */}
        <div className="absolute top-12 left-8 lg:top-20 lg:left-20 z-20">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] flex items-center justify-center text-white">
              <span className="text-[14px] font-bold leading-none">+</span>
            </div>
            <span className="text-[14px] font-bold tracking-tight font-inter uppercase bg-gradient-to-br from-[#1FC7A6] to-[#0F766E] bg-clip-text text-transparent">
              Workflow Pipeline
            </span>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex h-full w-full">
          {STEPS.map((step, idx) => (
            <div
              key={step.id}
              className={`step-card-${idx} relative flex-1 h-full flex flex-col justify-center px-8 lg:px-24 shrink-0`}
            >
              <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Column: Number + Main Heading + Subheading */}
                <div className="flex flex-col items-start gap-4 lg:gap-0 w-full">
                  <div className="step-num mb-2 lg:-mb-6">
                    <span className="text-[80px] lg:text-[220px] font-black text-white/[0.15] [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] leading-[1] tracking-tighter inline-block ml-0 lg:-ml-2">
                      {step.id}
                    </span>
                  </div>
                  <h2 className="text-[65px] font-semibold text-white leading-[1] tracking-tighter mb-6 lg:mb-12">
                    {step.label}
                  </h2>
                  <div className="flex items-center gap-4 lg:gap-5">
                    <div className="w-[2px] h-[20px] lg:h-[30px] bg-[#1FC7A6]/50" />
                    <p className="text-sm lg:text-lg font-mono text-white/50 font-medium tracking-tight">
                      {step.subheading}
                    </p>
                  </div>
                </div>

                {/* Right Column: Detailed Content (Only Desc & Points) */}
                <div className="flex flex-col gap-10 lg:gap-12 lg:border-l border-white/30 lg:pl-16 mt-12 lg:mt-0 w-full">
                  <p className="text-white/60 text-[17px] leading-relaxed max-w-xl font-medium">
                    {step.desc}
                  </p>

                  <ul className="flex flex-col gap-5">
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-5 group">
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                        <span className="text-white/60 group-hover:text-white transition-colors duration-300 font-medium text-[17px] tracking-tight">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>


              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
