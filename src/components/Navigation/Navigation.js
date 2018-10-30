import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <nav className="container">
    <ul>
      <li>
        <NavLink activeClassName="active" to="/take-initiative">
          Take Initiative
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/roll-the-bones">
          Roll The Bones
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
