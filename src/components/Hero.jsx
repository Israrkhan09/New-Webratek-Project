import { useNavigate } from 'react-router-dom'
import heroImage from '../assets/logos/header-logo/Photorealistic_3D_render_of_a_202605141611.jpeg'
import ScramblePhrases from './ScramblePhrases'
import FlipButton from './FlipButton'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section id="home" className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-9 z-0">
      {/* ── Background Image ── */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ── Dark Overlay ── */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center animate-fade-in-up pt-24 md:pt-32">

        {/* ── Heading ── */}
        <h1
          className="flex flex-col items-center text-[52px] sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
          style={{ color: '#F5F5F5' }}
        >
          <span>Delivering Exceptional</span>
          <ScramblePhrases />
          <span>For Businesses of All Sizes</span>
        </h1>

        {/* ── Subheading ── */}
        <p
          className="text-[17px] max-w-2xl mb-12 leading-relaxed"
          style={{ color: '#F5F5F5', opacity: 0.85 }}
        >
          At Webratek, we craft high-performance digital experiences that help you launch faster, 
          convert more, and scale your brand with the perfect fusion of creativity and logic.
        </p>

        {/* ── CTA ── */}
        <FlipButton
          frontText="Get In Touch"
          backText="Start Project"
          className="w-[220px] h-[60px] text-xl"
          onClick={() => navigate('/contact-us')}
        />

      </div>

      {/* ── Subtle bottom gradient ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  )
}
