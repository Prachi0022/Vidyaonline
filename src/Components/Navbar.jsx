import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu'
import { Menu, X } from 'lucide-react'

const servicesData = [
  {
    category: 'SOFTWARE DEVELOPMENT',
    items: [
      'Custom Software Development',
      'Mobile App Development',
      'Web Development',
      'Enterprise Application Development',
      'SaaS Solutions',
      'E-commerce Development',
      'UI/UX Design',
      'IT Consulting',
    ],
  },
  {
    category: 'BANKING SOLUTIONS',
    items: [
      'Core Banking Systems',
      'Digital Banking Solutions',
      'Mobile Banking Apps',
      'Internet Banking Solutions',
      'Payment Gateway Integration',
      'Loan Management Systems',
      'Risk Management Solutions',
      'Regulatory Compliance Solutions',
      'Facility management services',
    ],
  },
  {
    category: 'FACILITY MANAGEMENT',
    items: [
      'Application Support',
      'System Maintenance',
      'IT Helpdesk Services',
      'Technical Support',
      'Managed IT Services',
    ],
  },
]

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="w-full flex items-center justify-center px-4 sm:mx-5">
<nav className="w-full lg:w-[44rem] backdrop-blur-xl bg-slate-900/70 fixed rounded-2xl lg:rounded-3xl top-4 lg:top-6 text-white border border-white/10 shadow-2xl shadow-black/20 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 mr-auto">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-sm lg:text-lg text-white">
            VOL
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Menu */}
        <NavigationMenu viewport={false} className="hidden lg:flex w-[24rem] justify-end max-w-none">
            <NavigationMenuList className="gap-0 justify-end">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm text-white hover:bg-white/90 font-medium transition-colors rounded-md"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm bg-transparent hover:bg-white/10 text-white border-0">
                Services
              </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[min(100vw,72rem)] min-w-[22rem] sm:min-w-[40rem] lg:min-w-[44rem] max-w-none right-96 backdrop-blur-xl bg-white/95 text-gray-800 rounded-xl border border-gray-200/50 shadow-2xl">
                <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-8 mx-auto">
                  {servicesData.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="font-bold text-black mb-4 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        {section.category}
                      </h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="hover:text-black cursor-pointer transition-colors">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm bg-transparent hover:bg-white/10 text-white border-0">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="backdrop-blur-xl bg-white/95 text-gray-800 rounded-xl border border-gray-200/50 shadow-2xl">
                <div className="p-6 min-w-64">
                  <h3 className="font-bold text-black mb-4">ABOUT US</h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="hover:text-black cursor-pointer font-medium transition-colors">
                      How we work
                    </li>
                    <li className="hover:text-black cursor-pointer font-medium transition-colors">
                      Contact Us
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm text-white hover:bg-white/90 font-medium transition-colors rounded-md"
              >
                Clients
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm text-white  hover:bg-white/90 font-medium transition-colors rounded-md"
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="px-4 py-2 text-sm text-white  hover:bg-white/90 font-medium transition-colors rounded-md"
              >
                Careers
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-10 lg:hidden backdrop-blur-xl bg-slate-900/95 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex flex-col p-4 space-y-2">
              <a href="#" className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors">
                Home
              </a>
              <details className="group">
                <summary className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer list-none">
                  Services
                </summary>
                <div className="pl-4 pt-2 space-y-2">
                  {servicesData.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="font-bold text-xs text-gray-300 mb-2">{section.category}</h4>
                      <ul className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs text-gray-400 hover:text-white cursor-pointer transition-colors py-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer list-none">
                  About Us
                </summary>
                <div className="pl-4 pt-2 space-y-2">
                  <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">
                    How we work
                  </a>
                  <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors py-1">
                    Contact Us
                  </a>
                </div>
              </details>
              <a href="#" className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors">
                Clients
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors">
                Contact Us
              </a>
              <a href="#" className="px-4 py-3 text-sm text-white hover:bg-white/10 rounded-md transition-colors">
                Careers
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>

    </div>
  )
}

export default Navbar