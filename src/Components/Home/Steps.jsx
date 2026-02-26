import RevealAnimation from '../animation/RevealAnimation';
import { cn } from '../../utils/cn';
import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import StepCard from './StepCard';

const stepsData = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Strategic Technology Consulting',
    description:
      'From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.',
    badgeLabel: 'Consulting',
    mainImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=600&fit=crop',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Digital Product Development & Engineering',
    description:
      'We handle the full lifecycle of software development—from cloud-native applications to complex ERP systems.',
    badgeLabel: 'Product Engineering',
    mainImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=600&fit=crop',
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'AI, Data and Analytics Solutions',
    description:
      'We integrate advanced AI to automate operations, predict trends, and personalize customer experiences at scale.',
    badgeLabel: 'AI & Data',
    mainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop',
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Cloud Operations and Cybersecurity',
    description:
      'We engineer cloud-native environments rooted in Zero Trust principles so your infrastructure is scalable and secure.',
    badgeLabel: 'Cloud & Security',
    mainImage: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=600&fit=crop',
  },
];

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepCardRefs = useRef([]);
  const lenis = useLenis();

  useEffect(() => {
    const stepCards = stepCardRefs.current.filter((ref) => ref !== null);

    if (stepCards.length === 0) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '-400px 0px -50% 0px',
      threshold: [0, 0.1, 0.5, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const stepNumber = Number.parseInt(entry.target.dataset.step || '1', 10);
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleStepClick = (stepNumber) => {
    const targetCard = document.getElementById(`step-${stepNumber}`);

    if (targetCard) {
      // Check if Lenis is available (for smooth scrolling)
      if (lenis) {
        lenis.scrollTo(`#step-${stepNumber}`, {
          offset: -156, // Account for sticky header offset
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        // Fallback for when Lenis is not available (mobile devices)
        const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - 156;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
      setActiveStep(stepNumber);
    }
  };

  return (
    <section
      id="steps-section"
      className="relative z-10 py-[80px] md:py-[120px] lg:py-[156px] bg-white dark:bg-black md:min-h-[90vh]"
    >
      <div className="main-container px-4 md:px-10">
        <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
          {/* heading  */}
          <RevealAnimation delay={0.1}>
            
            <h2 className="md:top-[120px] lg:top-[156px] font-bold max-w-3xl uppercase text-center text-4xl leading-10 sm:leading-[3.9rem] md:leading-[3.8rem] lg:leading-[4.8rem] md:text-5xl md:sticky lg:text-6xl md:text-left text-gray-900 dark:text-white">
             <span className="px-3 flex items-center justify-center w-40 gap-1 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-widest uppercase border border-blue-100 dark:border-blue-900">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                Our Services
              </span> <br />
              Beyond Development We Deliver <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Transformation</span>
            </h2>
          </RevealAnimation>

          {/* bar  */}
          <RevealAnimation delay={0.2}>
            <div className="bg-gradient-to-b from-blue-500 to-blue-600 sticky md:top-[120px] lg:top-[156px] hidden md:block h-[420px] md:h-[520px] lg:h-[564px] w-px" />
          </RevealAnimation>

          {/* cards  */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-10 md:space-y-14 lg:space-y-18 xl:space-y-18">
              {stepsData.map((step) => (
                <StepCard
                  key={step.id}
                  step={step}
                  cardRef={(el) => {
                    stepCardRefs.current[step.stepNumber - 1] = el;
                  }}
                />
              ))}
            </div>
          </RevealAnimation>

          {/* cards number  */}
          <RevealAnimation delay={0.3}>
            <div className="top-[312px] ml-10 hidden md:flex md:flex-row md:flex-wrap md:gap-3 md:top-[120px] md:sticky lg:top-[156px] lg:ml-0 lg:flex lg:flex-col lg:gap-y-2">
              {stepsData.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.stepNumber)}
                  className={cn(
                    'step-number text-heading-6 flex h-15 w-[44px] cursor-pointer items-center justify-center rounded-full px-4 py-[15px] font-normal transition-colors duration-300 ease-in-out',
                    activeStep === step.stepNumber ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-400',
                  )}
                  data-step-number={step.stepNumber}
                  aria-label={`Go to step ${step.stepNumber}`}>
                  {step.stepNumber}
                </button>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Steps;
