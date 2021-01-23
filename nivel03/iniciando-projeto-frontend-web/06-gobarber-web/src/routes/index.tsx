import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SingIn from '../pages/signin/index';
import SingUp from '../pages/signup/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SingIn} />
    <Route path="/signup" component={SingUp} />
  </Switch>
);

export default Routes;
