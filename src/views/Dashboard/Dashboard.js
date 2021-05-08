import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Class } from 'components/organisms/Class/Class';
import News from 'components/organisms/news/News';
export const Dashboard = () => {
  return (
    <Switch>
      <Route path="/class">
        <Class />
      </Route>
      <Route path="/news">
        <News />
      </Route>
      <Route path="/homework">
        <div>homework</div>
      </Route>
      <Route path="/tests">
        <div>tests</div>
      </Route>
    </Switch>
  );
};
