import React from 'react';
import '../styles/containers/Home.css';
import FavProduct from './FavProduct';
import QuantitySellChart from './QuantitySellChart';
import SelledForMonthChart from './SelledForMonthChart';
import SellingInMonth from './SellingInMonth';

const Home = () => {
  return (
    <div className="Home">
      <div className="container-fluid pl-0 pr-0">
        <div className="row mb-4">
          <div className="col-lg-6 col-12 p-0 col-favProduct">
            <FavProduct />
          </div>
          <div className="col-lg-6 col-12 p-0 col-quantitySellChart">
            <QuantitySellChart />
          </div>
        </div>
        <div className="row mb-4 pb-4">
          <div className="col-lg-6 col-12 p-0 col-favProduct">
            <SelledForMonthChart />
          </div>
          <div className="col-lg-6 col-12">
            <SellingInMonth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
