import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import SelectOne from "./SelectOne";
import SelectTwo from "./SelectTwo";

function App() {
  return <BrowserRouter>
    <div>
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
