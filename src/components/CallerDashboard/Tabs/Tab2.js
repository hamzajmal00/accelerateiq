import React from 'react'
import YourProfile from '../../Common/YourProfile'
import { Dials } from '../../Common/Dials'
import Appointment from '../../Common/Appointment'
import ConnectionRate from '../../Common/ConnectionRate'
import CoversionRate from '../../Common/CoversionRate'
import { DialOutcomes } from '../../Common/DialOutcomes'
import Reaches from '../../Common/Reaches'

const Tab2 = () => {
  return (
    <div id="this-week-tab" role="tabpanel" aria-labelledby="this-week-tab-btn">
    <div class="">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment  appointment={30} progress={40}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={150}/>

            {/* <!-- card 3 --> */}

            <Reaches  reaches={60}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate  connectionrate={70}/>

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={80}/>
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={50} hungup={60} callback={33} notinterested={70} email={18} noanswer={35} referral={10} discard={45} />


          {/* <!-- card 7 --> */}
          <YourProfile />
        </div>
    </div>
  </div>
  )
}

export default Tab2