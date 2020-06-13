import React from 'react';
import { Provider } from 'react-redux'
import Nav from './components/nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Router />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
