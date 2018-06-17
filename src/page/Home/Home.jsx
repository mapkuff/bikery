import React from 'react';
import { compose } from 'recompose';
import { always } from 'ramda';
import { withDefaultLayout } from '../../hoc/layout';
import Loader from '../../component/Loader';

const Home =
  () => (
    <div>
      <Loader />
    </div>
  );

export default compose(
  withDefaultLayout,
  always(Home)
)();
