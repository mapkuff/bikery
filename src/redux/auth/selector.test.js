import { configureSelectorTestingStore } from '../';
import { isCurrentUserInitialized, getCurrentUser } from './selector';
import { setCurrentUser } from './action';

describe('test `auth` selectors', () => {
  let store = null;
  beforeEach(() => {
    store = configureSelectorTestingStore();
  });
  describe('test `isCurrentUserInitialized()` selector', () => {
    it('Should return false if no user has been set', () => {
      const state = store.getState();
      expect(isCurrentUserInitialized(state))
        .toBe(false);
    });
    it('Should return true if user has been set', () => {
      store.dispatch(setCurrentUser('SOME_CURRENT_USER'));
      const state = store.getState();
      expect(isCurrentUserInitialized(state))
        .toBe(true);
    });
  });
  describe('test `getCurrentUser()` selector', () => {
    it('Should return `undefined` if no user has been set', () => {
      const state = store.getState();
      expect(getCurrentUser(state))
        .toBeUndefined();
    });
    it('Should return last user that has been set', () => {
      store.dispatch(setCurrentUser('SOME_CURRENT_USER1'));
      store.dispatch(setCurrentUser('SOME_CURRENT_USER2'));
      const state = store.getState();
      expect(getCurrentUser(state))
        .toEqual('SOME_CURRENT_USER2');
    });
  });
});






