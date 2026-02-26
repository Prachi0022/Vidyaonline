import React, { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, TrendingUp, Users, Building2 } from 'lucide-react'
import RevealAnimation from '../animation/RevealAnimation'
import SpotLight from '.././ui/SpotLight'
import LinkButton from '../ui/button/LinkButton'

const LazySpline = lazy(() => import('@splinetool/react-spline'))
function HeroSection() {
  const [showSpline, setShowSpline] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSpline(entry.isIntersecting && entry.intersectionRatio >= 0.35)
      },
      { threshold: [0, 0.35, 1], rootMargin: '0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const handleChange = (e) => setIsDesktop(e.matches)
    handleChange(media)
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="relative min-h-[100vh] md:min-h-[92vh] lg:min-h-screen w-full overflow-hidden pt-24 sm:pt-32 pb-12 sm:pb-20 px-4"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="h-full w-full">
          {showSpline && isDesktop ? (
            <Suspense fallback={<div className="h-full w-full bg-gray-100 dark:bg-gray-900 animate-pulse" />}>
              <LazySpline scene="/scene.splinecode" />
            </Suspense>
          ) : (
            <div className="h-full w-full bg-gray-100 dark:bg-gray-900" />
          )}
        </div>
        <div className="absolute inset-0 " />
      </div>
      {/* Subtle Background Pattern */}

      <div className="container mx-auto max-w-7xl px-0 sm:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
      <SpotLight bgcolor={"bg-blue-500/80"} height={"h-64"} width={"w-64"} blur={"blur-[150px]"} left={"left-[120%]"} top={"top-[50%]"} translateX={"translate-x-[-50%]"} translateY={"translate-y-[-50%]"}/>
          <div className="space-y-8">
            {/* Badge */}
            <RevealAnimation direction="down" delay={0.2}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full border border-blue-100 dark:border-blue-900">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-700 uppercase dark:text-blue-300">Premier IT Solutions Provider</span>
              </div>
            </RevealAnimation>

            {/* Main Heading */}
            <RevealAnimation direction="up" delay={0.4} offset={100}>
              <div className="space-y-4">
                <h1 className="text-4xl uppercase sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl max-w-full sm:max-w-md lg:max-w-[25rem] font-bold leading-tight sm:leading-[0.9] lg:leading-[1] text-gray-900 dark:text-white">
                  Innovate
                  <br />
                  <span className="text-blue-600">Integrate</span>
                  <br />
                  Elevate
                </h1>
              </div>
            </RevealAnimation>

            {/* Description */}
            <RevealAnimation direction="up" delay={0.5} offset={60}>
              <p className="text-base sm:text-lg md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-full sm:max-w-xl lg:max-w-lg">
                Transform your business with cutting-edge technology solutions. We deliver enterprise-grade software, banking systems, and IT services that drive measurable results.
              </p>
            </RevealAnimation>

            {/* CTA Buttons */}
            <RevealAnimation direction="up" delay={0.6} offset={60}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <LinkButton
                  href="#"
                  className="bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                  <span className="flex items-center gap-2 font-semibold">
                    Get Started
                  </span>
                </LinkButton>
                <LinkButton
                  href="#"
                  className="bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                  <span className="font-semibold">View Our Work</span>
                </LinkButton>
              </div>
            </RevealAnimation>

            {/* Trust Indicators */}
            <RevealAnimation direction="up" delay={0.7} offset={60}>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <span>CMMI Level 3</span>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Visual Elements */}
          {/* <RevealAnimation direction="right" delay={0.3} offset={100}>
            <div className="relative h-[39rem] hidden lg:flex items-center justify-center">
              
              <div className="relative w-full max-w-lg">
              
              <div className="absolute top-0 right-0 w-72 bg-white/60 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/10 dark:bg-gray-900 rounded-2xl  dark:border-gray-800 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-400">Active Projects</div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mt-1">150+</div>
                    </div>
                    <div className="w-12 h-12 dark:bg-blue-950 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-green-700">
                      <span className="text-sm font-semibold">↑ 23%</span>
                      <span className="text-xs text-gray-700">vs last year</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              
              <div className="absolute top-36 left-14 w-64 bg-blue-600/80 rounded-2xl  backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/10 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-transparentrounded-xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-100">Trusted Clients</div>
                    <div className="text-3xl font-bold mt-1">50+</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-sm text-blue-100">Government & Enterprise Organizations</div>
                </div>
              </div>

              
              <div className="absolute bottom-0 -right-40 w-60 bg-white/50 dark:bg-gray-900 rounded-2xl  backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/10 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="text-base font-semibold text-gray-900 dark:text-white">Industries Served</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Banking & Finance</span>
                    <span className="text-gray-900 dark:text-white font-medium">35%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Government</span>
                    <span className="text-gray-900 dark:text-white font-medium">45%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Enterprise</span>
                    <span className="text-gray-900 dark:text-white font-medium">20%</span>
                  </div>
                </div>
              </div>
            </div>
            </RevealAnimation> */}
        </div>

        {/* Bottom Stats Bar */}
        
      </div>
    </section>
  )
}

export default HeroSection