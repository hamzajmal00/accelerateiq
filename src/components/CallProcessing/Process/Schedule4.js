import React from 'react'
import Lottie from 'react-lottie-player'
import loti from "../../../data/lotte.json"
const Schedule4 = ({setIndex}) => {
  return (
 <><div
 class="h-full max-h-[450px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/30 p-6 md:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2">
 <div class="relative h-full min-h-[200px]">
     <p
         class="text-center text-base font-medium lg:text-lg xl:text-xl">
         Congratulations! Your appointment has been scheduled.
     </p>

     <h2
         class="mt-10 text-center text-2xl font-semibold md:text-3xl xl:mt-20">
         Way to go!
     </h2>

     <div class="absolute inset-0">
        <Lottie play
      style={{ width: "100%", height: "100%" }} animationData={loti}></Lottie>
      
     </div>
 </div>
</div>
<div class="flex flex-wrap items-center justify-between gap-2">
								<a
									onClick={()=>setIndex(4)}
									class="inline-flex items-center gap-x-2 text-gray-800 transition hover:text-secondary">
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
										onClick={()=>setIndex(0)}
									class="inline-flex items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-accent-2 px-6 py-2 text-center font-medium text-white transition hover:border-primary hover:bg-primary hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:px-10 md:text-lg">
									Finish
								</a>
							</div>
</>
  )
}

export default Schedule4