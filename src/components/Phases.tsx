import React from 'react';
import { sub } from 'date-fns';
import { demoData, TimelineObjectType } from '../testData';
import { MilestoneGraph } from './Milestone';
import { PhaseBar } from './Phase';


export const Phases = () => {
  console.log('sub', sub(new Date(2020, 3, 24), { days: 46 }));
  const maxTotalDays = demoData.reduce((currentMaxDays, demoEntry) => {
    if (demoEntry.__typename === TimelineObjectType.phase && demoEntry.totalDays > currentMaxDays) {
      return demoEntry.totalDays
    } else {
      return currentMaxDays;
    }
  }, 0);

  return (
    <div>
      <div className="inline-flex ">
        <p className="">Phases</p>
        <div className=" bg-gray-light rounded-lg flex flex-col w-p102 text-center place-content-center px-3 py-6 ml-12">
          <p className="text-blue-100 font-bold text-xs">2/4 phases</p>
        </div>
      </div>
      {
        demoData.map((demoEntry, index) => {
          if (demoEntry.__typename === TimelineObjectType.milestone) {
            return <MilestoneGraph key={`milestone_${index}`} milestone={demoEntry} />
          }  else {
            return <PhaseBar key={`phase_${index}`}phase={demoEntry} maxTotalDays={maxTotalDays} />
          }
        })
      }
    </div>
  );
};
