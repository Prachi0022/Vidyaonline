import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

const testimonialsData = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    avatar: '👩‍💼',
    testimonial: 'Working with this team transformed our business. They delivered a stunning mobile app that exceeded our expectations and helped us reach 100K+ users in just 3 months.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateCo',
    avatar: '👨‍💻',
    testimonial: 'Their expertise in UI/UX design is unmatched. Our user engagement increased by 200% after the redesign. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthTech Solutions',
    avatar: '👩‍⚕️',
    testimonial: 'From MVP to full launch, they guided us every step of the way. Their technical knowledge and dedication to our success made all the difference.',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'David Park',
    role: 'CTO',
    company: 'FinanceFlow',
    avatar: '👨‍💼',
    testimonial: 'Exceptional quality and attention to detail. They built a scalable web application that handles millions of transactions daily without any issues.',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    company: 'EduLearn',
    avatar: '👩‍🎓',
    testimonial: 'Their ongoing support and maintenance services are top-notch. They respond quickly and always go above and beyond to ensure everything runs smoothly.',
    rating: 5,
  },
];

const TestimonialsOverview = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-22 xl:pb-50">
      <RevealAnimation delay={0.1}>
        <div className="mx-auto max-w-7xl rounded-2xl py-20 md:py-25">
          <div className="main-container">
            <div className="flex flex-col items-start gap-y-32 md:gap-x-35 md:flex-row">
              <StackCardWrapper
                topOffset="15vh"
                gap="24px"
                initDelay={100}
                className="mx-4 md:mx-auto w-full max-w-sm md:max-w-md lg:mx-0 lg:max-w-full lg:flex-1">
                {testimonialsData.map((testimonial) => (
                  <StackCardItem key={testimonial.id}>
                    <div className="flex h-full flex-col items-start space-y-6 bg-black/60 rounded-2xl backdrop-blur-md dark:bg-black/80 p-8 shadow-sm border border-white/20 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                      </div>
                      <p className="text-base text-gray-300 dark:text-gray-300 leading-relaxed italic">
                        "{testimonial.testimonial}"
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-2xl">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-white">{testimonial.name}</h3>
                          <p className="text-sm text-gray-300">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StackCardItem>
                ))}
              </StackCardWrapper>
              <div className="w-full lg:sticky lg:top-32 space-y-10 lg:flex-1 flex flex-col items-start lg:items-end">
                <RevealAnimation delay={0.3}>
                  <span className="inline-block px-4 py-2 lg:w-44 mx-4 md:mx-0 w-[9.5rem] bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                    Client testimonials
                  </span>
                </RevealAnimation>
                <div className="space-y-6 max-w-xl">
                  <RevealAnimation delay={0.4}>
                    <h2 className="text-4xl md:text-5xl mx-4 text-left md:text-right lg:text-6xl font-bold text-gray-900 dark:text-white leading-[0.9]">
                      Trusted by businesses worldwide.
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <p className="text-lg text-gray-600 mx-4 text-left md:text-right dark:text-gray-400 leading-relaxed">
                      Don't just take our word for it. Hear what our clients have to say about their experience working with us.
                    </p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href="/case-studies"
                      className="bg-transparent mx-4 text-gray-900 dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all duration-300 hover:shadow-lg"
                    >
                      <span className="font-semibold">View case studies</span>
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default TestimonialsOverview;
