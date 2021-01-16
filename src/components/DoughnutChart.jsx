import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data = {
    labels: [
      'Category 1',
      'Category 2',
      'Category 3',
      'Category 4',
      'Category 5',
    ],
    datasets: [
      {
        label: 'Sales for 2020 (M)',
        data: [3, 2, 5, 3, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
        ],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
