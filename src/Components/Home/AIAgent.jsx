import RevealAnimation from '../animation/RevealAnimation';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Data structure for how it works steps
const howItWorksData = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Cryptocurrency marketplace',
    description: 'A cryptocurrency marketplace is a digital platform where users can buy',
    delay: '0.5',
  },
  {
    id: 2,
    icon: 'ns-shape-5',
    title: 'Buy digital currency',
    description: 'Buying digital currency has become an increasingly popular way for individuals and',
    delay: '0.6',
  },
  {
    id: 3,
    icon: 'ns-shape-35',
    title: 'Generate income',
    description: 'Generating income is the process of earning money through various means such as',
    delay: '0.7',
  },
];

const AIAgent = () => {
  const boxRef = useRef(null);

    useGSAP(() => {
      if (boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { scale: 0.9 },
          {
            scale: 1.2,
            duration: 0.6,
            scrollTrigger: {
              trigger: boxRef.current,
              start: 'top 80%',
              end: 'top 60%',
              scrub: 1,
            },
          }
        );
      }

    }, []);
  return (
    <section className="pt-8 pb-8 sm:pt-12 mt-6 md:mt-0 sm:pb-12 md:pt-16 md:pb-16 w-[86%] sm:w-[95%] h-[60vh] md:h-[73vh]  md:w-[80%] lg:w-[72vw] mx-auto lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div ref={boxRef} className="bg-black dark:bg-background-8 relative -z-0 mx-4 sm:mx-5 max-w-[1290px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl py-10 sm:py-16 md:py-20 lg:py-28 text-center lg:py-28 xl:mx-auto 2xl:max-w-[1440px]">
          {/* background image  */}

          <RevealAnimation delay={0.3} duration={2} useSpring={true} direction="right" offset={50}>
            <figure className="pointer-events-none absolute -top-[37%] -right-[40%] max-w-[530px] rotate-90 select-none max-[400px]:-top-[20%] max-[400px]:-right-[32%] sm:-right-[20%] md:-right-[28%] md:rotate-[108deg] lg:-right-[20%] xl:-right-[12%]">
              <img src={'../../../ns-img-508.png'} alt="how-to-work" className="h-full w-full object-cover" />
            </figure>
          </RevealAnimation>
          {/* Gradient  */}
          <div className="absolute -top-[22%] left-[28%] z-10 h-72 w-52 rotate-[50deg] bg-white/40 blur-[85px]" />
          <div className="absolute -top-[22%] right-[8%] z-10 h-72 w-52 -rotate-45 bg-white/30 blur-[85px]" />
          {/* Getting Started */}

          <RevealAnimation delay={0.3}>
            <span className="badge badge-blur text-3xl sm:text-[5vw] md:text-[4vw] lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase mb-2 sm:mb-3 md:mb-4 lg:mb-5">How it works</span>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <h2 className="mb-8 sm:mb-12 md:mb-16 lg:mb-[70px] text-center font-normal text-white/40 text-sm sm:text-base md:text-lg max-[400px]:mx-auto max-[400px]:!max-w-[250px] max-md:mx-auto max-md:max-w-[300px]">
              Refer to the easy installation manual.
            </h2>
          </RevealAnimation>

          {/* Content */}
           <div className="mx-auto flex items-start justify-start gap-x-3 sm:gap-x-5 md:gap-x-7 lg:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-10 max-[400px]:px-4 sm:px-5 max-xl:px-6 max-md:flex-wrap max-md:items-center max-md:justify-center md:items-center md:justify-center">
            {howItWorksData.map((step) => (
                 <RevealAnimation key={step.id} duration={0.5} delay={Number(step.delay)}>
                   <div data-card className="text-left">
                  <span className={`${step.icon} text-[36px] sm:text-[44px] md:text-[48px] lg:text-[52px] text-white`} />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-heading-5 mt-2 sm:mt-3 md:mt-4 mb-1.5 sm:mb-2 font-normal text-white">{step.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-tagline-1 text-accent/60 max-w-[375px]">{step.description}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default AIAgent;
