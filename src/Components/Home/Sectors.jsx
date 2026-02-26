import React, { useRef, useState } from 'react'
import RevealAnimation from '../animation/RevealAnimation'
import LinkButton from '../ui/button/LinkButton'

function Sectors() {
  const featuredImgRef = useRef(null);
  const featuredImageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleSectorMouseEnter = (imageUrl) => {
    setIsVisible(true);
    setCurrentImage(imageUrl);
  };

  const handleSectorsMouseLeave = () => {
    setIsVisible(false);
  };
  const sectors = [
    {
      id: 1,
      title: "Healthcare & Medical",
      organization: "Healthcare",
      category: "Digital Solutions",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 2,
      title: "Education & E-Learning",
      organization: "Education",
      category: "Learning Platforms",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
    },
    {
      id: 3,
      title: "Retail & E-Commerce",
      organization: "Retail",
      category: "Digital Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
    },
    {
      id: 4,
      title: "Finance & Banking",
      organization: "Financial Services",
      category: "FinTech Solutions",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
    },
    {
      id: 5,
      title: "Manufacturing & Industry",
      organization: "Manufacturing",
      category: "Industrial Tech",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      id: 6,
      title: "Hospitality & Tourism",
      organization: "Hospitality",
      category: "Travel Tech",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      id: 7,
      title: "Real Estate & Construction",
      organization: "Real Estate",
      category: "PropTech",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 8,
      title: "Transportation & Logistics",
      organization: "Logistics",
      category: "Supply Chain",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    }
  ];

  return (
    <div className="bg-transparent  relative">
      <div 
        ref={featuredImgRef}
        id="featuredImg" 
        className={`w-[20vw] min-w-[200px] h-[30vh] min-h-[250px] rounded-3xl fixed z-40 top-[21%] left-1/2 -translate-x-1/2 object-cover overflow-hidden transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        {currentImage && (
          <img 
            ref={featuredImageRef}
            src={currentImage}
            alt="Sector preview"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="w-full py-20 ">
        <RevealAnimation direction="up" offset={80} duration={0.8}>
          <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-24 items-start md:items-center px-4 md:px-[3vw] gap-6">
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center gap-1.5 w-48 lg:w-52 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-xs font-semibold text-purple-700 dark:text-purple-200 tracking-widest uppercase border border-purple-100 dark:border-purple-900">
                <div className="w-2 h-2 bg-purple-200 rounded-full animate-pulse" />
                Industries We Serve
              </span>
              <h2 className="text-4xl uppercase sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-10 sm:leading-14 md:leading-16">
                Solving Complex Challenges<br />
                Across <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">Every Major Sector</span>
              </h2>
            </div>
            
          </div>
        </RevealAnimation>

        {/* Desktop List View */}
        <RevealAnimation direction="up" offset={80} duration={0.8}>
          <div 
            id="sectors" 
            className="w-full cursor-pointer hidden md:block"
            onMouseLeave={handleSectorsMouseLeave}
          >
            {sectors.map((sector, index) => (
              <RevealAnimation 
                key={sector.id}
                direction="up" 
                offset={60} 
                duration={0.6}
                delay={index * 0.1}
              >
                <div 
                  data-image={sector.image} 
                  className="group sector relative border-b border-white/50 w-full h-36 overflow-hidden"
                  onMouseEnter={() => handleSectorMouseEnter(sector.image)}
                >
                  <div className="h-full w-full absolute -top-full left-0 bg-blue-600 transition-all duration-600 ease-in-out group-hover:top-0"></div>
                  <div className="h-full w-full relative flex justify-between items-center px-[3vw]">
                    <h1 className="font-bold text-5xl">{sector.title}</h1>
                    <div className={`${sector.organization.length > 15 ? 'w-72' : 'w-40'} text-right`}>
                      <h1 className="uppercase text-sm md:text-base">{sector.organization}</h1>
                      <div className="text-stone-400 font-light text-xs md:text-sm">{sector.category}</div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </RevealAnimation>

        {/* Mobile Card View */}
        <div className="w-full md:hidden mt-4 sm:mt-9">
          {sectors.map((sector, index) => (
            <RevealAnimation 
              key={sector.id}
              direction="up" 
              offset={60} 
              duration={0.6}
              delay={index * 0.1}
            >
              <div className="relative mt-4 sm:mt-7 w-full overflow-hidden px-4 sm:px-6">
                {/* Image Container */}
                <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl h-64 sm:h-80 bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="text-white">
                      <p className="text-xs sm:text-sm font-light">{sector.category}</p>
                    </div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="w-full mt-3 sm:mt-4 relative flex flex-col justify-between items-start">
                  <h1 className="font-bold text-lg sm:text-2xl md:text-3xl text-gray-900 dark:text-white leading-snug">{sector.title}</h1>
                  <div className="mt-2 sm:mt-3 text-left">
                    <h2 className="uppercase text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{sector.organization}</h2>
                    <p className="text-stone-500 dark:text-stone-400 font-light text-xs sm:text-sm">{sector.category}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-10">
          <LinkButton 
            href="/industries" 
            ariaLabel="View all industries"
            className="bg-black border border-white/40 py-2 px-4 text-white hover:bg-gray-950"
          >
            Check All Industries
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default Sectors