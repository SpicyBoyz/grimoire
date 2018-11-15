import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TakeInitiative from '../TakeInitiative/TakeInitiative';

const RollTheBones = () => <h2 className="title page">Coming Soon!</h2>;

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/take-initiative" component={TakeInitiative} />
      <Route exact path="/roll-the-bones" component={RollTheBones} />
    </Switch>
  </main>
);

export default Main;
