import React from 'react';

const Referral4 = () => {
  return (
    <div class='h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <div class='space-y-4'>
        <p class='text-base font-medium lg:text-lg xl:text-xl'>
          What is the best email address to reach the new contact?
        </p>

        <form id='add-referral-form' class='' onsubmit='handleSubmit(event)'>
          <div class='space-y-4'>
            <div class='relative'>
              <input
                type='text'
                id='contact-name-2'
                class='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                placeholder='Contact Name'
                value='John Jacobs'
              />
              <label
                for='contact-name-2'
                class='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
              >
                Contact Name
              </label>
            </div>

            <div class='relative'>
              <input
                type='text'
                id='title2'
                class='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                placeholder='Title'
                value='Senior Sales Manager'
              />
              <label
                for='title2'
                class='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
              >
                Title
              </label>
            </div>

            <div class='grid grid-cols-1 gap-4 xl:grid-cols-2'>
              <div class='relative'>
                <input
                  type='tel'
                  id='phone2'
                  class='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                  placeholder='Best Phone Number'
                  value='(949) 293-0707'
                />
                <label
                  for='phone2'
                  class='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                >
                  Best Phone Number
                </label>
              </div>

              <div class='relative'>
                <input
                  type='text'
                  id='timezone2'
                  class='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                  placeholder='Time Zone'
                  value='EST'
                />
                <label
                  for='timezone2'
                  class='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
                >
                  Time Zone
                </label>
              </div>
            </div>

            <div class='relative'>
              <input
                type='email'
                id='email-2'
                class='peer block w-full border-b-2 border-x-transparent border-b-secondary/20 border-t-transparent bg-transparent px-0 py-4 text-xl font-medium transition placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-x-transparent focus:border-b-secondary focus:border-t-transparent focus:pb-2 focus:pt-6 focus:outline-none focus:ring-0 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6'
                placeholder='Email'
                value='johnjacobs@business.com'
              />
              <label
                for='email-2'
                class='pointer-events-none absolute start-0 top-0 flex h-full origin-top-left items-center truncate border border-transparent px-0 font-medium transition duration-100 ease-in-out peer-focus:-translate-y-3 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500'
              >
                Email
              </label>
            </div>

            <p class='text-xs font-semibold'>Press Enter to continue</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Referral4;
