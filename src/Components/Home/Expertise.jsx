import React, { useEffect, useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { Brain, Sparkles, Bot, Network, Eye, Cloud, BarChart3, Shield, Cpu, Glasses, Link2 } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { useTheme } from '@/context/ThemeContext';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const expertiseData = [
  {
    id: 1,
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'AI only creates value when it fits into how an organization actually works. We help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale.',
    size: 'normal',
    theme: 'light',
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Gen AI is most useful when it becomes part of everyday work. We integrate it into internal knowledge systems, customer interactions, and operational tools, with the controls and governance enterprises expect.',
    size: 'tall',
    theme: 'light',
  },
  {
    id: 3,
    icon: Bot,
    title: 'Agentic AI',
    description: 'We work with organizations exploring autonomous systems, helping them introduce AI agents that can take action across processes while remaining transparent, supervised, and accountable.',
    size: 'wide-tall',
    theme: 'dark',
  },
  {
    id: 4,
    icon: Network,
    title: 'Machine Learning',
    description: 'ML in enterprise environments is less about experimentation and more about reliability. We develop models that adapt over time and continue to perform as data, demand, and conditions change.',
    size: 'normal',
    theme: 'light',
  },
  {
    id: 5,
    icon: Eye,
    title: 'Computer Vision',
    description: 'In environments where speed and accuracy matter, vision-based systems can remove friction. We apply computer vision to automate inspection, monitoring, and visual analysis across real operational settings.',
    size: 'wide',
    theme: 'blue',
  },
  {
    id: 6,
    icon: Cloud,
    title: 'Cloud',
    description: 'Cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.',
    size: 'normal',
    theme: 'light',
  },
  {
    id: 7,
    icon: BarChart3,
    title: 'Data Science and Analytics',
    description: 'Data only becomes useful when teams can rely on it. We design data foundations that support analytics and insight across functions, without adding complexity or dependency.',
    size: 'tall',
    theme: 'light',
  },
  {
    id: 8,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security is treated as a design constraint, not a checklist item. Our systems account for governance, compliance, and risk from the earliest architectural decisions.',
    size: 'normal',
    theme: 'dark',
  },
  {
    id: 9,
    icon: Cpu,
    title: 'IoT',
    description: 'Connected devices generate value only when their data is usable. We help organizations bring physical systems into their digital landscape, improving visibility and control across operations.',
    size: 'normal',
    theme: 'light',
  },
  {
    id: 10,
    icon: Glasses,
    title: 'AR/VR',
    description: 'Immersive technologies work best when they solve specific problems. We use AR and VR to support training, simulation, and remote collaboration in enterprise environments.',
    size: 'wide',
    theme: 'light',
  },
  {
    id: 11,
    icon: Link2,
    title: 'Blockchain',
    description: 'Distributed systems are useful where trust must be shared. We apply blockchain selectively, focusing on traceability, data integrity, and controlled exchange in multi-party ecosystems.',
    size: 'normal',
    theme: 'light',
  },
];

function Expertise() {
  const sectionRef = useRef(null);
  const { isDarkMode, setIsDarkMode } = useTheme();

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Create scroll trigger for expertise section
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'top 1%',
      onEnter: () => {
        gsap.to('body', {
          backgroundColor: '#000000',
          color: '#ffffff',
          duration: 0.6,
          ease: 'power2.inOut',
        });
        setIsDarkMode(true);
      },
      onEnterBack: () => {
        gsap.to('body', {
          backgroundColor: '#ffffff',
          color: '#000000',
          duration: 0.8,
          ease: 'power2.inOut',
        });
        setIsDarkMode(false);
      },
      markers: false,
    });

    return () => {
      trigger.kill();
    };
  }, [setIsDarkMode]);

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 md:py-[120px] lg:py-[156px] bg-transparent relative overflow-hidden transition-colors mt-8 duration-700">
      {/* Background elements */}
      <div className="absolute top-10 sm:top-20 right-0 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 left-0 w-32 sm:w-64 md:w-96 h-32 sm:h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="main-container relative z-10">
        {/* Header */}
        <RevealAnimation delay={0.1}>
          <div className="relative text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16 px-4 pt-12 sm:pt-0">
            <span className="flex items-center justify-center gap-1 w-52 absolute left-1/2 -translate-x-1/2 -top-8 sm:-top-16 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-widest uppercase border border-blue-100 dark:border-blue-900">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              
              Technical Expertise
            </span>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-4xl sm:text-4xl md:text-5xl uppercase lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-10 sm:leading-14 lg:leading-16 sm:leading-snug flex flex-col items-center gap-1 sm:gap-2">
                Deep Technical Expertise,
                <span className=" text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">
                  Supporting Modern Systems
                </span>
              </h2>
              <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-2 sm:px-0 mt-3 sm:mt-4">
                We deliver enterprise-grade solutions across AI, cloud, security, and emerging technologies that drive measurable business outcomes.
              </p>
            </div>
          </div>
        </RevealAnimation>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[220px] px-2 sm:px-4 md:mx-8 lg:mx-12">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            const delay = 0.2 + index * 0.05;

            return (
              <RevealAnimation key={item.id} delay={delay} direction="up" offset={40}>
                <ExpertiseCard item={item} Icon={Icon} />
              </RevealAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ExpertiseCard = ({ item, Icon }) => {
  const getThemeClasses = () => {
    switch (item.theme) {
      case 'dark':
        return 'bg-gradient-to-br from-gray-900 to-black text-white border-gray-800';
      case 'blue':
        return 'bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-500';
      default:
        return 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-800';
    }
  };

  const getSizeClasses = () => {
    switch (item.size) {
      case 'wide-tall':
        return 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2';
      case 'wide':
        return 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-1';
      case 'tall':
        return 'sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2';
      case 'normal':
      default:
        return 'sm:col-span-1 sm:row-span-1';
    }
  };

  const getIconBgClasses = () => {
    switch (item.theme) {
      case 'dark':
        return 'bg-white/10';
      case 'blue':
        return 'bg-white/20';
      default:
        return 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900';
    }
  };

  const getIconColorClasses = () => {
    switch (item.theme) {
      case 'dark':
      case 'blue':
        return 'text-white';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className={`${getSizeClasses()} relative h-full rounded-lg sm:rounded-2xl border p-1 sm:p-2`}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div
        className={`
          relative h-full flex flex-col justify-between rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6
          ${getThemeClasses()}
          overflow-hidden
        `}
      >
        <div className="relative z-10 space-y-2 sm:space-y-3 md:space-y-4">
          {/* Icon */}
          <div className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-lg sm:rounded-xl ${getIconBgClasses()} flex items-center justify-center shrink-0`}>
            <Icon className={`w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ${getIconColorClasses()}`} />
          </div>

          {/* Content */}
          <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
            <h3 className="text-sm sm:text-base md:text-xl font-bold tracking-tight line-clamp-2">{item.title}</h3>
            <p className={`text-xs sm:text-xs md:text-xs leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none ${item.theme === 'dark' || item.theme === 'blue' ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;