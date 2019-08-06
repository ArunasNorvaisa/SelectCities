import React from 'react';
import SelectOne from "./SelectOne";
import SelectTwo from "./SelectTwo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return <Router>
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
  </Router>;
}

export default App;
