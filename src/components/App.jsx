import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import SelectOne from "./SelectOne";
import SelectTwo from "./SelectTwo";

import './style.css';

function App() {
  return <BrowserRouter>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/SelectOne/">Select One</Link>
          </li>
          <li>
            <Link to="/SelectTwo/">Select Two</Link>
          </li>
        </ul>
      </nav>
      <Route path="/SelectOne/" component={SelectOne} />
      <Route path="/SelectTwo/" component={SelectTwo} />
    </div>
  </BrowserRouter>;
}

export default App;
