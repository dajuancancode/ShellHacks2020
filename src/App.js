import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history'
import HomePage from './Pages/Home'
import DashBoard from './Pages/Dashboard';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route  path="/" exact component={HomePage} />
        <Route path="/dashboard" exact component={DashBoard} />
        <Route path="/signUp" exact component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
