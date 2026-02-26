import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import IntegrationCircle from './IntegrationCircle';

const Integration = () => {
  return (
    <section className="py-[8px] md:py-[12px] bg-gradient-to-b lg:py-[15px]">
      <RevealAnimation delay={0.1}>
        <div className="relative mx-auto max-w-[1600px] overflow-hidden">
          <div className="main-container px-2 lg:pb-4 relative z-30">
            <div className="mt-[180px] space-y-[40px] md:mt-[200px] lg:mt-[280px]">
              <div className="space-y-1 text-center flex flex-col items-center justify-center">
                <RevealAnimation delay={0.2}>
                  <span className="flex items-center justify-center gap-1 px-4 py-2 rounded-full mb-8 bg-blue-50 dark:bg-blue-950 text-sm font-medium text-blue-700 dark:text-blue-200 border border-blue-100 dark:border-blue-900 tracking-widest uppercase">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    
                    Our Tech Stack
                  </span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.3}>
                    <h2 className="text-4xl md:w-[50vw] uppercase md:text-5xl lg:text-6xl text-center sm:w-screen leading-10 sm:leading-14 lg:leading-16 font-bold tracking-tight text-gray-900 dark:text-white">
                      Modern foundations that ship  <span className="text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">fast and scale</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p className="mx-auto max-w-[560px] text-center text-gray-600 dark:text-gray-400">
                      We pair battle-tested cloud, data, and frontend stacks so products launch quickly, stay reliable, and remain secure across regions.
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.5} offset={10}>
                <div className="flex items-center justify-center gap-4">
                  <LinkButton
                    href="#"
                    className="rounded-xl bg-black text-white hover:shadow-lg hover:scale-105 transition-all duration-300 dark:bg-white dark:text-black">
                    <span className="flex items-center gap-2 font-semibold">
                      See architecture choices
                      
                    </span>
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* circle  */}
          <div className="absolute top-2 left-1/2 -z-10 -translate-x-1/2">
            <div className="w-[800px] md:w-[750px] lg:w-[990px] xl:w-[1300px] 2xl:w-[1400px]">
              <IntegrationCircle />
            </div>
          </div>

          {/* bottom gradient overlay  */}
          <div
            className="lp:-bottom-5 absolute bottom-0 z-0 h-[258px] w-full rotate-180"
            style={{ background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fff 49.16%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Integration;
