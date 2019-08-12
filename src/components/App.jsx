import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import SelectionOne from './SelectionOne';
import SelectionMultiple from './SelectionMultiple';

import './App.css';

function App() {
  return <BrowserRouter>
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to='/SelectOne/'>Select one</Link>
          </li>
          <li>
            <Link to='/SelectMultiple/'>Select few</Link>
          </li>
        </ul>
      </nav>
      <Route path='/SelectOne/' component={SelectionOne} />
      <Route path='/SelectMultiple/' component={SelectionMultiple} />
    </div>
  </BrowserRouter>;
}

export default App;
