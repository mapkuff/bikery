import { compose, branch, lifecycle, renderNothing } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withAuthenticationMetadata, showLoaderOnUninitialized, hideOnUninitialized } from './common';
import { checkIsUnAuthenticated } from './function';

export const customRedirectStrategyAuthenticationGuard =
  (redirectTo = '/login') =>
    compose(
      withAuthenticationMetadata,
      showLoaderOnUninitialized,
      branch(
        checkIsUnAuthenticated,
        compose(
          withRouter,
          lifecycle({
            componentDidMount() {
              const { history } = this.props;
              history.push(redirectTo);
            },
          }),
          renderNothing
        )
      )
    );

export const redirectStrategyAuthenticationGuard =
  customRedirectStrategyAuthenticationGuard();

export const hidingStrategyAuthenticationGuard =
  compose(
    withAuthenticationMetadata,
    hideOnUninitialized,
    branch(
      checkIsUnAuthenticated,
      renderNothing
    )
  );
