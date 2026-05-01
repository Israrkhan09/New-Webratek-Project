import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 1500, suffix: '+', label: 'Projects Ordered'   },
  { value: 900,  suffix: '+', label: 'Happy Clients'      },
  { value: 1400, suffix: '+', label: 'Projects Completed' },
  { value: 500,  suffix: '+', label: 'Reviews'            },
]

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatItem({ value, suffix, label, started }) {
  const count = useCountUp(value, 2200, started)
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="text-4xl lg:text-5xl font-extrabold text-[#F5F5F5] mb-2">
        {count}{suffix}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#F5F5F5]/60">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative z-10 bg-black border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/15">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  )
}
