import React, { useEffect, Suspense, lazy } from 'react';
import '../styles/containers/Home.css';
import { connect } from 'react-redux';
import Loader from './Loader';
import * as mainDataActions from '../actions/mainDataActions';

const FavProduct = lazy(() => import('./FavProduct'));
const CardChart = lazy(() => import('./CardChart'));
const SellingInMonth = lazy(() => import('./SellingInMonth'));

const Home = ({ fetchMainData, mainDataReducer }) => {
  useEffect(() => {
    if (mainDataReducer.mainData.product.length === 0) {
      fetchMainData();
    }
  }, []);

  if (mainDataReducer.loading) {
    return (
      <div className="Home">
        <div className="container-fluid pl-0 pr-0 text-center">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="Home">
      <div className="container-fluid pl-0 pr-0">
        <div className="row mb-4">
          <div className="col-lg-6 col-12 p-0 col-favProduct">
            <Suspense
              fallback={
                <div className="text-center">
                  <Loader />
                </div>
              }
            >
              <FavProduct />
            </Suspense>
          </div>
          <div className="col-lg-6 col-12 p-0 col-quantitySellChart">
            <Suspense
              fallback={
                <div className="text-center">
                  <Loader />
                </div>
              }
            >
              <CardChart title="Venta por tipo de producto" typeChart="doughnut" />
            </Suspense>
          </div>
        </div>
        <div className="row mb-4 pb-4">
          <div className="col-lg-6 col-12 p-0 col-favProduct">
            <Suspense
              fallback={
                <div className="text-center">
                  <Loader />
                </div>
              }
            >
              <CardChart title="Ventas mensuales" typeChart="bar" />
            </Suspense>
          </div>
          <div className="col-lg-6 col-12">
            <Suspense
              fallback={
                <div className="text-center">
                  <Loader />
                </div>
              }
            >
              <SellingInMonth />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ mainDataReducer }) => {
  return { mainDataReducer };
};

export default connect(mapStateToProps, mainDataActions)(Home);
