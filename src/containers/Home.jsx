import React, { useEffect, Suspense, lazy } from 'react';
import '../styles/containers/Home.css';
import { connect } from 'react-redux';
import Board from '../components/Board';
import Card from '../components/Card';
import Loader from '../components/Loader';
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

  const dataInBar = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
    datasets: [
      {
        label: 'All Products',
        data: [],
        backgroundColor: ['rgba(255, 99, 132, 1)'],
      },
    ],
  };

  const dataInDoughnut = {
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(90, 173, 82, 1)',
        ],
      },
    ],
  };

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
    <>
      <div className="Home">
        <div className="Home__container">
          <Board id="board-1" className="Home__board">
            <Card id="card-1" className="Home__card" draggable="true">
              <Suspense
                fallback={
                  <div className="text-center">
                    <Loader />
                  </div>
                }
              >
                <FavProduct />
              </Suspense>
            </Card>
          </Board>

          <Board id="board-2" className="Home__board">
            <Card id="card-2" className="Home__card" draggable="true">
              <Suspense
                fallback={
                  <div className="text-center">
                    <Loader />
                  </div>
                }
              >
                <CardChart
                  title="Venta por tipo de producto"
                  typeChart="doughnut"
                  dataInDoughnut={dataInDoughnut}
                />
              </Suspense>
            </Card>
          </Board>

          <Board id="board-3" className="Home__board">
            <Card id="card-3" className="Home__card" draggable="true">
              <Suspense
                fallback={
                  <div className="text-center">
                    <Loader />
                  </div>
                }
              >
                <CardChart
                  title="Ventas mensuales"
                  typeChart="bar"
                  dataInBar={dataInBar}
                />
              </Suspense>
            </Card>
          </Board>

          <Board id="board-4" className="Home__board">
            <Card id="card-4" className="Home__card" draggable="true">
              <Suspense
                fallback={
                  <div className="text-center">
                    <Loader />
                  </div>
                }
              >
                <SellingInMonth />
              </Suspense>
            </Card>
          </Board>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ mainDataReducer }) => {
  return { mainDataReducer };
};

export default connect(mapStateToProps, mainDataActions)(Home);
