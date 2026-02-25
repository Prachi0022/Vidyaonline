import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/navigation-menu";
import { Menu, X } from "lucide-react";
import RevealAnimation from "../animation/RevealAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const servicesData = [
  {
    category: "SOFTWARE DEVELOPMENT",
    items: [
      "Custom Software Development",
      "Mobile App Development",
      "Web Development",
      "Enterprise Application Development",
      "SaaS Solutions",
      "E-commerce Development",
      "UI/UX Design",
      "IT Consulting",
    ],
  },
  {
    category: "BANKING SOLUTIONS",
    items: [
      "Core Banking Systems",
      "Digital Banking Solutions",
      "Mobile Banking Apps",
      "Internet Banking Solutions",
      "Payment Gateway Integration",
      "Loan Management Systems",
      "Risk Management Solutions",
      "Regulatory Compliance Solutions",
      "Facility management services",
    ],
  },
  {
    category: "FACILITY MANAGEMENT",
    items: [
      "Application Support",
      "System Maintenance",
      "IT Helpdesk Services",
      "Technical Support",
      "Managed IT Services",
    ],
  },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex items-center justify-center px-2 sm:px-4">
      <RevealAnimation instant={true} direction="down" offset={-20}>
        <nav
          className={`fixed rounded-full w-[90vw] sm:w-[87vw] text-white z-50 transition-all duration-700 ease-in-out before:pointer-events-none ${
            scrolled
              ? "lg:w-[44rem] bg-black/10 dark:bg-white/10 top-3 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/10 before:absolute before:inset-0 before:rounded-2xl lg:before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent"
              : "lg:w-[52rem] top-6 bg-transparent"
          }  before:pointer-events-none`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4 flex items-center justify-between relative">
            <div className="flex items-center rounded-full overflow-hidden space-x-2 mr-auto">
              <img src="../../../logo.jpeg" alt="Nexmove Solutions" className="h-8 md:h-10 lg:h-12 w-auto" />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? "text-white" : "text-black"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? "text-white" : "text-black"}`} />
              )}
            </button>

            {/* Desktop Menu */}
            <NavigationMenu
              viewport={false}
              className="hidden lg:flex w-[24rem] justify-end max-w-none"
            >
              <NavigationMenuList className="gap-0 justify-end">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className='px-4 py-2 text-sm font-medium transition-all duration-500 rounded-lg relative group '>
                    <span className="relative z-10 text-blue-950 dark:text-white">Home</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className='px-4 py-2 text-sm bg-transparent hover:bg-[#F5F5F5] text-blue-950 dark:text-white  border-0 transition-all duration-500 rounded-lg'
                      
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[min(100vw,72rem)] min-w-[22rem] sm:min-w-[40rem] lg:min-w-[51rem] max-w-none right-96 backdrop-blur-2xl bg-white/95 text-gray-800 dark:text-gray-50 rounded-md border border-gray-200/50 shadow-2xl shadow-blue-500/5 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-blue-50/50 before:to-transparent before:dark:text-gray-50 before:pointer-events-none">
                    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:p-8 mx-auto relative z-10">
                      {servicesData.map((section, idx) => (
                        <div key={idx} className="group">
                          <h3 className="font-bold text-black dark:text-white mb-4 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 shadow-lg shadow-blue-500/50"></span>

                            {section.category}
                          </h3>
                          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-50">
                            {section.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="hover:text-black dark:hover:text-white hover:translate-x-1 cursor-pointer transition-all duration-300 hover:font-medium"
                              >
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
                  <NavigationMenuTrigger
                    className='px-4 py-2 text-sm bg-transparent hover:bg-white/10 border-0 transition-all duration-700 rounded-lg text-blue-950 dark:text-white'
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="backdrop-blur-2xl bg-white/95 text-gray-800 dark:text-gray-50 rounded-md border border-gray-200/50 shadow-2xl shadow-blue-500/5 before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-blue-50/50 before:to-transparent before:dark:text-gray-50 before:pointer-events-none">
                    <div className="p-6 min-w-64 relative z-10">
                      <h3 className="font-bold text-black mb-4 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 shadow-lg shadow-blue-500/50"></span>
                        ABOUT US
                      </h3>
                      <ul className="space-y-3 text-sm text-gray-50">
                        <li className="hover:text-black hover:translate-x-1 cursor-pointer font-medium transition-all duration-300">
                          How we work
                        </li>
                        <li className="hover:text-black dark:hover:text-white hover:translate-x-1 cursor-pointer font-medium transition-all duration-300">
                          Contact Us
                        </li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className='px-4 py-2 text-sm  font-medium transition-all duration-500 rounded-lg relative group text-blue-950 dark:text-white'
                  >
                    <span className="relative z-10">Clients</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className='px-4 py-2 text-sm font-medium transition-all duration-500 rounded-lg relative group text-blue-950 dark:text-white'
                  >
                    <span className="relative z-10">Contact Us</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className='px-4 py-2 text-sm font-medium transition-all duration-500 rounded-lg relative group text-blue-950 dark:text-white'
                  >
                    <span className="relative z-10">Careers</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="absolute overflow-y-scroll top-full left-0 right-0 mt-2 mx-10 lg:hidden backdrop-blur-2xl bg-white/95 text-gray-800 dark:text-gray-900 rounded-2xl border border-gray-200/50 shadow-2xl shadow-blue-500/5 overflow-hidden animate-in slide-in-from-top-2 duration-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-50/50 before:to-transparent  before:pointer-events-none">
                <div className="flex flex-col p-4 space-y-2 relative z-10">
                  <a
                    href="#"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-white hover:translate-x-1 rounded-xl transition-all duration-300"
                  >
                    Home
                  </a>
                  <details className="group">
                    <summary className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-white hover:translate-x-1 rounded-xl transition-all duration-300 cursor-pointer list-none">
                      Services
                    </summary>
                    <div className="pl-4 pt-2 space-y-2 max-h-60 overflow-y-auto pr-2">
                      {servicesData.map((section, idx) => (
                        <div key={idx} className="mb-4">
                          <h4 className="font-bold text-xs text-gray-500 dark:text-gray-700 mb-2 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2 shadow-md shadow-blue-500/50"></span>
                            {section.category}
                          </h4>
                          <ul className="space-y-1">
                            {section.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="text-xs text-gray-600 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 cursor-pointer transition-all duration-300 py-1"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </details>
                  <details className="group">
                    <summary className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 rounded-xl transition-all duration-300 cursor-pointer list-none">
                      About Us
                    </summary>
                    <div className="pl-4 pt-2 space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 transition-all duration-300 py-1"
                      >
                        How we work
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 transition-all duration-300 py-1"
                      >
                        Contact Us
                      </a>
                    </div>
                  </details>
                  <a
                    href="#"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 rounded-xl transition-all duration-300"
                  >
                    Clients
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 rounded-xl transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="px-4 py-3 text-sm text-gray-700 dark:text-gray-900 hover:text-black dark:hover:text-black hover:translate-x-1 rounded-xl transition-all duration-300"
                  >
                    Careers
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </RevealAnimation>
    </div>
  );
}

export default Navbar;
