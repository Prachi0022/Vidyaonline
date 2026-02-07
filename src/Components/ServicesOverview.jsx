import RevealAnimation from './animation/RevealAnimation';
import LinkButton from './ui/button/LinkButton';
import StackCardItem from './ui/stack-card/StackCardItem';
import StackCardWrapper from './ui/stack-card/StackCardWrapper';

const servicesData = [
  {
    id: 'mobile-app',
    icon: 'ns-shape-34',
    title: 'Mobile app development.',
    description: 'Native iOS & android apps built for performance and scalability.',
  },
  {
    id: 'web-app',
    icon: 'ns-shape-38',
    title: 'Web app development.',
    description: 'Fast, secure, and scalable web applications for all industries.',
  },
  {
    id: 'ui-ux',
    icon: 'ns-shape-35',
    title: 'UI/UX design.',
    description: 'Intuitive and engaging interfaces that boost user satisfaction.',
  },
  {
    id: 'mvp-prototype',
    icon: 'ns-shape-17',
    title: 'MVP & prototype development.',
    description: 'Validate your product idea before investing heavily.',
  },
  {
    id: 'maintenance',
    icon: 'ns-shape-25',
    title: 'Maintenance & support.',
    description: 'Ongoing support and performance optimization post-launch.',
  },
];

const ServicesOverview = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-22 xl:pb-50">
      <RevealAnimation delay={0.1}>
        <div className="mx-auto max-w-360 rounded-2xl bg-background-3 py-20 dark:bg-background-7 md:py-25">
          <div className="main-container">
            <div className="flex flex-col items-start gap-y-24 md:gap-x-35 md:flex-row">
              <div className="mx-auto w-full max-w-130 space-y-7 text-center lg:sticky lg:top-28 lg:mx-0 lg:max-w-full lg:flex-1 lg:space-y-14 lg:text-left">
                <RevealAnimation delay={0.3}>
                  <span className="badge badge-primary-light mb-5">What we offer</span>
                </RevealAnimation>
                <div className="space-y-2 md:max-w-150">
                  <RevealAnimation delay={0.4}>
                    <h2>End-to-end app development services.</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <p>Everything you need to launch, grow, and scale a successful app.</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href="/services"
                      className="btn btn-white btn-lg lg:btn-xl dark:btn-transparent hover:btn-secondary dark:hover:btn-accent mx-auto w-4/5 md:mx-0 md:w-auto">
                      Explore our services
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <StackCardWrapper
                topOffset="15vh"
                gap="24px"
                initDelay={100}
                className="mx-auto w-full max-w-90 md:max-w-65 md:flex-col lg:mx-0 lg:max-w-full lg:flex-1">
                {servicesData.map((service) => (
                  <StackCardItem key={service.id}>
                    <div className="flex h-full flex-col justify-start space-y-6 rounded-lg border border-stroke-1/90 bg-white p-8 dark:border-stroke-5 dark:bg-background-6">
                      <div className="flex flex-col items-start space-y-3">
                        <span className={`block text-4xl text-secondary dark:text-accent ${service.icon}`} />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{service.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                  </StackCardItem>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ServicesOverview;
