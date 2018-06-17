
export const SET_CURRENT_USER = 'AUTH/SET_CURRENT_USER';

export const setCurrentUser =
  user => ({
    type: SET_CURRENT_USER,
    payload: user,
  });
