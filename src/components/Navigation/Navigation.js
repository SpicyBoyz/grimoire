import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => (
  <nav className="container">
    <ul>
      <li>
        <Link to="/take-initiative">Take Initiative</Link>
      </li>
      <li>
        <Link to="/roll-the-bones">Roll The Bones</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
