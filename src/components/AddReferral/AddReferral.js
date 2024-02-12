import React, { useState } from 'react';
import Dashboard from '../../pages/Dashboard';
import Stepper from '../Common/Stepper';
import Referral1 from './steps/referral-1';
import Referral2 from './steps/referral-2';
import Referral3 from './steps/referral-3';
import Referral4 from './steps/referral-4';
import Referral5 from './steps/referral-5';
import Referral6 from './steps/referral-6';

const AddReferral = () => {
  const [openEditContactPopup, setOpenEditContactPopup] = useState(false);

  const steps = [
    { title: 'Step 1', component: <Referral1 /> },
    { title: 'Step 2', component: <Referral2 /> },
    { title: 'Step 3', component: <Referral3 /> },
    { title: 'Step 4', component: <Referral4 /> },
    { title: 'Step 5', component: <Referral5 /> },
    { title: 'Step 6', component: <Referral6 /> },
  ];
  return (
    <>
      <Dashboard>
        <div className='mt-10 grid flex-1 grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-10'>
          <div className='rounded-2xl bg-[#E7F2FA] p-6 lg:p-10'>
            <div className='flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2'>
              <div className='relative flex items-center gap-2 before:absolute before:-bottom-[13px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary'>
                <span className='rounded-lg bg-accent-1 p-1 text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 18 18'
                    fill='currentColor'
                    className='h-5 w-5'
                  >
                    <path d='M14.69 14.05a6.91 6.91 0 0 0-3.12-2.48A4.23 4.23 0 0 0 13 9.47a4.15 4.15 0 1 0-8 0 4.23 4.23 0 0 0 1.42 2.1 6.91 6.91 0 0 0-3.12 2.48 7.62 7.62 0 1 1 11.38 0ZM6.23 8.31a2.78 2.78 0 0 1 1.71-2.56 2.74 2.74 0 0 1 1.6-.16 2.78 2.78 0 0 1 2.18 2.18A2.78 2.78 0 0 1 9 11.08a2.77 2.77 0 0 1-2.77-2.77ZM4.33 15a5.55 5.55 0 0 1 9.34 0 7.58 7.58 0 0 1-9.34 0ZM9 0a9 9 0 1 0 6.36 2.64A9 9 0 0 0 9 0Z' />
                  </svg>
                </span>
                <h6 className='text-lg font-medium'>Contact Information</h6>
              </div>

              <div className=''>
                <button
                  data-hs-overlay='#edit-contact-modal'
                  type='button'
                  onClick={() => setOpenEditContactPopup(true)}
                  className='flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 18 18'
                    fill='currentColor'
                    className='h-4 w-4'
                  >
                    <path d='m14.4 7.62-4-4 2.16-2.16 4 4Zm-8.94 8.94h-4v-4l7.9-7.94 4 4ZM17.58 4.44l-4-4a1.6 1.6 0 0 0-.47-.31 1.5 1.5 0 0 0-.57-.13 1.46 1.46 0 0 0-.54.11 1.38 1.38 0 0 0-.47.31L.42 11.52a1.38 1.38 0 0 0-.31.48 1.46 1.46 0 0 0-.11.55v4A1.43 1.43 0 0 0 1.44 18h4a1.46 1.46 0 0 0 .56-.11 1.38 1.38 0 0 0 .47-.31l11.1-11.1a1.38 1.38 0 0 0 .32-.48 1.46 1.46 0 0 0 .11-.54 1.5 1.5 0 0 0-.11-.55 1.6 1.6 0 0 0-.31-.47Z' />
                  </svg>
                </button>
              </div>
            </div>

            <div className='mt-4'>
              <form action='' className=''>
                <div className='flex items-center justify-end'>
                  <a
                    href='mailto:info@prospectiq.ai'
                    target='_blank'
                    className='flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='h-5 w-5'
                    >
                      <path d='M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z' />
                      <path d='m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10' />
                    </svg>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/prospect-iq/'
                    target='_blank'
                    className='flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 32 32'
                      fill='currentColor'
                      className='h-6 w-6'
                    >
                      <path d='M7.5 5A2.518 2.518 0 0 0 5 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5Zm0 2h17c.285 0 .5.215.5.5v17a.49.49 0 0 1-.5.5h-17a.489.489 0 0 1-.5-.5v-17c0-.285.215-.5.5-.5Zm2.938 1.719a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437Zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5ZM9 13.5V23h2.969v-9.5Z' />
                    </svg>
                  </a>
                  <a
                    href='https://prospectiq.ai/'
                    target='_blank'
                    className='flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-transparent text-accent-2 transition hover:bg-accent-2/10 focus:outline-none focus:ring focus:ring-accent-2/20 disabled:pointer-events-none disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='h-5 w-5'
                    >
                      <circle cx='12' cy='12' r='10' />
                      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20' />
                    </svg>
                  </a>
                </div>

                <div className='space-y-4'>
                  <div className='relative'>
                    <input
                      type='text'
                      id='company-name'
                      className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                      placeholder='Company Name'
                      value='ProspectIQ'
                      readonly
                    />
                    <label
                      for='company-name'
                      className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                    >
                      Company Name
                    </label>
                  </div>

                  <div className='relative'>
                    <input
                      type='text'
                      id='contact-name'
                      className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                      placeholder='Contact Name'
                      value='Charles Jones'
                      readonly
                    />
                    <label
                      for='contact-name'
                      className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                    >
                      Contact Name
                    </label>
                  </div>

                  <div className='relative'>
                    <input
                      type='text'
                      id='title'
                      className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                      placeholder='Title'
                      value='VP of Sales'
                      readonly
                    />
                    <label
                      for='title'
                      className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                    >
                      Title
                    </label>
                  </div>

                  <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
                    <div className='relative'>
                      <input
                        type='text'
                        id='industry'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Industry'
                        value='Software'
                        readonly
                      />
                      <label
                        for='industry'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Industry
                      </label>
                    </div>

                    <div className='relative'>
                      <input
                        type='text'
                        id='timezone'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Time Zone'
                        value='ET'
                        readonly
                      />
                      <label
                        for='timezone'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Time Zone
                      </label>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 gap-4 xl:grid-cols-3'>
                    <div className='relative'>
                      <input
                        type='text'
                        id='address'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Contact Address'
                        value='208 Central Ave'
                        readonly
                      />
                      <label
                        for='address'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Contact Address
                      </label>
                    </div>

                    <div className='relative'>
                      <input
                        type='text'
                        id='city'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='City'
                        value='St Petersburg'
                        readonly
                      />
                      <label
                        for='city'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        City
                      </label>
                    </div>

                    <div className='relative'>
                      <input
                        type='text'
                        id='state'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='FL'
                        value='FL'
                        readonly
                      />
                      <label
                        for='state'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        State
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className='flex flex-col rounded-2xl bg-[#E7F2FA] p-6 lg:p-10'>
            <div className='flex flex-wrap items-center justify-between gap-2 border-b-[3px] border-secondary/20 pb-2'>
              <div className='relative flex items-center gap-2 before:absolute before:-bottom-[11px] before:left-0 before:h-[3px] before:w-[calc(100%+.5rem)] before:bg-secondary'>
                <span className='rounded-lg bg-accent-1 p-1 text-primary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 18 15'
                    fill='currentColor'
                    className='h-5 w-5'
                  >
                    <path d='M16.24 13.62a.68.68 0 0 1-.37.07.74.74 0 0 1-.36-.12A11.27 11.27 0 0 0 9 11.74a11.27 11.27 0 0 0-6.51 1.83.74.74 0 0 1-.36.12.68.68 0 0 1-.37-.07.65.65 0 0 1-.28-.24.67.67 0 0 1-.1-.34v-2.27a13.82 13.82 0 0 1 15.24 0V13a.67.67 0 0 1-.1.34.65.65 0 0 1-.28.28ZM7.43 1.46a13.1 13.1 0 0 0-2.5 6.26A15 15 0 0 0 1.38 9.2v-.72A7 7 0 0 1 3.09 4a7.68 7.68 0 0 1 4.34-2.54ZM9 1.65a12.06 12.06 0 0 1 2.63 5.75 15.48 15.48 0 0 0-5.26 0A12.1 12.1 0 0 1 9 1.65Zm7.62 6.83v.72a15 15 0 0 0-3.55-1.48 13.1 13.1 0 0 0-2.5-6.26A7.68 7.68 0 0 1 14.91 4a7 7 0 0 1 1.71 4.48ZM9 0a9.28 9.28 0 0 0-6.36 2.49A8.22 8.22 0 0 0 0 8.48V13a1.92 1.92 0 0 0 .61 1.39 2.18 2.18 0 0 0 1.47.61 2.1 2.1 0 0 0 1.22-.38A9.94 9.94 0 0 1 9 13a9.94 9.94 0 0 1 5.7 1.58 2.14 2.14 0 0 0 1.05.37 2.2 2.2 0 0 0 1.11-.2 2.07 2.07 0 0 0 .83-.72A1.89 1.89 0 0 0 18 13V8.48a8.22 8.22 0 0 0-2.64-6A9.28 9.28 0 0 0 9 0Z' />
                  </svg>
                </span>
                <h6 className='text-lg font-medium'>Call Coach</h6>
              </div>
            </div>

            <div className='mt-6 flex h-full flex-col justify-between gap-4'>
              <Stepper
                steps={steps}
                additionalBtnText='Yes, add the new contact.'
                nextBtnText='Next'
                isBackBtnShow={true}
                finishBtnRoute='/call-options'
              />
            </div>
          </div>
        </div>
      </Dashboard>
      {/* Edit Contact Modal */}
      {openEditContactPopup && (
        <div
          id='edit-contact-modal'
          className='hs-overlay pointer-events-none fixed start-0 top-[50px] z-[60]  h-full w-full overflow-y-auto overflow-x-hidden'
        >
          <div className='m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl'>
            <div className='pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm'>
              <div className='flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3'>
                <h5 className='text-xl font-semibold'>Contact Information</h5>
                <button
                  type='button'
                  className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  data-hs-overlay='#edit-contact-modal'
                  onClick={() => setOpenEditContactPopup(false)}
                >
                  <span className='sr-only'>Close</span>
                  <svg
                    className='h-4 w-4 flex-shrink-0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path d='M18 6 6 18' />
                    <path d='m6 6 12 12' />
                  </svg>
                </button>
              </div>

              <div className='overflow-y-auto p-5'>
                <form action='' className=''>
                  <div className='space-y-4'>
                    <div className='relative'>
                      <input
                        type='text'
                        id='company-name'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Company Name'
                        value='Lexis Nexis'
                      />
                      <label
                        for='company-name'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Company Name
                      </label>
                    </div>

                    <div className='relative'>
                      <input
                        type='text'
                        id='contact-name'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Contact Name'
                        value='Andrea Parks'
                      />
                      <label
                        for='contact-name'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Contact Name
                      </label>
                    </div>

                    <div className='relative'>
                      <input
                        type='text'
                        id='title'
                        className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                        placeholder='Title'
                        value='Vice President, Sales Operations'
                      />
                      <label
                        for='title'
                        className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                      >
                        Title
                      </label>
                    </div>

                    <div className='grid grid-cols-1 gap-4 xl:grid-cols-2'>
                      <div className='relative'>
                        <input
                          type='text'
                          id='industry'
                          className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                          placeholder='Industry'
                          value='Technology'
                        />
                        <label
                          for='industry'
                          className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                        >
                          Industry
                        </label>
                      </div>

                      <div className='relative'>
                        <input
                          type='text'
                          id='timezone'
                          className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                          placeholder='Time Zone'
                          value='EST'
                        />
                        <label
                          for='timezone'
                          className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                        >
                          Time Zone
                        </label>
                      </div>
                    </div>

                    <div className='grid grid-cols-1 gap-4 xl:grid-cols-3'>
                      <div className='relative'>
                        <input
                          type='text'
                          id='address'
                          className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                          placeholder='Contact Address'
                          value='2450 E Brown St'
                        />
                        <label
                          for='address'
                          className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                        >
                          Contact Address
                        </label>
                      </div>

                      <div className='relative'>
                        <input
                          type='text'
                          id='city'
                          className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                          placeholder='City'
                          value='Tampa'
                        />
                        <label
                          for='city'
                          className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                        >
                          City
                        </label>
                      </div>

                      <div className='relative'>
                        <input
                          type='text'
                          id='state'
                          className='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                          placeholder='State'
                          value='FL'
                        />
                        <label
                          for='state'
                          className='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                        >
                          State
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className='flex items-center justify-between p-4'>
                <button
                  data-hs-overlay='#edit-contact-modal'
                  type='button'
                  onClick={() => setOpenEditContactPopup(false)}
                  className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-lg font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50'
                >
                  Cancel
                </button>

                <button
                  data-hs-overlay='#edit-contact-modal'
                  onClick={() => setOpenEditContactPopup(false)}
                  type='button'
                  className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg'
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddReferral;
