import {   HeroSection,Expertise, CaseStudies, ExperienceSection,TestimonialsOverview, AIAgent, Steps, Integration, FAQ, CTA, Sectors } from "../Components";
import React, { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Home() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return undefined

    gsap.registerPlugin(ScrollTrigger)

    const hero = document.getElementById('hero-section')
    const steps = document.getElementById('steps-section')

    if (!hero || !steps) return undefined

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: () => `+=${steps.offsetHeight}`,
      pin: true,
      pinSpacing: false,
      anticipatePin: 1,
    })

    return () => {
      trigger.kill()
    }
  }, [])

  return (
    <div>       
        <HeroSection />
        <Steps />
        <AIAgent />
        <ExperienceSection />
        <CaseStudies />
        <Integration />
        <Expertise />
        <Sectors />
        <CTA />
        <TestimonialsOverview />
        <FAQ />
    </div>
  )
}

export default Home