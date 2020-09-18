import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { donutChartData } from '../testData';
// import { PieSlice } from './PieSlice';

// interface Props {
//   data: number[];
//   width: number;
//   height: number;
//   innerRadius: number;
//   outerRadius: number;
// }

const Graph = () => {
  const ref = useRef(null);
  const height = 400;
  const width = 400;

  const createPie = d3.pie()(donutChartData.map((item) => item.number));

  
  // const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  // const renderSlice = (measure: any) => {
  //   const index = measure.index;
  //   return (
  //     <PieSlice
  //       key={index}
  //       index={index}
  //       value={measure}
  //       fill={colorScale(index)}
  //     />
  //   );
  // };
  // let pieChart = d3.pie().sort(null);

  // const measures = donutChartData.map((item) => item.measure);

  return (
    <svg>
      <g transform={`translate(${width / 2}, ${height / 2})`}>
        {/* <PieSlice pie={pie} /> */}
      </g>
    </svg>
  );
};

// interface Props {
//   pie: any;
// }
// const PieSlice: React.FC<Props> = ({ pie }) => {
//   let arc = d3.arc().innerRadius(60).outerRadius(100);

//   let interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');

//   return pie.map((slice: any, index: number) => {
//     let sliceColor = interpolate(index / (pie.length - 1));

//     return <path d={arc(slice)} fill={sliceColor} />;
//   });
// };

export default Graph;
