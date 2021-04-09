import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components';
import { Error, Products } from './pages';
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path='/products'>
          <Products />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
