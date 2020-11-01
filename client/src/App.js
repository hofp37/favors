import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

library.add(fab, faHandsHelping);

const App = () => {
  const [hasErrors, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch('/express');
    res
      .json()
      .then(res => setData(res.express))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} exact />
        <Route path="/" component={LoginPage} exact />
      </Switch>
    </Router>
  );

};

export default App;
