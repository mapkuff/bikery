import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';

import './config/configureFirebase';
import './config/configureFontAwesome';
import './config/configureRxjs';
import { configureStore } from './config/configureStore';
import Routes from './Routes';

import './App.scss';

const history = createHistory();
const store = configureStore(history);


const App =
  () => (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );

export const renderApp =
  () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  };
