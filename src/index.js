import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css';
import App from './containers/App';
import reducers from './reducers/index';

const container = document.getElementById('app');
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
