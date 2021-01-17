import React, { useState, useEffect } from 'react';
import '../styles/containers/CardChart.css';
import { connect } from 'react-redux';
import * as saleForMonthActions from '../actions/saleForMonthActions';
import BarChart from '../components/BarChart';
import DoughnutChart from '../components/DoughnutChart';
import Loader from './Loader';

const CardChart = ({
  title,
  typeChart,
  dataInBar,
  dataInDoughnut,
  salesForMonthReducer,
  fetchSalesForMonthData,
}) => {
  const [dataBar, setDataBar] = useState(dataInBar);
  const [dataDoughnut, setDataDoughnut] = useState(dataInDoughnut);

  const addInState = () => {
    const allSales = dataInBar.datasets.slice();
    allSales[0].data = salesForMonthReducer.data.salesForMonth.map(
      (item) => item.sale
    );
    setDataBar({ ...dataBar, datasets: allSales });
  };

  useEffect(() => {
    if (
      typeChart === 'bar' &&
      salesForMonthReducer.data.salesForMonth.length === 0
    ) {
      const get = async () => {
        await fetchSalesForMonthData();
      };
      get();
    }
  }, [dataBar]);

  useEffect(() => {
    if (
      typeChart === 'bar' &&
      salesForMonthReducer.data.salesForMonth.length !== 0
    )
      addInState();
  }, [salesForMonthReducer.data.salesForMonth]);

  if (salesForMonthReducer.loading) {
    return (
      <div className="CardChart">
        <div className="CardChart__borderTop">
          <h2 className="CardChart__chart__title reset-margin">{title}</h2>
          <button className="CardChart__borderTop--move">
            <i class="fas fa-grip-horizontal"></i>
          </button>
        </div>
        <div className="CardChart__chart">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="CardChart">
      <div className="CardChart__borderTop">
        <h2 className="CardChart__chart__title reset-margin">{title}</h2>
        <button className="CardChart__borderTop--move">
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
      <div className="CardChart__chart">
        {typeChart === 'bar' && <BarChart data={dataBar} />}
        {typeChart === 'doughnut' && <DoughnutChart data={dataDoughnut} />}
      </div>
    </div>
  );
};

const mapStateToProps = ({ salesForMonthReducer }) => {
  return { salesForMonthReducer };
};

export default connect(mapStateToProps, saleForMonthActions)(CardChart);
