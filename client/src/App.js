import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import LoginPage from './components/LoginPage';

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
    <LoginPage />
  );

};

export default App;
