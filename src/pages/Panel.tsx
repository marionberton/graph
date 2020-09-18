import React from 'react';

import Graph  from '../components/Graph';
import { Days } from '../components/Days';

export const Panel = () => {
 const data = [10, 25, 30, 35];
  return (
    <div className="bg-gray-lightest p-6">
      <div className="flex flex-row justify-between">
        <div>
          <p className=" text-gray-dark">Baseline End Date</p>
          <p>22 Dec 2020</p>
        </div>
        <div>
          <p className=" text-gray-dark">Expected End Date</p>
          <p className=" text-yellow">24 Dec 2020</p>
        </div>
        <div>
          <p className=" text-gray-dark">Variance</p>
          <p>
            +2 days <span>↑4%</span>
          </p>
        </div>
      </div>
      <div className="flex justify-between">
        <Graph
          // data={data}
          // width={200}
          // height={200}
          // innerRadius={60}
          // outerRadius={100}
        />
        <Days />
      </div>
    </div>
  );
};
