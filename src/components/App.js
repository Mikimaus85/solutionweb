import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobListings from './styles/JobListings';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Your Job Listings App</h1>
        <Switch>
          <Route path="/" exact component={JobListings} />
          {/* Weitere Routen für verschiedene Ansichten hinzufügen, falls notwendig */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
