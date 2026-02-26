import React from 'react';
import { useForm } from 'react-hook-form';
import RevealAnimation from '../animation/RevealAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Shield } from 'lucide-react';

const faqData = [
  {
    id: '1',
    question: 'What is Nexmoves AI solutions about?',
    answer: 'Nexmoves provides cutting-edge AI solutions that help enterprises apply intelligence in ways that improve decisions, reduce manual effort, and support operations at scale. Our services span from AI implementation to cloud modernization and cybersecurity.',
  },
  {
    id: '2',
    question: 'How does your AI expertise benefit enterprises?',
    answer: 'We deliver enterprise-grade solutions across AI, cloud, security, and emerging technologies. Our approach ensures that AI creates measurable business value by fitting seamlessly into how organizations actually work.',
  },
  {
    id: '3',
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in AI, Generative AI, Machine Learning, Computer Vision, Cloud platforms, Data Science, Cybersecurity, IoT, AR/VR, Blockchain, and Agentic AI systems.',
  },
  {
    id: '4',
    question: 'How do you ensure security and compliance?',
    answer: 'Security is treated as a design constraint, not a checklist item. Our systems account for governance, compliance, and risk from the earliest architectural decisions.',
  },
  {
    id: '5',
    question: 'Can you help with cloud modernization?',
    answer: 'Yes, cloud modernization is not a lift-and-shift exercise. We help enterprises rethink how applications and infrastructure are structured so systems remain secure, resilient, and ready to scale over time.',
  },
];

