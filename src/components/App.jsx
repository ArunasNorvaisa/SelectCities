import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Dropdown from './Dropdown';
import {cities} from '../data/Data';

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
      <Route
        path='/SelectOne/'
        render={props => <Dropdown {...props} multiple={false} data={cities} />}
      />
      <Route
        path='/SelectMultiple/'
        render={props => <Dropdown {...props} multiple={true} data={cities} />}
      />
    </div>
  </BrowserRouter>;
}

export default App;
