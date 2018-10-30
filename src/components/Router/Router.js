import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TakeInitiative from '../TakeInitiative/TakeInitiative';
const Bones = () => <h2>Roll the Bones</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/take-initiative">Take Initiative</Link>
          </li>
          <li>
            <Link to="/roll-the-bones">Roll The Bones</Link>
          </li>
        </ul>
      </nav>

      <Route path="/take-initiative" component={TakeInitiative} />
      <Route path="/roll-the-bones" component={Bones} />
    </div>
  </Router>
);

export default AppRouter;
