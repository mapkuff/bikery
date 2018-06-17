import { combineEpics } from 'redux-observable';
import { createStore, combineReducers } from 'redux';
// INTERNAL IMPORT
import { reducer as authReducer, reducerName as authReducerName, epic as authEpic } from './auth';

export const reducers = {
  [authReducerName]: authReducer,
};

export const epic = combineEpics(authEpic);

export const configureSelectorTestingStore =
  () => createStore(combineReducers(reducers));
