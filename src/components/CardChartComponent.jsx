import React from 'react';
import '../styles/components/CardChartComponent.css';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import Loader from './Loader';

const CardChartComponent = ({
  title,
  typeChart,
  salesForMonthReducer,
  categorySalesReducer,
  dataBar,
  dataDoughnut,
}) => {
  if (typeChart === 'bar' && salesForMonthReducer.loading) {
    return (
      <div className="CardChartComponent">
        <div className="CardChartComponent__borderTop">
          <h2 className="CardChartComponent__chart__title reset-margin">{title}</h2>
          <button className="CardChartComponent__borderTop--move">
            <i class="fas fa-grip-horizontal"></i>
          </button>
        </div>
        <div className="CardChartComponent__chart">
          <Loader />
        </div>
      </div>
    );
  }

  if (typeChart === 'doughnut' && categorySalesReducer.loading) {
    return (
      <div className="CardChartComponent">
        <div className="CardChartComponent__borderTop">
          <h2 className="CardChartComponent__chart__title reset-margin">{title}</h2>
          <button className="CardChartComponent__borderTop--move">
            <i class="fas fa-grip-horizontal"></i>
          </button>
        </div>
        <div className="CardChartComponent__chart">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="CardChartComponent">
      <div className="CardChartComponent__borderTop">
        <h2 className="CardChartComponent__chart__title reset-margin">{title}</h2>
        <button className="CardChartComponent__borderTop--move">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
      <div className="CardChartComponent__chart">
        {typeChart === 'bar' && <BarChart data={dataBar} />}
        {typeChart === 'doughnut' && <DoughnutChart data={dataDoughnut} />}
      </div>
    </div>
  );
};

export default CardChartComponent;
