import React from 'react'
import Appointment from '../../Common/Appointment'
import { Dials } from '../../Common/Dials'
import Reaches from '../../Common/Reaches'
import ConnectionRate from '../../Common/ConnectionRate'
import { DialOutcomes } from '../../Common/DialOutcomes'
import { Team } from '../../Common/Team'
import YourProfile from '../../Common/YourProfile'
import CoversionRate from '../../Common/CoversionRate'

export const Tab1 = () => {
  return (
    <div
      id="todays-stats-tab"
      role="tabpanel"
      aria-labelledby="todays-stats-tab-btn"
    >
      <div class="">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment  appointment={15} progress={25}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={50}/>

            {/* <!-- card 3 --> */}

            <Reaches  reaches={30}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate  connectionrate={60}/>

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={60}/>
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={40} hungup={50} callback={25} notinterested={30} email={15} noanswer={40} referral={33} discard={40} />

          {/* <!-- card 7 --> */}
          <YourProfile />
        </div>
      </div>
    </div>
  )
}
