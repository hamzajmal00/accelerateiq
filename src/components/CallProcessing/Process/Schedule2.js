import React from 'react'

const Schedule2 = ({setIndex}) => {
    const handleTimeBtnClick =()=>{
        setIndex(4)
    }
  return (
    <><div
    class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
    <div class="">
        <p
            class="text-center text-base font-medium lg:text-lg xl:text-xl">
            What time did you schedule the appointment for?
        </p>

        {/* <!-- Times --> */}
        <div
            class="mt-6 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 lg:gap-4">
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                9:00 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                9:30 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                10:00 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                10:30 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                11:00 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                11:30 AM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                12:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                12:30 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                1:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                1:30 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                2:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                2:30 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                3:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                3:30 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                4:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                4:30 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                5:00 PM
            </button>
            <button
                onClick={handleTimeBtnClick}
                type="button"
                class="rounded-md bg-secondary/10 px-4 py-2 font-medium transition hover:bg-secondary/30 md:text-lg">
                5:30 PM
            </button>
        </div>
    </div>
</div>

<div class="flex flex-wrap items-center justify-between gap-2">
    <a
        onClick={()=>setIndex(2)}
        class="inline-flex items-center gap-x-2 text-sm text-gray-800 transition hover:text-secondary">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-4 w-4"
            viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Go Back
    </a>
    <a
        onClick={()=>setIndex(4)}
        class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-10 py-2 text-lg font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50">
        Next

        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            class="h-4 w-4"
            viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </a>
</div></>
  )
}

export default Schedule2