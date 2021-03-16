import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Login } from '../pages/Login';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export { Router };
