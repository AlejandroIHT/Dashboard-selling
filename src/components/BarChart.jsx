import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Abr',
      'May',
    ],
    datasets: [
      {
        label: 'Sales for 2020 (M)',
        data: [3, 2, 5, 3, 1],
        backgroundColor: ['rgba(255, 99, 132, 1)'],
      },
      {
        label: 'Sales for 2020 (M)',
        data: [1, 2, 1, 3, 4],
        backgroundColor: ['rgba(255, 205, 86, 1)'],
      },
      {
        label: 'Sales for 2020 (M)',
        data: [2, 4, 6, 2, 3],
        backgroundColor: ['rgba(54, 162, 235, 1)'],
      },
      {
        label: 'Sales for 2020 (M)',
        data: [3, 3, 4, 3, 2],
        backgroundColor: ['rgba(255, 159, 64, 1)'],
      },
      {
        label: 'Sales for 2020 (M)',
        data: [1, 2, 2, 2, 1],
        backgroundColor: ['rgba(153, 102, 255, 1)'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
