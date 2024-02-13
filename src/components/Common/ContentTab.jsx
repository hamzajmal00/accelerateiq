import { useState } from 'react';

const ContentTab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <nav className='tab flex flex-col flex-wrap items-center justify-center gap-2'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type='button'
            role='tab'
            data-tab={tab.id}
            className={`inline-flex min-w-24 items-center justify-center gap-x-2 rounded-full border border-accent-2 bg-transparent px-2 py-1 text-center text-sm font-medium leading-none text-accent-2 transition-colors hover:border-accent-2 hover:bg-accent-2 hover:text-white focus:outline-none focus:ring focus:ring-primary/20 disabled:pointer-events-none disabled:opacity-50 md:min-w-32 md:px-4 md:py-2 2xl:text-base ${
              activeTab === tab.id ? 'active' : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className=' tab-pane'>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={tab.id}
            className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>

      <style jsx>{`
        .active {
          display: block !important;
        }

        .tab-content {
          /* Define your tab content styles here */
        }

        .tab-pane {
          display: block;
        }

        .tab-pane.active {
          display: block;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .typewriter {
          //   overflow: hidden;
          //   white-space: nowrap;
        }

        .typewriter > span {
          display: inline-block;
          animation: typing 3.5s steps(40, end),
            blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </>
  );
};

export default ContentTab;
