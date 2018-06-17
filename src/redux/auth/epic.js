import { createEventHandler } from 'recompose';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
// INTERNAL IMPORT
import { fireBaseApp } from '../../config/configureFirebase';
import { setCurrentUser } from './action';

const { handler, stream: authState$ } = createEventHandler();

fireBaseApp
  .auth()
  .onAuthStateChanged(handler);

const currentUserHandler =
  () =>
    Observable
      .from(authState$)
      .map(setCurrentUser);

export const epic = combineEpics(currentUserHandler);
