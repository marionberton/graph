import React, { useState, useRef } from 'react';
import * as d3 from 'd3';
import { donutChartData } from '../testData';
// import { PieSlice } from './PieSlice';

const Graph = () => {
  const [selectedCount, setSelectedCount] = useState();

  const onClickSlice = (value: any) => {
    setSelectedCount(value);
  };

  const height = 400;
  const width = 400;
  const pieSlicesData = d3.pie()(donutChartData.map((item) => item.measure));
  // console.log(pieSlicesData);
  const colorScale = d3
    // .scaleOrdinal()
    // .domain(['To do', 'Overdue', 'In Progress', 'Total done'])
    // .range(['#ECEEF0', '#EF7365', '#41A2B0', '#2A6183']);
    .scaleOrdinal(d3.schemeCategory10);

  const slices = pieSlicesData.map((pieSliceData, index) => (
    // console.log('data', pieSliceData.value);
    //console.log('CS', colorScale(`col-${index % 10}`));
    // console.log(index % 10);
    <g
      transform={`translate(${width / 2}, ${height / 2})`}
      key={pieSliceData.index}
      onClick={() => onClickSlice(pieSliceData.value)}
    >
      <path
        d={
          d3.arc()({
            endAngle: pieSliceData.endAngle,
            innerRadius: 100,
            outerRadius: 150,
            padAngle: pieSliceData.padAngle,
            startAngle: pieSliceData.startAngle,
          }) || undefined
        }
        fill={colorScale(`col-${index % 10}`)}
        transform="translate(0, 0)"
      />
      <text x="0" y="-1.5em" textAnchor="middle" fill="grey">
        <tspan dy="1em" style={{ fontSize: '24px' }}>
          {selectedCount}
        </tspan>
        <tspan dy="1.5em" x="0.3em">
          days left
        </tspan>
      </text>
    </g>
  ));

  return (
    <>
      <svg width={width} height={height}>
        {/* <g transform={`translate(${width / 2}, ${height / 2})`}> */}

        {slices}
        {/* </g> */}
      </svg>
      <div style={{ backgroundColor: 'grey' }}>
        {donutChartData.map((text) => (
          <div key={text.group}>
            <span>
              <p>{text.group}</p>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Graph;
