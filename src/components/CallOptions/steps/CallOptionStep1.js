import React from 'react';

const CallOptionStep1 = () => {
  return (
    <div class='h-full max-h-[450px] min-h-[360px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/50 p-6 2xl:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
      <h4
        id='scriptsHeading'
        class='mb-6 text-center text-lg font-semibold xl:text-xl'
      >
        What would you like to see?
      </h4>

      <nav class='tab flex flex-col flex-wrap items-center justify-center gap-2'>
        <button
          type='button'
          role='tab'
          data-tab='script-tab-content'
          class='inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base'
        >
          Script
        </button>
        <button
          type='button'
          role='tab'
          data-tab='objections-tab-content'
          class='inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base'
        >
          Objections
        </button>
        <button
          type='button'
          role='tab'
          data-tab='offers-tab-content'
          class='inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base'
        >
          Special Offer
        </button>
        <button
          type='button'
          role='tab'
          data-tab='voicemail-tab-content'
          class='inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base'
        >
          Voicemail
        </button>
      </nav>

      <div class='mt-6'>
        <div id='script-tab-content' class='tab-content'>
          <p class='typing-anim text-base font-medium lg:text-lg'>
            <span class='block'>
              Hi. I'm XXXX from Prospect IQ. How's your day going?
            </span>

            <span class='mt-4 block'>
              Great. I know you weren't expecting my call. But could you just
              spare a few seconds please because I've got a way for you to get
              ten outbound appointments a day. Would that be helpful?
            </span>

            <span class='mt-4 block'> [prospect response] </span>

            <span class='mt-4 block'>
              Well. You know how Instagram uses artificial intelligence to serve
              up the perfect ad for you to view And you are like how did they
              know I wanted to see the ad for hair spray? It feels like magic
              but it's not. Its just good old artificial intelligence right?
            </span>

            <span class='mt-4 block'>
              Well. our platform does the same thing but for outbound calling.
              It knows exactly which prospects to call and when so there is
              almost a one hundred percent reach rate. In fact, I just proved to
              you that it works. I knew to call you because I knew you would
              pick up and you did and if there is a one hundred percent connect
              rate, it means that I am pitching ten times more often and booking
              ten times more appointments. Does that make sense?
            </span>

            <span class='mt-4 block'> [prospect response] </span>

            <span class='mt-4 block'>
              But it doesn't stop there. Once your prospects get on the phone, I
              know the perfect pitch to give every time so I am able to convince
              the prospect to book an appointment. Its almost like I have super
              human persuasion skills! Can I ask how many appointments do you
              need per month?
            </span>

            <span class='mt-4 block'> [prospect response] </span>

            <span class='mt-4 block'>
              Easy. That's totally doable with our system. Lets schedule you for
              a fifteen minute demo of our platform with one of our human
              conversion experts? What day and time works best for you?
            </span>

            <span class='mt-4 block'> [prospect response] </span>

            <span class='mt-4 block'>
              Great. I'll lock that time in for you. I'm going to send you a
              calendar link and some additional information.Well, I'm excited to
              hear how your call goes, and most importantly to see you get
              results. So that being said, everything is good to go over here. I
              hope you have an awesome rest of your day!
            </span>
          </p>
        </div>
        <div id='objections-tab-content' class='tab-content'>
          <p class='typing-anim text-base font-medium lg:text-lg'>
            <span class=''>
              Objection 1: How can you know who will pick up the phone?
            </span>

            <span class='mt-4 block'>
              Answer 1: We use a combination of big data and artificial
              intelligence to build a pickup profile of each of your prospects
              so we know exactly their phone behavior.
            </span>

            <span class='mt-4 block'>
              Objection 2: We already use sales force.
            </span>

            <span class='mt-4 block'>
              Answer 2: That's great. Sales force is a great. Our software sits
              on top of sales force and fully integrates with the platform. All
              it is allowing you to do is reach more of your prospects that are
              currently in your sales system.
            </span>

            <span class='mt-4 block'>Objection 3: What counts as a reach?</span>

            <span class='mt-4 block'>
              Answer 3: A reach is when someone picks up the phone. It is not a
              voicemail or an operator.
            </span>
          </p>
        </div>
        <div id='offers-tab-content' class='tab-content'>
          <p class='typing-anim text-base font-medium lg:text-lg'>
            <span class=''>
              This month, we are running a special offer. Your first 100 reaches
              are for free.
            </span>
          </p>
        </div>
        <div id='voicemail-tab-content' class='tab-content'>
          <p class='typing-anim text-base font-medium lg:text-lg'>
            <span class=''>
              Hey, this is XXX from XXXXXXX. I wanted to reach out to you
              personally to share a game changing idea with you. I’m not sure if
              it’s something you would be interested in, but thought it was
              worth checking in.
            </span>
            <span class='mt-4 block'>
              Give me a call back at (555) 555-7349
            </span>

            <span class='mt-4 block'>Look forward to hearing from you!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallOptionStep1;