function FAQ() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      designation: '',
      contactNumber: '',
      workEmail: '',
      projectDescription: '',
      captcha: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you can send the data to your backend
    alert('Thank you! We will get back to you soon.');
    reset();
  };

  return (
    <section className="pb-12 sm:pb-20 md:pb-32 lg:pb-[150px] bg-black dark:bg-black relative">
      {/* Background elements */}
      <div className="absolute top-10 sm:top-20 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="main-container relative z-10">
        {/* Header */}
        <RevealAnimation delay={0.1}>
          <div className="px-4 sm:px-6 md:px-8 lg:mx-18 text-start space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
            <span className="flex items-center justify-center gap-1.5 w-72 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 dark:bg-purple-900/30 text-xs font-semibold text-purple-700 dark:text-purple-200 tracking-widest uppercase border border-purple-100 dark:border-purple-900">
                <div className="w-2 h-2 bg-purple-200 rounded-full animate-pulse" />
              Frequently Asked Questions
            </span>
            
            <p className="uppercase text-sm sm:text-base md:text-6xl w-[68vw]  text-white font-bold tracking-tight leading-16 px-2 sm:px-0">
              Find answers to common questions about our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600">AI and technology solutions.</span> 
            </p>
          </div>
        </RevealAnimation>

        {/* Two Column Layout - FAQ Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* FAQ Accordion - Left Side */}
          <div className="px-4 sm:px-6 md:px-8 lg:mx-18 max-w-full lg:max-w-[800px]">
            <RevealAnimation delay={0.2}>
              <Accordion type="single" collapsible defaultValue="1" className="space-y-2 sm:space-y-3">
                {faqData.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-white/20 rounded-2xl sm:rounded-3xl md:rounded-4xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 transition-colors duration-300 data-[state=open]:border-white/40"
                  >
                    <AccordionTrigger className="hover:no-underline group">
                      <span className="text-left text-sm sm:text-base md:text-lg font-semibold text-white transition-colors">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 sm:pt-4">
                      {/* Fading line */}
                      <div className="mb-3 sm:mb-4 h-px bg-gradient-to-r from-white/30 via-white/20 to-transparent" />
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </RevealAnimation>
          </div>

          {/* Contact Form - Right Side */}
          <div className="px-4 sm:px-6 md:px-8 lg:mx-18 lg:sticky lg:top-24 lg:h-fit">
            <RevealAnimation delay={0.3}>
              <div className="rounded-2xl sm:rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-slate-900/50 p-4 sm:p-6 md:p-8 backdrop-blur-xl">
                {/* Form Header */}
                <RevealAnimation delay={0.4}>
                  <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      Didn't Find What You Were Looking For?
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300">
                      We've got more answers waiting for you! If your question didn't make the list, don't hesitate to reach out.
                    </p>
                  </div>
                </RevealAnimation>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                  {/* Name and Designation Row */}
                  <RevealAnimation delay={0.5}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Name
                        </label>
                        <input
                          {...register('name', { required: 'Name is required' })}
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Designation */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Designation
                        </label>
                        <input
                          {...register('designation', { required: 'Designation is required' })}
                          type="text"
                          placeholder="Your Designation"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.designation && (
                          <p className="text-red-400 text-xs mt-1">{errors.designation.message}</p>
                        )}
                      </div>
                    </div>
                  </RevealAnimation>

                  {/* Contact and Email Row */}
                  <RevealAnimation delay={0.6}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {/* Contact Number */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Contact Number
                        </label>
                        <input
                          {...register('contactNumber', {
                            required: 'Contact number is required',
                            pattern: {
                              value: /^[0-9\-\+\(\)\s]*$/,
                              message: 'Invalid phone number',
                            },
                          })}
                          type="tel"
                          placeholder="Your Number*"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.contactNumber && (
                          <p className="text-red-400 text-xs mt-1">{errors.contactNumber.message}</p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-white mb-2">
                          Work Email
                        </label>
                        <input
                          {...register('workEmail', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Invalid email address',
                            },
                          })}
                          type="email"
                          placeholder="Email Address*"
                          className="w-full bg-transparent border-b-2 border-blue-400/50 px-0 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors"
                        />
                        {errors.workEmail && (
                          <p className="text-red-400 text-xs mt-1">{errors.workEmail.message}</p>
                        )}
                      </div>
                    </div>
                  </RevealAnimation>

                  {/* Project Description */}
                  <RevealAnimation delay={0.7}>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-2">
                        Describe Your Project
                      </label>
                      <textarea
                        {...register('projectDescription', {
                          required: 'Please describe your project',
                          minLength: {
                            value: 10,
                            message: 'Description must be at least 10 characters',
                          },
                        })}
                        placeholder="Tell us about your project..."
                        rows="3"
                        className="w-full bg-transparent border-2 border-blue-400/50 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                      />
                      {errors.projectDescription && (
                        <p className="text-red-400 text-xs mt-1">{errors.projectDescription.message}</p>
                      )}
                    </div>
                  </RevealAnimation>

                  {/* NDA Protection */}
                  <RevealAnimation delay={0.8}>
                    <div className="flex items-center gap-2 rounded-lg bg-amber-500/20 border border-amber-500/40 px-2 sm:px-3 py-1.5 sm:py-2">
                      <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 flex-shrink-0" />
                      <span className="text-[10px] sm:text-xs font-medium text-amber-100">
                        Fast 2-minute response, fully <span className="font-bold">NDA-protected</span>.
                      </span>
                    </div>
                  </RevealAnimation>

                  {/* Captcha */}
                  <RevealAnimation delay={0.9}>
                    <div className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3 border-b border-blue-400/30">
                      <span className="text-white text-xs sm:text-sm font-semibold">6 + 6 =</span>
                      <input
                        {...register('captcha', {
                          required: 'Please verify',
                          validate: (value) => value === '12' || 'Incorrect answer',
                        })}
                        type="text"
                        placeholder=" "
                        className="w-12 sm:w-16 bg-transparent border-2 border-blue-400/50 rounded-lg px-2 sm:px-3 py-2 sm:py-4 text-white text-xs sm:text-sm text-center focus:border-blue-400 focus:outline-none transition-colors"
                      />
                      {errors.captcha && (
                        <p className="text-red-400 text-[10px] sm:text-xs">{errors.captcha.message}</p>
                      )}
                    </div>
                  </RevealAnimation>

                  {/* Submit Button */}
                  <RevealAnimation delay={1.0}>
                    <button
                      type="submit"
                      className="w-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg uppercase bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit
                    </button>
                  </RevealAnimation>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;