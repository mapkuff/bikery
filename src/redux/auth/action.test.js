import {
  SET_CURRENT_USER,
  setCurrentUser
} from './action';

describe('test `auth` action', () => {
  it('should return `currentUser setting` action', () => {
    const currentUser = 'SOME_CURRENT_USER';
    const action = setCurrentUser(currentUser);
    expect(action.type)
      .toEqual(SET_CURRENT_USER);
    expect(action.payload)
      .toEqual(currentUser);
  });
});
