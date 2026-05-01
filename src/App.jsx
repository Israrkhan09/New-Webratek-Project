import { useEffect, useState } from 'react'
import Navbar        from './components/Navbar'
import Hero          from './components/Hero'
import Stats         from './components/Stats'
import BusinessUnits from './components/BusinessUnits'
import BarkSection   from './components/BarkSection'
import GoalSection   from './components/GoalSection'
import Reviews       from './components/Reviews'
import Industries    from './components/Industries'
import CTASection    from './components/CTASection'
import Footer        from './components/Footer'
import Loader        from './components/Loader'
import CustomCursor  from './components/CustomCursor'
import ComponentsSection from './components/ComponentsSection'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Loader & Scroll-reveal observer
  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const loaderTimer = setTimeout(() => {
      document.body.style.overflow = 'auto';
      setIsLoading(false);
    }, 2800);

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
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 bg-[#0a0a0a]">
          <Stats />
          <BusinessUnits />
          <ComponentsSection />
          <BarkSection />
          <GoalSection />
          <Reviews />
          <Industries />
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
