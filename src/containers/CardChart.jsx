import React from 'react';
import '../styles/containers/CardChart.css';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';

const CardChart = ({ title, typeChart }) => (
  <div className="CardChart">
    <div className="CardChart__borderTop">
      <h2 className="CardChart__chart__title reset-margin">{title}</h2>
      <button className="CardChart__borderTop--move">
        <i class="fas fa-grip-horizontal"></i>
      </button>
    </div>
    <div className="CardChart__chart">
      {typeChart === 'bar' && <BarChart />}
      {typeChart === 'doughnut' && <DoughnutChart />}
    </div>
  </div>
);

export default CardChart;
