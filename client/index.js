import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'client/components/App';


import configureStore from './configureStore';
const style = require('client/style/style.scss');

const store = configureStore();

store.dispatch({
  type: 'FETCH_USERS_REQUEST'
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);