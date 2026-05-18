import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const STATS = [
  { value: 250, suffix: '+', label: 'Website development and design' },
  { value: 150, suffix: '+', label: 'Developers & Engineers under one roof' },
  { value: 10,  suffix: '+', label: 'Years in Digital Marketing & Branding Business' },
  { value: 99,  suffix: '%', label: 'Client Retention Rate' },
  { value: 250, suffix: '+', label: 'Industry Proven Professionals' },
  { value: 100, suffix: '%', label: 'Ownership Rights' },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ value, suffix, label, started }) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="flex flex-col items-center justify-center py-10 lg:py-14 px-4 text-center">
      <div className="text-[32px] lg:text-[52px] font-extrabold mb-2 text-[#1FC7A6] leading-none tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-[15px] font-medium text-white/50 tracking-tight max-w-[180px] leading-tight">
        {label}
      </p>
    </div>
  )
}

export default function PortfolioStats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#030303] border-y border-white/5 relative z-20">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10 items-stretch">
          {STATS.map((s, i) => (
            <StatItem 
              key={i} 
              {...s} 
              started={started} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
