// BarChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({options, series}) => {

  return (
    <div className="chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
