
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import { ArrowRight } from 'lucide-react';
import nsImg336 from '../../assets/ns-img-336.svg';
import nsImg337 from '../../assets/ns-img-337.svg';

const CTA = () => {
  return (
    <section className=" relative py-16 px-4 md:px-24 lg:py-22 xl:py-28">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative z-0 mx-auto flex flex-col items-center justify-center space-y-8 overflow-hidden rounded-4xl bg-gray-50 px-5 py-14 text-center md:py-18 lg:py-22">
            {/* Left SVG Decoration */}
            <RevealAnimation delay={0.2} direction="left" offset={100}>
              <img
                src={nsImg336}
                alt="decoration"
                className="pointer-events-none absolute -bottom-20 -left-16 select-none md:-left-12 lg:-left-8 max-w-xs opacity-80"
              />
            </RevealAnimation>

            {/* Right SVG Decoration */}
            <RevealAnimation delay={0.2} direction="right" offset={100}>
              <img
                src={nsImg337}
                alt="decoration"
                className="pointer-events-none absolute -top-20 -right-16 select-none md:-right-12 lg:-right-8 max-w-xs opacity-80"
              />
            </RevealAnimation>

            {/* Content */}
            <div className="relative z-10 space-y-6 max-w-3xl">
              <RevealAnimation delay={0.1}>
                <h2 className="text-4xl md:text-5xl uppercase lg:text-6xl font-bold text-gray-900 leading-tight">
                  Built It? <br className="hidden lg:block" />
                  Now Let's Market It!
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="text-lg md:text-xl text-gray-600">
                  From the team that understands your tech stack to the marketing experts <br className="hidden lg:block" />
                  who know your audience. Complete your digital success story with Vidyaonline.
                </p>
              </RevealAnimation>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 flex flex-row items-center justify-center">
              <RevealAnimation delay={0.3} direction="up" offset={30}>
                <LinkButton
                  href="/contact"
                  className="bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  <span className="font-semibold">Complete Your Success Story</span>
                </LinkButton>
              </RevealAnimation>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
