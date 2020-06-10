import React from 'react';
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import Landing from './components/landing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Landing />
        {/* <Router /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
