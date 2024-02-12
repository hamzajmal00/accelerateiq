import React from 'react';

const Referral6 = () => {
  return (
    <div class='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <div class='h-full min-h-[200px] overflow-hidden'>
        <p class='text-center text-base font-medium lg:text-lg xl:text-xl'>
          Great job! The new contact has been added.
        </p>

        <div class='relative z-10 mt-4 py-10 lg:mt-8'>
          <h2 class='mt-4 text-center text-2xl font-semibold md:text-3xl'>
            Awesome work!
          </h2>

          <div class='absolute inset-0 -z-10 grid place-content-center'>
            <div class='relative h-48 w-48'>
              <img
                src='/assets/img/clapping-hand.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-1 select-none'
              />
              <img
                src='/assets/img/clapping-hand.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-2 select-none'
              />
              <img
                src='/assets/img/confetti.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-3 select-none'
              />
              <img
                src='/assets/img/stars.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-4 select-none'
              />
              <img
                src='/assets/img/stars.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-5 select-none'
              />
              <img
                src='/assets/img/confetti.svg'
                alt=''
                class='pointer-events-none absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-confetti-6 select-none'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral6;
