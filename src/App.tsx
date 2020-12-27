import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import { publicRoutes } from './publicRoutes';

const history = createBrowserHistory();

const LoadingComponent: React.FC = () => <h1>Loading</h1>;

const App: React.FC = () => (
  <Router history={history}>
    <Suspense fallback={LoadingComponent}>
      <Switch>
        {publicRoutes &&
          publicRoutes.length &&
          publicRoutes.map((prop, key) => (
            <Route
              {...prop}
              path={prop.path}
              key={key}
              component={prop.component}
            />
          ))}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
