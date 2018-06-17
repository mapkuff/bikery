import { reducer } from './reducer';
import { setCurrentUser } from './action';

describe('test `auth` reducer', () => {
  it('should return original state if actioon does not match', () => {
    const originalState = {};
    const returnedState = reducer(originalState, {});
    expect(returnedState)
      .toBe(originalState);
  });
  it('should return initialState', () => {
    const returnedState = reducer(undefined, {});
    expect(returnedState.currentUser)
      .toBeUndefined();
    expect(returnedState.isCurrentUserInitialized)
      .toBe(false);
  });
  it('should return new state with new currentUser', () => {
    const currentUser = 'SOME_CURRENT_USER';
    const returnedState = reducer(undefined, setCurrentUser(currentUser));
    expect(returnedState.currentUser)
      .toBe(currentUser);
    expect(returnedState.isCurrentUserInitialized)
      .toBe(true);
  });
});
