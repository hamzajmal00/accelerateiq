import React from 'react';

const SendEmail1 = () => {
  return (
    <div class='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <h4 class='text-center text-lg font-semibold xl:text-xl'>
        What kind of email do you want to send?
      </h4>

      <div class='mt-6 flex flex-col items-center justify-center gap-4'>
        <a
          href='/send-email-2'
          class='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
        >
          Follow up
        </a>
        <a
          href='/send-email-2'
          class='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
        >
          Send information
        </a>
        <a
          href='/send-email-2'
          class='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
        >
          Schedule a demo
        </a>
      </div>
    </div>
  );
};

export default SendEmail1;
