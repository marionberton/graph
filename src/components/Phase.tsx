import React, { useEffect, useState } from 'react';
import { format, differenceInDays, subDays, sub, isAfter } from 'date-fns';

import { Phase } from '../testData';

enum BarType {
  future,
  overdue,
  completed,
  active
}

export const PhaseBar = ({
  phase: { name, endDate, startDate, totalDays, completedDays, overdueDays },
  maxTotalDays,
}: {
  phase: Phase;
  maxTotalDays: number;
}) => {
  const daysLeft1 = Math.abs(totalDays - completedDays);
  const barType: BarType = isAfter(startDate, new Date) ? BarType.future : overdueDays > 0 ? BarType.overdue : daysLeft1 > 0 ? BarType.active : BarType.completed;
  const progressText =
    barType === BarType.overdue
      ? 'overdue'
      : barType === BarType.completed
      ? 'as planned'
      : barType === BarType.active
      ? 'more'
      : 'days of work';
  const bgBarColourClass = barType === BarType.overdue ?
    'bg-red-500' :
    barType === BarType.future ? 'bg-blue-700' : 'bg-blue-500';
  const bgColour = overdueDays > 0 ?
    '#FF00000' :
    isAfter(startDate, new Date) ? '#66AABB' : '#BBEEEE';
  const progressTextColor = '#263238';
  //const [progressDays, setProgressDays] = useState();
  // useEffect(() => {
  //   if (completedDays === totalDays) {
  //     setProgressText('as planned');
  //   } else if (completedDays < totalDays && completedDays !== 0) {
  //     setProgressText('more');
  //     setProgressTextColor('#F7A700');
  //   } else if (completedDays > totalDays) {
  //     setProgressText('overdue');
  //     setProgressTextColor('#F17261');
  //   } else {
  //     setProgressText('days of work');
  //   }
  // }, []);
  const endDateFormat = format(endDate, 'dd/MM/yyyy');

  return (
    <div className="py-2">
      <p className="text-blue-100">{name}</p>
      <div
        className={`flex h-4 my-2 ${bgBarColourClass} relative`}
        style={{
          backgroundColor: bgColour,
          width: ` ${(totalDays / maxTotalDays) * 100}%`,
        }}
      >
        {
          barType === BarType.active ? (
            <div
              className="absolute bottom-0 top-0 right-0"
              role="progressbar"
              style={{
                width: `${(daysLeft1 / totalDays) * 100}%`,
                backgroundColor: '#F7A700',
              }}
            />
          ) : null
        }

      </div>
      <div className="flex justify-between text-green-100">
        <p>
          <span className={`${completedDays === 0 ? 'hidden' : 'visible'}`}>
            {`${completedDays} ${completedDays === 1 ? 'day' : 'days'} / `}
          </span>
          <span
            className={`${daysLeft1 === 0 ? 'hidden' : 'visible'}`}
            style={{ color: progressTextColor }}
          >
            {daysLeft1}
          </span>
          <span style={{ color: progressTextColor }}> {progressText}</span>
        </p>
        <p style={{ color: '#838385' }}>{`${
          completedDays === 0 || overdueDays > 0 ? 'Planned' : 'Ended'
        } ${endDateFormat}`}</p>
      </div>
    </div>
  );
};
