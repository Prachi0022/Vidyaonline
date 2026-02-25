import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const caseStudiesData = [
  {
    id: 1,
    title: 'Skiper OSS 001',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 2,
    title: 'NeonSync Pro',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 3,
    title: 'PixelForge Studio',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 4,
    title: 'TaskFlow Sonet',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  },
  {
    id: 5,
    title: 'CloudVibe Bruh',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati id natus dignissimos totam at incidunt ipsum odio consequatur ducimus! Placeat assumenda. Saepe repellendus delectus minima ullam facilis laboriosam facere harum quas laudantium voluptate corrupti reiciendis ipsa, odio repudiandae ab accusantium dicta rerum rem?',
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
  }
];

function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageReady, setIsImageReady] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const loadedImagesRef = useRef(new Set());
  const imageContainerRef = useRef(null);
  const titlesContainerRef = useRef(null);
  const detailsRef = useRef(null);
  const timelineRef = useRef(null);
  const activeStudy = caseStudiesData[activeIndex];

  useEffect(() => {
    if (loadedImagesRef.current.has(activeIndex)) {
      setIsImageReady(true);
      return;
    }

    setIsImageReady(false);
  }, [activeIndex]);

  useEffect(() => {
    caseStudiesData.forEach((study, index) => {
      const image = new Image();
      image.src = study.image;
      image.onload = () => {
        loadedImagesRef.current.add(index);
        if (index === activeIndex) {
          setIsImageReady(true);
        }
      };
    });
  }, [activeIndex]);

  // Track viewport to provide a simplified mobile layout
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia('(max-width: 767px)');
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mq.matches);
    mq.addEventListener('change', handleChange);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Create GSAP timeline once
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Set initial states
    gsap.set(imageContainerRef.current, { transformOrigin: 'center center' });
    gsap.set(titlesContainerRef.current, { transformOrigin: 'right bottom' });

    // Animate image to center
    tl.fromTo(
      imageContainerRef.current,
      {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
      },
      {
        xPercent: -50,
        yPercent: -50,
        left: '51%',
        top: '44%',
        scale: 0.7,
        duration: 0.6,
        ease: 'power3.inOut',
      },
      0
    );

    // Animate titles container to center (from right-bottom to center-top)
    tl.fromTo(
      titlesContainerRef.current,
      {
        xPercent: 0,
        yPercent: 0,
      },
      {
        xPercent: -50,
        yPercent: 0,
        left: '45%',
        right: 'auto',
        top: '0%',
        bottom: 'auto',
        duration: 0.6,
        ease: 'power3.inOut',
        width: '100%',
        padding: '2rem',
        borderRadius: '1rem',
        display: 'flex',
      },
      0
    );

    // Fade out other titles
    const buttons = titlesContainerRef.current.querySelectorAll('button');
    buttons.forEach((btn, idx) => {
      if (idx !== activeIndex) {
        tl.to(
          btn,
          {
            opacity: 0,
            display: 'none',
            pointerEvents: 'none',
            duration: 0.3,
            ease: 'power2.out',
          },
          0
        );
      }
    });

    // Fade in details
    tl.to(
      detailsRef.current,
      {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.5,
        top: '103%',
        ease: 'power2.out',
      },
      0.3
    );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  // Play or reverse timeline based on isExpanded
  useEffect(() => {
    if (timelineRef.current) {
      if (isExpanded) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isExpanded]);

  const handleTitleClick = (index) => {
    setActiveIndex(index);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  // Mobile-first static layout for better responsiveness
  if (isMobile) {
    return (
      <RevealAnimation>
        <section className="relative overflow-hidden">
          <div className="main-container py-10 px-4 sm:px-6 space-y-6">
            {caseStudiesData.map((study) => (
              <div
                key={study.id}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white/90 dark:bg-gray-900/80 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="relative h-48 sm:h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                </div>

                <div className="p-4 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                      {study.title}
                    </h3>
                    <span className="hidden sm:inline-block uppercase text-[10px] tracking-[0.18em] text-gray-500">
                      Case Study
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                    {study.description}
                  </p>

                  <div className="pt-1">
                    <LinkButton
                      href={study.livePreviewUrl}
                      className="bg-gray-900 text-white rounded-xl border border-gray-800 hover:bg-gray-800"
                    >
                      Live Preview
                    </LinkButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealAnimation>
    );
  }

  return (
    <RevealAnimation>
      <section className={`relative transition-all duration-500 ease-in-out ${
        isExpanded 
          ? 'h-[80vh] sm:h-[70vh] md:h-[130vh]' 
          : 'h-[75vh] sm:h-[60vh] md:h-[100vh] lg:h-[100vh]'
      }`}>
        <div className="main-container relative min-h-screen md:min-h-[85vh] lg:min-h-[120vh] py-8 sm:py-12 md:py-0 px-4 sm:px-6 md:px-10">
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[640px]">
          {/* Image Section */}
          <div
            ref={imageContainerRef}
            className="absolute w-[18rem] h-[11rem] sm:w-[22rem] sm:h-[14rem] md:w-[42rem] md:h-[16rem]"
            style={{ left: 0, top: 0 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
              <img
                src={activeStudy.image}
                alt={activeStudy.title}
                className={`h-[10rem] sm:h-[12rem] md:h-[28rem] w-full object-cover transition-opacity duration-500 ${
                  isImageReady ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                decoding="async"
                onLoad={() => {
                  loadedImagesRef.current.add(activeIndex);
                  setIsImageReady(true);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-900/10"></div>
            </div>
            {!isExpanded && (
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-blue-300/30 blur-2xl"></div>
            )}
          </div>

          {/* Titles Section */}
          <div
            ref={titlesContainerRef}
            className="absolute mt-6 sm:mt-8 md:mt-10 mr-4 sm:mr-6 md:mr-6 w-auto max-w-[45%] sm:max-w-[50%] md:max-w-max lg:w-[25rem] lg:max-w-md"
            style={{ right: 0, bottom: 0, textAlign: 'right' }}
          >
            {!isExpanded && (
              <div className="flex absolute -top-6 left-2 md:left-12  items-center justify-end gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-xs  tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-gray-500">
<span className="inline-block uppercase px-3 w-32 lg:w-36 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-widest  border border-blue-100 dark:border-blue-900">
              My Projects
            </span>                <span className="h-px w-12 sm:w-16 md:w-44 bg-gray-300"></span>
              </div>
            )}

            <div className="mt-4 sm:mt-5 md:mt-6 px-1 space-y-1 sm:space-y-1 md:space-y-2">
              {caseStudiesData.map((study, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={study.id}
                    type="button"
                    onClick={() => handleTitleClick(index)}
                    onMouseEnter={() => !isExpanded && setActiveIndex(index)}
                    onFocus={() => !isExpanded && setActiveIndex(index)}
                    className={`block w-full cursor-pointer transition-colors duration-200 whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-5xl ${
                      isExpanded && isActive ? 'md:text-4xl lg:text-7xl font-bold' : 'font-light'
                    } ${
                      isActive
                        ? 'text-gray-900 cursor-default'
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                    aria-current={isActive ? 'true' : 'false'}
                    disabled={isExpanded && !isActive}
                  >
                    {study.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description & Buttons - Show only when expanded */}
          <div
            ref={detailsRef}
            className="absolute left-1/2 md:top-1/2 top-[30%] -translate-1/4 -translate-x-1/2 md:-translate-y-1/2  w-full max-w-2xl text-center pointer-events-none z-50"
            style={{ opacity: 0 }}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={handleClose}
              className="absolute -top-[19rem] right-4 sm:right-6 md:-top-[29rem] md:right-1 p-2 cursor-pointer text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 bg-gray-50 transition-all duration-200 pointer-events-auto"
              aria-label="Close"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>

            {/* Description */}
            <p className="text-gray-600 text-left pl-6 sm:pl-10 md:pl-16 text-sm sm:text-base leading-tight mb-6 sm:mb-8 px-4 sm:px-6">
              {activeStudy.description}
            </p>

            {/* Call to action */}
            <p className="text-gray-500 text-left pl-6 sm:pl-10 md:pl-16 text-xs sm:text-sm mb-6 sm:mb-8 px-4 sm:px-6">
              Want to create something cool together? Let's do it!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 justify-start pl-6 sm:pl-10 md:pl-16 px-4 sm:px-6">
              <LinkButton
                href={activeStudy.livePreviewUrl}
                className="bg-gray-100 text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors duration-200 pointer-events-auto"
              >
                <span className="font-medium">Live Preview</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
    </RevealAnimation>
  );
}

export default CaseStudies;