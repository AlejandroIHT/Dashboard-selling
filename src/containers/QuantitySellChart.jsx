import React from 'react';
import '../styles/containers/QuantitySellChart.css';
import DoughnutChart from '../components/DoughnutChart';

const QuantitySellChart = () => (
  <div className="QuantitySellChart">
    <div className="QuantitySellChart__borderTop">
      <h2 className="QuantitySellChart__chart__title reset-margin">
        Venta por tipo de producto
      </h2>
      <button className="QuantitySellChart__borderTop--move">
        <i class="fas fa-grip-horizontal"></i>
      </button>
    </div>
    <div className="QuantitySellChart__chart">
      <DoughnutChart />
    </div>
  </div>
);

export default QuantitySellChart;
