import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import App from './app/layout/App';
import configureStore from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';

const store = configureStore();

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,

    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App.jsx', () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
