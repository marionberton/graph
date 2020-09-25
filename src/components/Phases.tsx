import React from 'react';
import { sub } from 'date-fns';

import { PhaseBar } from './Phase';
import { TimelineObjectType, demoData } from '../testData';
import { MilestoneGraph } from './Milestone';

export const Phases = () => {
  console.log('sub', sub(new Date(2020, 3, 24), { days: 46 }));
  return (
    <div>
      <div className="inline-flex ">
        <p className="">Phases</p>
        <div className=" bg-gray-light rounded-lg flex flex-col w-p102 text-center place-content-center px-3 py-6 ml-12">
          <p className="text-blue-100 font-bold text-xs">2/4 phases</p>
        </div>
      </div>
      <PhaseBar
        __typename={TimelineObjectType.phase}
        name={'Phase 1'}
        startDate={new Date(2020, 0, 8)}
        endDate={new Date(2020, 1, 14)}
        completedDays={34}
        totalDays={37}
        overdueDays={0}
      />
      <PhaseBar
        name={'Phase 2'}
        endDate={new Date(2020, 2, 16)}
        __typename={TimelineObjectType.phase}
        startDate={new Date(2020, 1, 3)}
        completedDays={42}
        totalDays={42}
        overdueDays={0}
      />
      <PhaseBar
        name={'Phase 3'}
        endDate={new Date(2020, 3, 16)}
        __typename={TimelineObjectType.phase}
        startDate={new Date(2020, 2, 24)}
        completedDays={23}
        totalDays={21}
        overdueDays={2}
      />
      <MilestoneGraph
        __typename={TimelineObjectType.milestone}
        name={'Milestone 3'}
        dueDate={new Date(2020, 3, 18)}
      />
      <PhaseBar
        name={'Phase 4'}
        endDate={new Date(2020, 3, 14)}
        __typename={TimelineObjectType.phase}
        startDate={new Date(2020, 2, 9)}
        completedDays={0}
        totalDays={46}
        overdueDays={0}
      />
    </div>
  );
};
