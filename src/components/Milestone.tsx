import React from 'react';
import { format } from 'date-fns';

import { Milestone } from '../testData';
import rectangle from './Rectangle.svg';

export const MilestoneGraph = ({
  milestone: { dueDate, name },
}: {
  milestone: Milestone;
}) => {
  const dueDateFormat = format(dueDate, 'dd MMMM yyyy');
  return (
    <div className="flex flex-col py-2">
      <p>Milestone </p>
      <div className="flex flex-row my-2">
        <img src={rectangle} />
        <p className=" text-gray-410 text-xxs">{dueDateFormat}</p>
      </div>
    </div>
  );
};
