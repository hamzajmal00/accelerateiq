import React, { useEffect } from 'react';
import ContentTab from '../../Common/ContentTab';
import Typewriter from 'typewriter-effect/dist/core';

const CallOptionStep1 = () => {
  const tabs = [
    {
      id: 'script-tab-content',
      label: 'Script',
      content: (
        <div>
          <p className='mt-4 typing-anim text-base font-medium lg:text-lg'>
            <span id='typewriter-script'></span>
          </p>
        </div>
      ),
    },
    {
      id: 'objections-tab-content',
      label: 'Objections',
      content: (
        <div>
          <p className='mt-4 typing-anim text-base font-medium lg:text-lg'>
            <span id='typewriter-objections'></span>
          </p>
        </div>
      ),
    },
    {
      id: 'offers-tab-content',
      label: 'Offers',
      content: (
        <div>
          <p className='mt-4 typing-anim text-base font-medium lg:text-lg'>
            <span id='typewriter-offer'></span>
          </p>
        </div>
      ),
    },
    {
      id: 'voicemail-tab-content',
      label: 'Voicemail',
      content: (
        <p className='mt-4 typing-anim text-base font-medium lg:text-lg'>
          <span id='typewriter-voicemail'></span>
        </p>
      ),
    },
  ];

  useEffect(() => {
    const voicemail = new Typewriter('#typewriter-voicemail', {
      delay: 10,
    });
    voicemail
      .typeString(
        'Hey, this is XXX from XXXXXXX. I wanted to reach out to you personally to share a game-changing idea with you.\n I’m not sure if it’s something you would be interested in, but thought it was worth checking in.'
      )
      .start();
    const script = new Typewriter('#typewriter-script', {
      delay: 10,
    });

    script
      .typeString(
        "<span className='block'>Hi. I'm XXXX from Prospect IQ. How's your day going?</span>" +
          "<span className='mt-4 block'>Great. I know you weren't expecting my call. But could you just spare a few seconds please because I've got a way for you to get ten outbound appointments a day. Would that be helpful?</span>" +
          "<span className='mt-4 block'>[prospect response]</span>" +
          "<span className='mt-4 block'>Well. You know how Instagram uses artificial intelligence to serve up the perfect ad for you to view. And you are like, how did they know I wanted to see the ad for hair spray? It feels like magic but it's not. It's just good old artificial intelligence, right?</span>" +
          "<span className='mt-4 block'>Well, our platform does the same thing but for outbound calling. It knows exactly which prospects to call and when, so there is almost a one hundred percent reach rate. In fact, I just proved to you that it works. I knew to call you because I knew you would pick up and you did. And if there is a one hundred percent connect rate, it means that I am pitching ten times more often and booking ten times more appointments. Does that make sense?</span>" +
          "<span className='mt-4 block'>[prospect response]</span>" +
          "<span className='mt-4 block'>But it doesn't stop there. Once your prospects get on the phone, I know the perfect pitch to give every time, so I am able to convince the prospect to book an appointment. It's almost like I have superhuman persuasion skills! Can I ask how many appointments do you need per month?</span>" +
          "<span className='mt-4 block'>[prospect response]</span>" +
          "<span className='mt-4 block'>Easy. That's totally doable with our system. Let's schedule you for a fifteen-minute demo of our platform with one of our human conversion experts? What day and time works best for you?</span>" +
          "<span className='mt-4 block'>[prospect response]</span>" +
          "<span className='mt-4 block'>Great. I'll lock that time in for you. I'm going to send you a calendar link and some additional information. Well, I'm excited to hear how your call goes, and most importantly to see you get results. So that being said, everything is good to go over here. I hope you have an awesome rest of your day!</span>"
      )
      .start();

    const offer = new Typewriter('#typewriter-offer', {
      delay: 10,
    });
    offer
      .typeString(
        ' This month, we are running a special offer. Your first 100 reaches are for free.'
      )
      .start();

    const objections = new Typewriter('#typewriter-objections', {
      delay: 10,
    });
    objections
      .typeString(
        "<span className=''>Objection 1: How can you know who will pick up the phone?</span>" +
          "<span className='mt-4 block'>Answer 1: We use a combination of big data and artificial intelligence to build a pickup profile of each of your prospects so we know exactly their phone behavior.</span>" +
          "<span className='mt-4 block'>Objection 2: We already use sales force.</span>" +
          "<span className='mt-4 block'>Answer 2: That's great. Sales force is a great. Our software sits on top of sales force and fully integrates with the platform. All it is allowing you to do is reach more of your prospects that are currently in your sales system.</span>" +
          "<span className='mt-4 block'>Objection 3: What counts as a reach?</span>" +
          "<span className='mt-4 block'>Answer 3: A reach is when someone picks up the phone. It is not a voicemail or an operator.</span>"
      )
      .start();
  }, []);
  return (
    <>
      <div className='h-full max-h-[450px] min-h-[360px] overflow-y-auto overflow-x-hidden rounded-2xl bg-white/50 p-6 2xl:p-10 [&::-webkit-scrollbar-thumb]:bg-secondary/80 [&::-webkit-scrollbar-track]:bg-secondary/20 [&::-webkit-scrollbar]:w-2'>
        <ContentTab tabs={tabs} />
      </div>
    </>
  );
};

export default CallOptionStep1;
