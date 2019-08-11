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
            <Link to='/SelectOne/'>Selection #1</Link>
          </li>
          <li>
            <Link to='/SelectTwo/'>Selection #2</Link>
          </li>
          <li>
            <Link to='/SelectThree/'>Selection #3</Link>
          </li>
        </ul>
      </nav>
      <Route path='/SelectOne/' component={Selection} />
      <Route path='/SelectTwo/' component={Selection} />
      <Route path='/SelectThree/' component={Selection} />
    </div>
  </BrowserRouter>;
}

export default App;
