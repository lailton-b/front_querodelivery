import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Query from './pages/Query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/cadastro" exact component={ Register } />
        <Route path="/consulta" exact component={ Query } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;