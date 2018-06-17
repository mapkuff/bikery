import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound404 from './page/NotFound404';
import Home from './page/Home';

const Routes =
  () => (
    <Switch>
      <Route path="/" exact strict={false} component={Home} />
      <Route component={NotFound404} />
    </Switch>
  );

export default Routes;
