import React from 'react';
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import Landing from './components/landing'
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Landing />
        {/* <Dashboard/> */}
        {/* <Router /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
