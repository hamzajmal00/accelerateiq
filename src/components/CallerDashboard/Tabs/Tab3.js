import React from "react";
import YourProfile from "../../Common/YourProfile";
import { Dials } from "../../Common/Dials";
import Reaches from "../../Common/Reaches";
import Appointment from "../../Common/Appointment";
import ConnectionRate from "../../Common/ConnectionRate";
import CoversionRate from "../../Common/CoversionRate";
import { DialOutcomes } from "../../Common/DialOutcomes";

export const Tab3 = () => {
  return (
    <div
      id="this-month-tab"
      role="tabpanel"
      aria-labelledby="this-month-tab-btn"
    >
      <div class="">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
          {/* <!-- card 1 --> */}
          <Appointment appointment={150} progress={70} />

          <div class="grid gap-5">
            {/* <!-- card 2 --> */}
            <Dials dials={200} />

            {/* <!-- card 3 --> */}

            <Reaches reaches={130} />
          </div>

          <div class="grid gap-5">
            {/* <!-- card 4 --> */}
            <ConnectionRate connectionrate={70} />

            {/* <!-- card 5 --> */}
            <CoversionRate conversionrate={60} />
          </div>

          {/* <!-- card 6 --> */}
          <DialOutcomes appointment={40} hungup={40} callback={25} notinterested={40} email={15} noanswer={30} referral={33} discard={60} />


          {/* <!-- card 7 --> */}
          <YourProfile />
        </div>
      </div>
    </div>
  );
};
