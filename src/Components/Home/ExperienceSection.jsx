import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import RevealAnimation from '../animation/RevealAnimation';

const ExperienceSection = () => {
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);
  const tweenRef = useRef(null);

  const experienceCards = [
    {
      id: 1,
      number: '15+',
      label: 'GLOBAL RECOGNITIONS\n& AWARDS',
      description:
        "acknowledging Appinventiv's engineering excellence, growth, and enterprise delivery capability",
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900&h=900&fit=crop',
      alt: 'Global Recognitions and Awards',
    },
    {
      id: 2,
      number: '10+',
      label: 'YEARS OF\nEXPERIENCE',
      description:
        'as an enterprise technology consulting and digital engineering services firm',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=900&h=900&fit=crop',
      alt: 'Years of Experience',
    },
    {
      id: 3,
      number: '500+',
      label: 'SUCCESSFUL\nPROJECTS',
      description:
        'delivering innovative solutions across multiple industries and global markets',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=900&fit=crop',
      alt: 'Successful Projects',
    },
    {
      id: 4,
      number: '200+',
      label: 'TEAM\nEXPERTS',
      description:
        'highly skilled professionals dedicated to transforming ideas into reality',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=900&fit=crop',
      alt: 'Team Experts',
    },
    {
      id: 5,
      number: '98%',
      label: 'CLIENT\nSATISFACTION',
      description:
        'committed to exceeding expectations and delivering measurable results',
      color: 'from-gray-900 to-black',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=900&h=900&fit=crop',
      alt: 'Client Satisfaction',
    },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Get the width of one card set
    const cardWidth = content.offsetWidth / (experienceCards.length * 2);
    const totalWidth = content.offsetWidth;

    // Create a continuous loop animation
    const tween = gsap.to(content, {
      x: -totalWidth / 2,
      duration: 40,
      ease: 'none',
      repeat: -1,
      onRepeat: () => {
        // Reset position seamlessly
        gsap.set(content, { x: 0 });
      },
    });

    // Store tween reference for pause/resume
    tweenRef.current = tween;

    // Add mouse enter/leave event listeners
    const handleMouseEnter = () => {
      if (tweenRef.current) {
        tweenRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (tweenRef.current) {
        tweenRef.current.resume();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      tween.kill();
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [experienceCards.length]);

  return (
    <section className="relative  overflow-hidden h-[53vh] md:h-[70vh] pt-14 flex flex-col items-center gap-6 py-8 md:py-12 lg:py-16" style={{ minHeight: 'auto' }}>
      <span className="inline-block absolute left-4 md:left-32 top-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-xs font-semibold text-blue-700 dark:text-blue-200 tracking-widest uppercase border border-blue-200 dark:border-amber-900">
        Experience Highlights
      </span>
      {/* Scrolling Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-hidden"
      >
          <div
            ref={contentRef}
            className="flex gap-2 sm:gap-3 md:gap-4 w-fit px-4 sm:px-6"
            style={{ willChange: 'transform' }}
          >
            {/* Original Cards */}
            {experienceCards.map((card) => (
              <ExperienceCard key={`original-${card.id}`} card={card} />
            ))}
            {/* Duplicate Cards for seamless loop */}
            {experienceCards.map((card) => (
              <ExperienceCard key={`duplicate-${card.id}`} card={card} />
            ))}
          </div>
        </div>
      </section>
  );
};

const ExperienceCard = ({ card }) => {
  return (
    <div
      className="flex-shrink-0 w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[380px] md:h-[450px] lg:w-[420px] lg:h-[500px] overflow-hidden rounded-2xl group cursor-pointer transition-all duration-500 hover:shadow-2xl"
      style={{
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Image Section - Full Container */}
      <div className="relative w-full h-full overflow-hidden bg-black">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
        />
        
        {/* Gradient Overlay - Always visible but changes on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
        
        {/* Badge - Top Left */}
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20">
          <div className="backdrop-blur-md bg-black/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl inline-flex items-center justify-center">
            <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              {card.number}
            </span>
          </div>
        </div>

        {/* Content Overlay - Bottom section, visible on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight whitespace-pre-line">
              {card.label}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {card.description}
            </p>
          </div>
          
          {/* Bottom Border Accent */}
          <div
            className="h-0.5 rounded-full mt-3 sm:mt-4 transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, transparent 100%)',
              opacity: 0.7,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
