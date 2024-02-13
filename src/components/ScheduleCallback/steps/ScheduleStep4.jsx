import React, { useEffect } from 'react';

const ScheduleStep4 = ({ setLottie }) => {
  useEffect(() => {
    setLottie(true);
  }, []);

  return (
    <div className='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <div className='h-full min-h-[200px]'>
        <p className='text-center text-base font-medium lg:text-lg xl:text-xl'>
          Congratulations! Your appointment has been scheduled.
        </p>

        <h2 className='mt-10 text-center text-2xl font-semibold md:text-3xl xl:mt-20'>
          Way to go!
        </h2>
      </div>
    </div>
  );
};

export default ScheduleStep4;
