import React from 'react'
import { useTypeWriter } from '../../../hooks/useTypeWriter'

const ScriptTab = () => {

    const content=`  
  
        <span className="">
            Hi. I'm XXXX from Prospect IQ. How's your day going?
        </span>

        <span className="mt-4">
            Great. I know you weren't expecting my call. But
            could you just spare a few seconds please because
            I've got a way for you to get ten outbound
            appointments a day. Would that be helpful?
        </span>

        <span className="mt-4"> [prospect response] </span>

        <span className="mt-4">
            Well. You know how Instagram uses artificial
            intelligence to serve up the perfect ad for you to
            view And you are like how did they know I wanted to
            see the ad for hair spray? It feels like magic but
            it's not. Its just good old artificial intelligence
            right?
        </span>

        <span className="mt-4">
            Well. our platform does the same thing but for
            outbound calling. It knows exactly which prospects
            to call and when so there is almost a one hundred
            percent reach rate. In fact, I just proved to you
            that it works. I knew to call you because I knew you
            would pick up and you did and if there is a one
            hundred percent connect rate, it means that I am
            pitching ten times more often and booking ten times
            more appointments. Does that make sense?
        </span>

        <span className="mt-4"> [prospect response] </span>

        <span className="mt-4">
            But it doesn't stop there. Once your prospects get
            on the phone, I know the perfect pitch to give every
            time so I am able to convince the prospect to book
            an appointment. Its almost like I have super human
            persuasion skills! Can I ask how many appointments
            do you need per month?
        </span>

        <span className="mt-4"> [prospect response] </span>

        <span className="mt-4">
            Easy. That's totally doable with our system. Lets
            schedule you for a fifteen minute demo of our
            platform with one of our human conversion experts?
            What day and time works best for you?
        </span>

        <span className="mt-4"> [prospect response] </span>

        <span className="mt-4">
            Great. I'll lock that time in for you. I'm going to
            send you a calendar link and some additional
            information.Well, I'm excited to hear how your call
            goes, and most importantly to see you get results.
            So that being said, everything is good to go over
            here. I hope you have an awesome rest of your day!
        </span>
   
`

    const {displayResponse} = useTypeWriter(content,true)
  return (
    <p id="typed" className="text-base font-medium lg:text-lg"  dangerouslySetInnerHTML={{ __html: displayResponse }}>

</p>
   
  )
}

export default ScriptTab