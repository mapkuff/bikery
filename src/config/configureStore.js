import { createStore, compose as reduxCompose, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducers as appReducers, epic } from '../redux';


const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose;

const configureMiddleware =
  history =>
    compose(
      applyMiddleware(
        routerMiddleware(history),
        createEpicMiddleware(epic)
      ));

const reducers = {
  ...appReducers,
};

export const configureStore =
  history => createStore(combineReducers(reducers), configureMiddleware(history));
