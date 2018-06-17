import { path } from 'ramda';
import { reducerName } from './reducer';

export const getCurrentUser =
  path([reducerName, 'currentUser']);

export const isCurrentUserInitialized =
  path([reducerName, 'isCurrentUserInitialized']);
