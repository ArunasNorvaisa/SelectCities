import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Selection from './Selection';

import './App.css';

function App() {
  return <BrowserRouter>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to='/SelectOne/'>Select One</Link>
          </li>
          <li>
            <Link to='/SelectTwo/'>Select Two</Link>
          </li>
        </ul>
      </nav>
      <Route path='/SelectOne/' component={Selection} />
      <Route path='/SelectTwo/' component={Selection} />
    </div>
  </BrowserRouter>;
}

export default App;
