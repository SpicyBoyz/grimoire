import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Initiative = () => <h2>Take Initiative</h2>;
const Bones = () => <h2>Roll the Bones</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/take-iniative">Take Initiative</Link>
          </li>
          <li>
            <Link to="/roll-the-bones">Roll The Bones</Link>
          </li>
        </ul>
      </nav>

      <Route path="/take-initiative" component={Initiative} />
      <Route path="/roll-the-bones" component={Bones} />
    </div>
  </Router>
);

export default AppRouter;
