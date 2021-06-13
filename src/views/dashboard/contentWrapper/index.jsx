import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Bills from '../bills';
import Home from '../home';

const ContentWrapper = () => {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/home" component={Home} />
      <Route path="/dashboard/bills" component={Bills} />
    </Switch>
  );
};

export default ContentWrapper;