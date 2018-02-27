import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProtectedRoute from '../utility/ProtectedRoute';

import DonationsHome from './DonationsHome';
import DonationsIndex from './DonationsIndex';
import DonationsShow from  './DonationsShow';
import DonationsNew from './DonationsNew';
import DonationsEdit from './DonationsEdit';

const DonationsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={DonationsHome} />
      <Route exact path="/donations" component={DonationsIndex} />
      <ProtectedRoute path="/donations/new" component={DonationsNew} />
      <ProtectedRoute path="/donations/:id/edit" component={DonationsEdit} />
      <Route path="/donations/:id" component={DonationsShow} />
    </Switch>
  );
};

export default DonationsRoutes;
