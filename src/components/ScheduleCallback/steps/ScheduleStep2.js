import React from 'react';

const ScheduleStep2 = () => {
  return (
    <div className='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <div className=''>
        <p className='text-center text-base font-medium lg:text-lg xl:text-xl'>
          What time did you schedule the appointment for?
        </p>

        <div className='mt-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 lg:gap-4'>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            9:00 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            9:30 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            10:00 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            10:30 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            11:00 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            11:30 AM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            12:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            12:30 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            1:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            1:30 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            2:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            2:30 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            3:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            3:30 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            4:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            4:30 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            5:00 PM
          </button>
          <button
            onclick='handleTimeBtnClick()'
            type='button'
            className='rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg'
          >
            5:30 PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStep2;
