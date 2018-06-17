import React from 'react';
import { always } from 'ramda';
import { compose } from 'recompose';

import { withDefaultLayout } from '../../hoc/layout';

const NotFound404 =
  () => (
    <div className="Page_NotFound404 text-center">
      <h1>404 Not Found</h1>
      <h2>
        { "Sorry, a page you're looking for doesn't exist" }
      </h2>
    </div>
  );

export default compose(
  withDefaultLayout,
  always(NotFound404)
)();
