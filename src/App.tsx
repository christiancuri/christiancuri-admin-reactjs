import React, { ReactElement, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { publicRoutes } from './publicRoutes';

const history = createBrowserHistory();

const LoadingComponent: React.FC = () => <h1>Loading</h1>;

const App = (): ReactElement => (
  <Router history={history}>
    <Suspense fallback={LoadingComponent}>
      <Switch>
        {publicRoutes &&
          publicRoutes.length &&
          publicRoutes.map(({ ...props }, key) => (
            <Route {...props} path={props.path} key={key} />
          ))}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
