import React from 'react';
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>   
      <Router/>   
      </BrowserRouter>

    </div>
  );
}

export default App;
