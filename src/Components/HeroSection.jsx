import React from 'react'
import { ArrowRight, CheckCircle2, TrendingUp, Users, Building2 } from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-gray-950 pt-32 pb-20 px-4">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950 rounded-full border border-blue-100 dark:border-blue-900">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Premier IT Solutions Provider</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Innovate.
                <br />
                <span className="text-blue-600">Integrate.</span>
                <br />
                Elevate.
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Transform your business with cutting-edge technology solutions. We deliver enterprise-grade software, banking systems, and IT services that drive measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>CMMI Level 3</span>
              </div>
            </div>
          </div>

          {/* Right Visual Elements */}
          <div className="relative h-[600px] hidden lg:flex items-center justify-center">
            {/* Stats Cards */}
            <div className="relative w-full max-w-lg">
              {/* Card 1 - Main Stats */}
              <div className="absolute top-0 right-0 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Projects</div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mt-1">150+</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-green-600">
                      <span className="text-sm font-semibold">↑ 23%</span>
                      <span className="text-xs text-gray-500">vs last year</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Clients */}
              <div className="absolute top-36 left-0 w-72 bg-blue-600 rounded-2xl shadow-xl p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
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

              {/* Card 3 - Industries */}
              <div className="absolute bottom-0 right-12 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
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
          </div>
        </div>

        {/* Bottom Stats Bar */}
        
      </div>
    </section>
  )
}

export default HeroSection