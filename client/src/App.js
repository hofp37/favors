import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHandsHelping, faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';
import PageDoesNotExist from './components/PageDoesNotExist';

library.add(fab, faHandsHelping, faBars);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/dashboard" isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} component={DashboardPage} />
        <Route exact path="/" render={props => <LoginPage {...props} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Route exact path="*" component={PageDoesNotExist} />
      </Switch>
    </Router>
  );

};

export default App;
