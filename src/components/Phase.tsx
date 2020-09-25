import React, { useEffect, useState } from 'react';
import { format, differenceInDays, subDays, sub } from 'date-fns';

import { Phase } from '../testData';

export const PhaseBar = ({
  name,
  endDate,
  startDate,
  totalDays,
  completedDays,
  overdueDays,
}: Phase) => {
  const [progressText, setProgressText] = useState('');
  const [progressTextColor, setProgressTextColor] = useState('#263238');
  //const [progressDays, setProgressDays] = useState();
  useEffect(() => {
    if (completedDays === totalDays) {
      setProgressText('as planned');
    } else if (completedDays < totalDays && completedDays !== 0) {
      setProgressText('more');
      setProgressTextColor('#F7A700');
    } else if (completedDays > totalDays) {
      setProgressText('overdue');
      setProgressTextColor('#F17261');
    } else {
      setProgressText('days of work');
    }
  }, []);
  const daysLeft1 = Math.abs(totalDays - completedDays);
  const endDateFormat = format(endDate, 'dd/MM/yyyy');

  return (
    <div className="py-2">
      <p className="text-blue-100">{name}</p>
      <div
        className="flex h-4 my-2 "
        style={{
          backgroundColor: 'grey',
          width: ` ${(totalDays / 46) * 100}%`,
        }}
      >
        <div
          role="progressbar"
          style={{
            width: `${(completedDays / totalDays) * 100}%`,
            backgroundColor: `${
              (completedDays / totalDays) * 100 > 100 ? '#f17261' : '#19435e'
            }`,
          }}
        />
        <div
          role="progressbar"
          style={{
            width: `${(daysLeft1 / totalDays) * 100}`,
            backgroundColor: '#F7A700',
          }}
        />
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
