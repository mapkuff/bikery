import { connect } from 'react-redux';
import { branch, renderComponent, renderNothing } from 'recompose';
import { getCurrentUser, isCurrentUserInitialized } from '../../redux/auth/selector';
import Loader from '../../component/Loader';
import { checkIsUninitialized } from './function';

export const withAuthenticationMetadata =
  connect(state => ({
    authMeta: {
      currentUser: getCurrentUser(state),
      isCurrentUserInitialized: isCurrentUserInitialized(state)
    },
  }));

export const showLoaderOnUninitialized = branch(checkIsUninitialized, renderComponent(Loader));
export const hideOnUninitialized = branch(checkIsUninitialized, renderNothing);
