import React, { useState } from 'react';

import Graph from '../components/Graph';
import { Days } from '../components/Days';

export const Panel = () => {
  // // React hooks with common state values for all components
  // const [selectedGroup, setSelectedGroup] = useState('All');
  // const [groupColour, setGroupColour] = useState('lightgrey');

  // //function that will hook into the state to change it
  // function updateBarChart(group: any, colour: string) {
  //   setSelectedGroup(group);
  //   setGroupColour(colour);
  // }
  return (
    <div className=" bg-gray-960 py-12 px-10 w-p420 text-xs">
      <div className="flex flex-row justify-between">
        <div>
          <p className=" text-gray-dark ">Baseline End Date</p>
          <p className=" text-blue-100 text-sm font-semibold">22 Dec 2020</p>
        </div>
        <div>
          <p className=" text-gray-dark ">Expected End Date</p>
          <p className=" text-yellow-dark text-sm font-semibold">24 Dec 2020</p>
        </div>
        <div>
          <p className=" text-gray-dark">Variance</p>
          <p className=" text-yellow-dark text-sm font-semibold">
            +2 days{' '}
            <span className=" text-gray-dark text-xxs font-light">↑4%</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between content-center pt-12">
        <Graph />

        <Days />
      </div>
    </div>
  );
};
