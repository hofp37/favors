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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = e => {
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => {
        if (res.status === 200) {
          setIsAuthenticated(true);
          return res.json();
        } else {
          setEmail("");
          setPassword("");
          setIsAuthenticated(false);
          return res.json();
        }
      })
      .then(res => console.log(res));

    e.preventDefault();
  }

  const handleLogout = e => {
    e.preventDefault();
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/dashboard" isAuthenticated={isAuthenticated} handleLogout={handleLogout} component={DashboardPage} />
        <Route exact path="/" handleLogin={handleLogin} render={props => <LoginPage {...props} getEmail={email} setEmail={setEmail} getPassword={password} setPassword={setPassword} isAuthenticated={isAuthenticated.toString()} handleLogin={handleLogin} />} />
        <Route exact path="/unauthorized" component={Unauthorized} />
        <Route exact path="*" component={PageDoesNotExist} />
      </Switch>
    </Router>
  );

};

export default App;
