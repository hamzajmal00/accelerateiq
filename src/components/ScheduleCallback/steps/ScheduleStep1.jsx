import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ScheduleStep1 = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <div className=''>
        <p className='text-center text-base font-medium lg:text-lg xl:text-xl'>
          What day did you schedule the appointment for?
        </p>
        <div className='mx-auto mt-4 max-w-sm space-y-0.5'>
          <Calendar
            onChange={setValue}
            onClickMonth={(value, evnt) => setValue(value)}
            onClickYear={(value, evnt) => setValue(value)}
            value={value}
            activeStartDate={value}
            className='h-full max-h-[450px] overflow-y-auto overflow-x-hidden !border-none !bg-white/30  '
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleStep1;
