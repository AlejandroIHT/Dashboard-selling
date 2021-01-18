import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as saleForMonthActions from '../actions/saleForMonthActions';
import * as categorySalesActions from '../actions/categorySalesActions';
import CardChartComponent from '../components/CardChartComponent';

const { fetchSalesForMonthData } = saleForMonthActions;
const { fetchcategorySalesData } = categorySalesActions;

const CardChart = ({
  title,
  typeChart,
  dataInBar,
  dataInDoughnut,
  salesForMonthReducer,
  fetchSalesForMonthData,
  categorySalesReducer,
  fetchcategorySalesData,
}) => {
  const [dataBar, setDataBar] = useState(dataInBar);
  const [dataDoughnut, setDataDoughnut] = useState(dataInDoughnut);

  /** Add information in state for bar graph */
  const addInStateBar = () => {
    const allSales = dataInBar.datasets.slice();
    allSales[0].data = salesForMonthReducer.data.salesForMonth.map(
      (item) => item.sale
    );
    setDataBar({ ...dataBar, datasets: allSales });
  };

  /** Add information in state for doughnut graph */
  const addInStateDoughnut = () => {
    const allSales = dataInDoughnut.datasets.slice();
    allSales[0].data = categorySalesReducer.data.salesForCategory.map(
      (item) => item.sale
    );
    const typeLabels = categorySalesReducer.data.salesForCategory.map(
      (item) => item.category
    );
    setDataDoughnut({
      labels: typeLabels,
      datasets: allSales,
    });
  };
  /** Ask for the information depending on whether the bar graph or doughnut graph */
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
    if (
      typeChart === 'doughnut' &&
      categorySalesReducer.data.salesForCategory.length === 0
    ) {
      const get = async () => {
        await fetchcategorySalesData();
      };
      get();
    }
  }, [dataBar, dataDoughnut]);

  /** Add the information to the state depending on whether the request has already occurred in redux for bar graph */
  useEffect(() => {
    if (
      typeChart === 'bar' &&
      salesForMonthReducer.data.salesForMonth.length !== 0
    )
      addInStateBar();
  }, [salesForMonthReducer.data.salesForMonth]);

  /** Add the information to the state depending on whether the request has already occurred in redux for doughnut graph */
  useEffect(() => {
    if (
      typeChart === 'doughnut' &&
      categorySalesReducer.data.salesForCategory.length !== 0
    )
      addInStateDoughnut();
  }, [categorySalesReducer.data.salesForCategory.length]);

  return (
    <CardChartComponent
      title={title}
      typeChart={typeChart}
      salesForMonthReducer={salesForMonthReducer}
      categorySalesReducer={categorySalesReducer}
      dataBar={dataBar}
      dataDoughnut={dataDoughnut}
    />
  );
};

/** state in redux */
const mapStateToProps = ({ salesForMonthReducer, categorySalesReducer }) => {
  return { salesForMonthReducer, categorySalesReducer };
};

const mapDispatchToProps = {
  fetchSalesForMonthData,
  fetchcategorySalesData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardChart);
