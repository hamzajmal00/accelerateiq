import React, { useRef, useState } from 'react';
import prospectiqlogo from '../assets/img/prospectiq-logo.svg';
import footerlogo from '../assets/img/iqconnect.png';
import { useNavigate } from 'react-router-dom';
import Moveable from 'react-moveable';

const Dashboard = ({ children }) => {
  const navigate = useNavigate();

  const [show, setshow] = useState(false);
  const [openSearchModelPopup, setOpenSearchModelPopup] = useState(false);
  const [openCallNotesModelPopup, setOpenCallNotesModelPopup] = useState(false);
  const [openDiscardModelPopup, setOpenDiscardModelPopup] = useState(false);
  const refSearchModel = useRef(null);
  const refCallNotesModel = useRef(null);
  return (
    <div className='h-full text-primary'>
      <div className='app flex h-full flex-col lg:flex-row'>
        {/* <!-- Header / Sidebar --> */}
        <header className='w-full bg-primary bg-hero bg-cover bg-center bg-no-repeat py-4 lg:h-[100vh] lg:w-72 lg:py-8'>
          <div className='flex h-full justify-between gap-10 px-5 lg:flex-col'>
            <a href='' className='block'>
              <img
                src={prospectiqlogo}
                alt='ProspectIQ Logo'
                className='h-8 lg:h-10'
              />
            </a>

            <ul className='hidden flex-1 space-y-1.5 lg:block'>
              <li>
                <a
                  className='group cursor-pointer flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='h-5 w-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                      <path d='M9 22V12h6v10' />
                    </svg>
                  </span>
                  <span>Manager Dashboard</span>
                </a>
              </li>
              <li className=''>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => {
                    navigate('/caller-dashboard');
                  }}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='h-5 w-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                      <path d='M9 22V12h6v10' />
                    </svg>
                  </span>
                  <span>Caller Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/call-processing')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-5'
                    >
                      <path d='M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z' />
                    </svg>
                  </span>
                  <span>Call Processing</span>
                </a>
              </li>
              <li>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/add-referral')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-5'
                    >
                      <path d='M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z' />
                    </svg>
                  </span>
                  <span>Add Referral</span>
                </a>
              </li>
              <li>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/schedule-callback')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-5'
                    >
                      <path d='M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z' />
                    </svg>
                  </span>
                  <span>Schedule Callback</span>
                </a>
              </li>
              <li>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/call-options')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-5'
                    >
                      <path d='M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z' />
                    </svg>
                  </span>
                  <span>Call Options</span>
                </a>
              </li>
              <li>
                <a
                  className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                  onClick={() => navigate('/send-email')}
                >
                  <span className='text-secondary transition group-hover:text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-5'
                    >
                      <path d='M10 0a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0Zm8.426 9.23h-2.322a6.163 6.163 0 0 0-5.335-5.334V1.574a8.474 8.474 0 0 1 7.657 7.657Zm-9.195 0H5.45a4.624 4.624 0 0 1 3.78-3.78v3.78Zm0 1.54v3.78a4.624 4.624 0 0 1-3.781-3.78h3.78Zm1.538 0h3.781a4.624 4.624 0 0 1-3.78 3.78v-3.78Zm0-1.54V5.45a4.624 4.624 0 0 1 3.781 3.78h-3.78ZM9.231 1.575v2.322a6.164 6.164 0 0 0-5.335 5.335H1.574a8.474 8.474 0 0 1 7.657-7.657ZM1.574 10.77h2.322a6.163 6.163 0 0 0 5.335 5.335v2.322a8.475 8.475 0 0 1-7.657-7.657Zm9.195 7.657v-2.322a6.163 6.163 0 0 0 5.335-5.335h2.322a8.474 8.474 0 0 1-7.657 7.657Z' />
                    </svg>
                  </span>
                  <span>Send Email</span>
                </a>
              </li>
            </ul>

            <div className='hidden lg:block'>
              <img src={footerlogo} alt='' className='h-5' />
            </div>

            {/* <!-- Navigation Toggle --> */}
            <button
              type='button'
              onClick={() => setshow(!show)}
              className='text-white/70 transition hover:text-white lg:hidden'
              data-hs-overlay='#mobile-sidebar'
              aria-controls='mobile-sidebar'
              aria-label='Toggle navigation'
            >
              <span className='sr-only'>Toggle Navigation</span>
              <svg
                className='h-9 w-9 flex-shrink-0'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>
            {/* <!-- End Navigation Toggle --> */}
          </div>

          {/* <!-- Sidebar Mobile  --> */}
          <div
            id='mobile-sidebar'
            className={`hs-overlay fixed bottom-0 start-0 top-0 z-[60]  w-64  transform overflow-y-auto bg-primary transition-all duration-300 ${
              show ? 'translate-x-0' : '-translate-x-full'
            } [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:w-2`}
          >
            <div className='flex h-full flex-col justify-between gap-5 p-5'>
              <div className=''>
                <a href='' className='block'>
                  <img
                    src={prospectiqlogo}
                    alt='ProspectIQ Logo'
                    className='h-8 lg:h-10'
                  />
                </a>
              </div>
              <nav
                className='hs-accordion-group mt-3 flex w-full flex-1 flex-col flex-wrap'
                data-hs-accordion-always-open
              >
                <ul className='flex-1 space-y-1.5'>
                  <li>
                    <a
                      className='group flex items-center gap-3.5 rounded-lg px-2.5 py-2 font-medium text-white transition hover:bg-secondary hover:text-white'
                      onClick={() => navigate('/')}
                    >
                      <span className='text-secondary transition group-hover:text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          stroke='currentColor'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          className='h-5 w-5'
                          viewBox='0 0 24 24'
                        >
                          <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                          <path d='M9 22V12h6v10' />
                        </svg>
                      </span>
                      <span>Manager Dashboard</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className=''>
                <img src='assets/img/iqconnect.png' alt='' className='h-5' />
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Main --> */}
        <main className='h-full flex-1 overflow-y-auto overflow-x-hidden bg-primary bg-hero bg-cover bg-center bg-no-repeat'>
          <div className=' relative h-[100vh] overflow-y-auto overflow-x-hidden rounded-t-2xl bg-neutral-100 p-5 lg:rounded-s-[3rem] lg:rounded-tr-none lg:p-12 2xl:p-16'>
            {/* header */}
            <div className='flex flex-wrap items-start justify-between gap-4'>
              <div className=''>
                <div className='flex flex-wrap gap-x-10 gap-y-2'>
                  <h2
                    id='currentDate'
                    className='text-2xl font-medium lg:text-3xl 2xl:text-4xl'
                  >
                    Wednesday, September 25
                  </h2>
                  <h2
                    id='currentTime'
                    className='text-2xl font-medium lg:text-3xl 2xl:text-4xl'
                  >
                    9:05 AM
                  </h2>
                </div>
                <ul className='mt-4 flex flex-wrap items-center gap-3 md:gap-6'>
                  <li className='text-sm font-medium'>
                    Campaign:
                    <span className='text-blue-600'> IQ1 Leads </span>
                  </li>
                  <li className='text-sm font-medium'>
                    Call Category:
                    <span className='text-blue-600'> Initial Reach </span>
                  </li>
                  <li className='text-sm font-medium'>
                    Lead ID:
                    <span className='text-blue-600'> 1463 </span>
                  </li>
                  <li className='text-sm font-medium'>
                    Last Dialed:
                    <span className='text-blue-600'> 1 week ago </span>
                  </li>
                </ul>
              </div>

              <div className='flex items-center gap-4'>
                <button
                  onClick={() => setOpenSearchModelPopup(true)}
                  className='inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 26.03 26.03'
                    fill='currentColor'
                    className='h-6 w-6'
                  >
                    <path d='M2 11a9 9 0 0 1 15.39-6.34A9 9 0 1 1 2 11Zm23.74 13.32-6.26-6.26a11 11 0 1 0-1.42 1.42l6.26 6.26a1 1 0 0 0 .32.21A1.09 1.09 0 0 0 25 26a1 1 0 0 0 .38-.08.9.9 0 0 0 .54-.54A1 1 0 0 0 26 25a1.09 1.09 0 0 0-.08-.39 1 1 0 0 0-.18-.29Z' />
                  </svg>
                </button>
                <button
                  data-hs-overlay='#call-notes-modal'
                  onClick={() => setOpenCallNotesModelPopup(true)}
                  className='inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6'
                  >
                    <path d='M17 17v3.59L20.59 17ZM2 22h13v-6a1 1 0 0 1 1-1h6V2H2ZM24 2v13.59a2 2 0 0 1-.15.76 1.92 1.92 0 0 1-.44.65L17 23.41a2 2 0 0 1-.65.44 2 2 0 0 1-.76.15H2a2 2 0 0 1-1.41-.59A2 2 0 0 1 0 22V2A2 2 0 0 1 .59.59 2 2 0 0 1 2 0h20a2 2 0 0 1 1.41.59A2 2 0 0 1 24 2ZM12 15H8a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-4-2h8a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z' />
                  </svg>
                </button>
                <button
                  data-hs-overlay='#discard-modal'
                  onClick={() => setOpenDiscardModelPopup(true)}
                  className='inline-flex h-10 w-12 items-center justify-center rounded-full border border-accent-2 p-1 text-accent-2 transition hover:bg-accent-2 hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 26 20'
                    fill='currentColor'
                    className='h-6 w-6'
                  >
                    <path d='m25.71 7.71-6 6A1 1 0 0 1 18 13a1 1 0 0 1 .29-.71L22.59 8H13A11 11 0 0 0 2 19a1 1 0 0 1-.29.71A1 1 0 0 1 1 20a1 1 0 0 1-.71-.29A1 1 0 0 1 0 19 13 13 0 0 1 13 6h9.59l-4.3-4.29a1 1 0 0 1-.21-.33A1 1 0 0 1 18 1a1 1 0 0 1 .08-.38 1.15 1.15 0 0 1 .21-.33A1 1 0 0 1 19 0a1 1 0 0 1 .38.08 1.15 1.15 0 0 1 .33.21l6 6a1.15 1.15 0 0 1 .21.33.94.94 0 0 1 0 .76 1 1 0 0 1-.21.33Z' />
                  </svg>
                </button>
              </div>
            </div>
            {children}

            {/* Search Modal  */}
            {openSearchModelPopup && (
              <>
                <div
                  id='search-modal'
                  ref={refSearchModel}
                  className='hs-overlay pointer-events-none fixed start-0 top-[50px] z-[100]  h-full w-full overflow-y-auto overflow-x-hidden'
                >
                  <div className='m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl'>
                    <div className='pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm'>
                      <div className='px-2 cursor-move pt-1 text-right'>
                        <button
                          type='button'
                          className='inline-flex h-7 w-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                          onClick={() => setOpenSearchModelPopup(false)}
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
                      <div className='overflow-y-auto p-4'>
                        <input
                          type='email'
                          id='input-label'
                          className='block w-full rounded-lg border-2 border-secondary/20 px-4 py-3 text-lg font-medium transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20'
                          placeholder='Search...'
                          autofocus
                        />

                        <div className='mt-6'>
                          <p className='mb-2 font-medium'>Reason for search:</p>
                          <div className='flex flex-wrap items-center gap-2'>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm'
                            >
                              Inbound Call
                            </button>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm'
                            >
                              Reschedule
                            </button>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm'
                            >
                              Callback
                            </button>
                            <button
                              type='button'
                              className='inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-4 py-1.5 text-xs font-semibold text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-6 md:py-2 md:text-sm'
                            >
                              Confirmation
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Moveable
                  target={refSearchModel}
                  draggable={true}
                  throttleDrag={1}
                  edgeDraggable={false}
                  startDragRotate={0}
                  throttleDragRotate={0}
                  onDrag={(e) => {
                    e.target.style.transform = e.transform;
                  }}
                />
              </>
            )}

            {/* Call Notes Modal */}
            {openCallNotesModelPopup && (
              <>
                <div
                  id='call-notes-modal'
                  ref={refCallNotesModel}
                  className='
        hs-overlay
        pointer-events-none
        fixed
        start-0
        top-[50px]
        z-[60]
        
        h-full
        w-full
        overflow-y-auto overflow-x-hidden
      '
                >
                  <div
                    className='
          m-3
          mt-0
         
          transition-all
          ease-out
          hs-overlay-open:mt-7
          hs-overlay-open:opacity-100
          hs-overlay-open:duration-500
          sm:mx-auto sm:w-full sm:max-w-xl
        '
                  >
                    <div
                      className='
            pointer-events-auto
            flex flex-col
            rounded-xl
            border
            bg-white
            shadow-sm
          '
                    >
                      <div
                        className='
              flex
              cursor-move
              items-center
              justify-between
              border-b-[2px] border-b-secondary/20
              px-4
              py-3
            '
                      >
                        <h5 className='text-xl font-semibold'>Call Notes</h5>
                        <button
                          type='button'
                          onClick={() => setOpenCallNotesModelPopup(false)}
                          className='
                inline-flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border border-transparent
                text-sm
                font-semibold
                text-gray-800
                transition
                hover:bg-gray-100
                disabled:pointer-events-none disabled:opacity-50
                dark:text-white
                dark:hover:bg-gray-700
                dark:focus:outline-none
                dark:focus:ring-1
                dark:focus:ring-gray-600
              '
                          data-hs-overlay='#call-notes-modal'
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

                      <div className='overflow-y-auto p-4'>
                        <textarea
                          name=''
                          id=''
                          rows='5'
                          className='
                block
                w-full
                rounded-lg
                border-2 border-secondary/20
                px-4
                py-3
                text-lg
                font-medium
                transition
                focus:border-blue-500
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500/20
              '
                          placeholder='Start typing here...'
                          autofocus
                        ></textarea>
                      </div>

                      <div className='flex items-center justify-between p-4'>
                        <button
                          type='button'
                          className='
                inline-flex
                items-center
                justify-center
                gap-x-2
                rounded-full
                border border-accent-2
                bg-transparent
                px-6
                py-2
                text-lg
                font-medium
                text-accent-2
                transition
                hover:border-accent-2 hover:bg-accent-2 hover:text-white
                focus:outline-none focus:ring focus:ring-primary/20
                disabled:pointer-events-none disabled:opacity-50
              '
                        >
                          Time Stamps
                        </button>

                        <button
                          data-hs-overlay='#call-notes-modal'
                          type='button'
                          onClick={() => setOpenCallNotesModelPopup(false)}
                          className='
                inline-flex
                items-center
                justify-center
                gap-x-2
                rounded-full
                border border-accent-2
                bg-accent-2
                px-6
                py-2
                text-center
                font-medium
                text-white
                transition
                hover:border-primary hover:bg-primary hover:text-white
                focus:outline-none focus:ring focus:ring-primary/20
                disabled:pointer-events-none disabled:opacity-50
                md:px-10 md:text-lg
              '
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Moveable
                  target={refCallNotesModel}
                  draggable={true}
                  throttleDrag={1}
                  edgeDraggable={false}
                  startDragRotate={0}
                  throttleDragRotate={0}
                  onDrag={(e) => {
                    e.target.style.transform = e.transform;
                  }}
                />
              </>
            )}

            {/* Discard Modal  */}
            {openDiscardModelPopup && (
              <div
                id='discard-modal'
                className='hs-overlay pointer-events-none fixed start-0 top-[50px] z-[60]  h-full w-full overflow-y-auto overflow-x-hidden'
              >
                <div className='m-3 mt-0  transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-xl'>
                  <div className='pointer-events-auto flex flex-col rounded-xl border bg-white shadow-sm'>
                    <div className='flex items-center justify-between border-b-[2px] border-b-secondary/20 px-4 py-3'>
                      <h5 className='text-xl font-semibold'>
                        Reasons to discard
                      </h5>
                      <button
                        type='button'
                        className='inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 transition hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                        data-hs-overlay='#discard-modal'
                        onClick={() => setOpenDiscardModelPopup(false)}
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

                    <div className='overflow-y-auto p-4'>
                      <div className='flex flex-col items-center justify-center gap-4'>
                        <a
                          href='/hung-up'
                          className='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
                        >
                          Wrong Contact
                        </a>
                        <a
                          href='/hung-up'
                          className='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
                        >
                          Company not in business
                        </a>
                        <a
                          href='/hung-up'
                          className='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
                        >
                          Do not call
                        </a>
                        <a
                          href='/hung-up'
                          className='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
                        >
                          Unsuitable company
                        </a>
                        <a
                          href='/hung-up'
                          className='inline-flex min-w-40 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-6 py-2 text-center font-medium text-accent-2 transition hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:text-lg'
                        >
                          Current customer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* <script src="assets/js/preline.js"></script>
		<script src="assets/js/tiny-slider.js"></script>
		<script src="assets/js/aos.min.js"></script>
		<script src="assets/js/scripts.js"></script> */}
    </div>
  );
};

export default Dashboard;
