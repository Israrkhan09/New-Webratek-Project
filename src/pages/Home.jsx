import React from 'react'
import Hero          from '../components/Hero'
import Stats         from '../components/Stats'
import BusinessUnits from '../components/BusinessUnits'
import WorkflowPipeline from '../components/WorkflowPipeline'
import BarkSection   from '../components/BarkSection'
import GoalSection   from '../components/GoalSection'
import Reviews       from '../components/Reviews'
import Industries    from '../components/Industries'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="relative z-10 overflow-x-hidden">
        <Stats />
        <BusinessUnits />
        <WorkflowPipeline />
        <BarkSection />
        <GoalSection />
        <Reviews />
        <Industries />
      </div>
    </main>
  )
}
