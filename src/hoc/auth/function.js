import { equals, path, isNil, compose } from 'ramda';

export const checkIsUninitialized = compose(
  equals(false),
  path(['authMeta', 'isCurrentUserInitialized'])
);

export const checkIsUnAuthenticated = compose(
  isNil,
  path(['authMeta', 'currentUser'])
);
