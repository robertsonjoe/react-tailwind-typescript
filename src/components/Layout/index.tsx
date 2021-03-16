import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Home } from '../../pages/Home';

export const Layout = (): JSX.Element => {
  const match = useRouteMatch();

  return (
    <>
      <div className="topbar shadow flex w-screen fixed top-0 left-48 bg-white h-16 px-4">
        <div className="nav">
          <div className="link">
            Dashboard
          </div>
        </div>
      </div>
      <div className="sidebar h-screen w-48 fixed top-0 left-0 bg-white border-r border-gray-100 bg-indigo-900">
        <div className="header py-1 px-4 flex font-bold">
          Header
        </div>
        <div className="body">
          <div className="section">
            <div className="link flex py-1 px-4 border-l-4 border-indigo-700 bg-indigo-100 text-indigo-800">
              <div className="icon mr-2">Icon</div>
              <div className="label">Home</div>
            </div>
          </div>
          <div className="section">
            <div className="link">
              History
            </div>
          </div>
        </div>
      </div>

      <div className="page ml-48 mt-16 p-4">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};
