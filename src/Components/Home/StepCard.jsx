import { cn } from '../../utils/cn';

const StepCard = ({ step, cardRef }) => {
  return (
    <div
      ref={cardRef}
      id={step.id}
      className="step-card relative mx-auto w-80 shrink-0 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black border border-gray-200 dark:border-gray-800 p-6 sm:w-96 md:w-[440px] xl:w-[480px] shadow-lg hover:shadow-xl transition-shadow duration-300"
      data-step={step.stepNumber}>
      {/* Inner card with border - simulating the screenshot/preview */}
      <div className="relative overflow-hidden rounded-2xl border-2 border-blue-500/30 bg-white dark:bg-gray-900 p-6 shadow-sm">
        <img 
          src={step.mainImage} 
          alt={`step ${step.stepNumber}`} 
          className="w-full h-auto object-cover rounded-lg" 
        />

        {step.overlayImage && (
          <img
            src={step.overlayImage}
            alt={`step ${step.stepNumber}`}
            className={cn(
              'absolute z-20 object-cover',
              step.overlayImagePosition === 'right' && 'top-[100px] right-[-11px] md:top-[149px]',
              step.overlayImagePosition === 'center' && 'top-[149px] left-1/2 -translate-x-1/2',
            )}
          />
        )}
      </div>

      {/* Title and description below the card */}
      <div className="mt-8 space-y-3">
        {step.badgeLabel && (
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-widest uppercase border border-blue-100 dark:border-blue-900">
            {step.badgeLabel}
          </span>
        )}
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          {step.title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
