import React from 'react';
import '../styles/containers/SelledForMonthChart.css';
import BarChart from '../components/BarChart';

const SelledForMonthChart = () => (
  <div className="SelledForMonthChart">
    <div className="SelledForMonthChart__borderTop">
      <h2 className="SelledForMonthChart__chart__title reset-margin">
        Ventas mensuales
      </h2>
      <button className="SelledForMonthChart__borderTop--move">
        <i class="fas fa-grip-horizontal"></i>
      </button>
    </div>
    <div className="SelledForMonthChart__chart">
      <BarChart />
    </div>
  </div>
);

export default SelledForMonthChart;
