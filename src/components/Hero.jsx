import bannerVideo from '../assets/Banner-Video/G0NwzP4bivPvK55b3ubxNslUs.mp4'
import ScramblePhrases from './ScramblePhrases'
import FlipButton from './FlipButton'

export default function Hero() {
  return (
    <section id="home" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-9 z-0">
      {/* ── Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-[2px]" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center animate-fade-in-up pt-24 md:pt-32">
        
        {/* ── Heading ── */}
        <h1 
          className="text-3xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          style={{ color: '#F5F5F5' }}
        >
          Delivering Exceptional <br className="hidden md:block" />
          <ScramblePhrases /> <br className="hidden md:block" />
          For Businesses of All Sizes
        </h1>

        {/* ── Subheading ── */}
        <p 
          className="text-md md:text-md max-w-2xl mb-12 leading-relaxed"
          style={{ color: '#F5F5F5', opacity: 0.7 }}
        >
          We design websites & products so you can launch faster, 
          convert more demos, and grow online with a pinch of creativity and logic.
        </p>

        {/* ── CTA ── */}
        <FlipButton 
          frontText="Get In Touch" 
          backText="Start Project" 
          className="w-[220px] h-[60px] text-xl"
          onClick={() => window.location.href = '#contact'}
        />

      </div>

      {/* ── Subtle bottom gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  )
}
