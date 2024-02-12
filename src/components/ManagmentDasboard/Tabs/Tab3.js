import React from 'react'
import Appointment from '../../Common/Appointment'
import { Dials } from '../../Common/Dials'
import Reaches from '../../Common/Reaches'
import ConnectionRate from '../../Common/ConnectionRate'
import CoversionRate from '../../Common/CoversionRate'
import { Team } from '../../Common/Team'
import { DialOutcomes } from '../../Common/DialOutcomes'

const Tab3 = () => {
  return (
    <div
            id="this-month-tab"
            role="tabpanel"
            aria-labelledby="this-month-tab-btn"
          >
            <div class="">
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment  appointment={150} progress={70}/>

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={200}/>

            {/* <!-- card 3 --> */}

            <Reaches reaches={130}/>
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate connectionrate={80}/>

            {/* <!-- card 5 --> */}
            <CoversionRate converstionrate={75} />
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={40} hungup={40} callback={25} notinterested={40} email={15} noanswer={30} referral={33} discard={60} />


          {/* <!-- card 7 --> */}
          <Team />
        </div>
            </div>
          </div>
  )
}

export default Tab3