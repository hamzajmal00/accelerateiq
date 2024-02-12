import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Stepper = ({
  steps,
  additionalBtnText,
  nextBtnText = 'Next',
  isBackBtnShow = false,
  finishBtnText = 'Finish',
  finishBtnRoute = '',
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && activeStep < steps.length - 1) {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStep, steps.length]);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='relative min-h-[400px]'>
      <div className=' min-h-[400px]'>
        {/* <h2>Step {activeStep + 1}</h2> */}
        <div>{steps[activeStep]?.component}</div>
      </div>
      {/* <div>
        {activeStep > 0 && <button onClick={handlePrevious}>Previous</button>}
        {activeStep < steps.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
      </div> */}
      <div
        class={`flex w-full mt-4 flex-wrap items-center ${
          isBackBtnShow ? 'justify-between' : 'justify-center'
        }  gap-2`}
      >
        {isBackBtnShow && (
          <button
            //   href='/call-options-2'
            onClick={handlePrevious}
            class='inline-flex items-center gap-x-2 text-gray-800 transition hover:text-secondary'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-width='1.5'
              class='h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
              />
            </svg>
            Go Back
          </button>
        )}
        {activeStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            class='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg'
          >
            {activeStep === steps.length - 2 && additionalBtnText
              ? additionalBtnText
              : nextBtnText}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              stroke-width='2.5'
              class='h-4 w-4'
              viewBox='0 0 24 24'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => navigate(finishBtnRoute)}
            class='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg'
          >
            {finishBtnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
