import React, { useState, useRef } from 'react';
import * as d3 from 'd3';
import { donutChartData } from '../testData';
// import { PieSlice } from './PieSlice';

const Graph = () => {
  const [selectedCount, setSelectedCount] = useState();

  const onClickSlice = (value: any) => {
    setSelectedCount(value);
  };

  const height = 80;
  const width = 80;
  const pieSlicesData = d3.pie()(donutChartData.map((item) => item.measure));
  // console.log(pieSlicesData);
  const colorScale = d3
    // .scaleOrdinal()
    // .domain(['To do', 'Overdue', 'In Progress', 'Total done'])
    // .range(['#ECEEF0', '#EF7365', '#41A2B0', '#2A6183']);
    .scaleOrdinal(d3.schemeCategory10);

  const slices = pieSlicesData.map((pieSliceData, index) => (
    //console.log('data', pieSliceData);

    //console.log('CS', colorScale(`col-${index % 10}`));
    // console.log(index % 10);
    <g
      transform={`translate(${width / 2}, ${height / 2})`}
      key={pieSliceData.index}
      onClick={() => onClickSlice(pieSliceData.value)}
      className="  hover:cursor-pointer"
    >
      <path
        d={
          d3.arc()({
            endAngle: pieSliceData.endAngle,
            innerRadius: 30,
            outerRadius: 40,
            padAngle: pieSliceData.padAngle,
            startAngle: pieSliceData.startAngle,
          }) || undefined
        }
        fill={colorScale(`col-${index % 10}`)}
        transform="translate(0, 0)"
      />
      {selectedCount && (
        <text x="0" y="-1.5em" textAnchor="middle" fill={'#4a4a4a'}>
          <tspan dy="1em" className="text-sm  tracking-wider">
            {selectedCount}
          </tspan>
          <tspan
            dy="1.5em"
            x="0.1em"
            fill={'#9b9b9b'}
            className=" text-xxs font-light"
          >
            days left
          </tspan>
        </text>
      )}
    </g>
  ));

  return (
    <>
      <svg width={width} height={height}>
        {slices}
      </svg>
      <div className=" flex flex-col  place-content-center">
        {donutChartData.map((text) => (
          <div key={text.group}>
            <span>
              <p
                className="text-xxs antialiased "
                style={{ color: ` ${text.colour}` }}
              >{`${text.group} ${text.percent * 100}% / ${
                text.measure
              } days `}</p>
              {console.log('cS', text.colour)}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Graph;
