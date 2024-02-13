import React, { useState } from 'react';
import ManagerDashboard from '../../pages/CallerDashboard';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';
import Tab3 from './Tabs/Tab3';

const MangerDashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ManagerDashboard>
      {' '}
      <div class='border-b border-gray-200'>
        <nav
          class='flex space-x-4 lg:space-x-8'
          aria-label='Tabs'
          role='tablist'
        >
          <button
            type='button'
            class={`${
              tabIndex == 0 && 'active'
            } inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
            id='todays-stats-tab-btn'
            data-hs-tab='#todays-stats-tab'
            aria-controls='todays-stats-tab'
            onClick={() => setTabIndex(0)}
            role='tab'
          >
            Today's Stats
          </button>
          <button
            type='button'
            class={`${
              tabIndex == 1 && 'active'
            } inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
            id='this-week-tab-btn'
            data-hs-tab='#this-week-tab'
            aria-controls='this-week-tab'
            onClick={() => setTabIndex(1)}
            role='tab'
          >
            This Week
          </button>
          <button
            type='button'
            class={`${
              tabIndex == 2 && 'active'
            } inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-transparent px-1 py-4 font-medium text-primary/40 transition hover:text-primary focus:text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-tab-active:border-secondary hs-tab-active:text-secondary`}
            id='this-month-tab-btn'
            data-hs-tab='#this-month-tab'
            aria-controls='this-month-tab'
            onClick={() => setTabIndex(2)}
            role='tab'
          >
            This Month
          </button>
        </nav>
      </div>
      {/* <!-- Tab contents --> */}
      <div class='mt-8 flex-1'>
        {tabIndex == 0 && <Tab1 />}

        {tabIndex == 1 && <Tab2 />}

        {tabIndex == 2 && <Tab3 />}
      </div>
    </ManagerDashboard>
  );
};

export default MangerDashboard;
