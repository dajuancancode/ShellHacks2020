import React from 'react';
import HomePage from './Pages/Home'
import {Router, Route, Switch} from 'react-router-dom';
import history from './history'

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route  path="/" exact component={HomePage} /> 
      </Switch>
    </Router>
  );
}

export default App;
