import { SET_CURRENT_USER } from './action';

const initialState = {
  currentUser: undefined,
  isCurrentUserInitialized: false,
};

export const reducerName = 'auth';

export const reducer =
  (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return {
          ...state,
          currentUser: action.payload,
          isCurrentUserInitialized: true,
        };
      default:
        return state;
    }
  };
