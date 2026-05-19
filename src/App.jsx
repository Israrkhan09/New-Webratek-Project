import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar        from './components/Navbar'
import Footer        from './components/Footer'
import Loader        from './components/Loader'
import CustomCursor  from './components/CustomCursor'
import Home          from './pages/Home'
import Portfolio     from './pages/Portfolio'
import ReviewsPage   from './pages/ReviewsPage'
import ServicesPage  from './pages/ServicesPage'
import WebDevelopment from './pages/WebDevelopment'
import DigitalMarketing from './pages/DigitalMarketing'
import LogoDesigning from './pages/LogoDesigning'
import AppDevelopment from './pages/AppDevelopment'
import ContactPage from './pages/ContactPage'

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Loader & Scroll-reveal observer
  useEffect(() => {
    // Prevent browser from automatically restoring scroll position on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Initialize Lenis for smooth "water-like" scrolling
    const lenis = new Lenis({
      lerp: 0.08, // Adjust for water-like smoothness (lower is smoother/more delayed)
      smoothWheel: true,
    });

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker for requestAnimationFrame to ensure perfect sync
    function updateLenis(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const loaderTimer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      setIsLoading(false);
    }, 2000);

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    
    return () => {
      clearTimeout(loaderTimer);
      observer.disconnect();
      // Cleanup Lenis
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <Loader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/logo-designing" element={<LogoDesigning />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
