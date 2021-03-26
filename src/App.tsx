import React, { ReactElement, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '@components';
import { createBrowserHistory } from 'history';

import { privateRoutes, publicRoutes } from './routes';

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

        {privateRoutes &&
          privateRoutes.length &&
          privateRoutes.map(({ ...props }, key) => (
            <PrivateRoute {...props} path={props.path} key={key} />
          ))}
      </Switch>
    </Suspense>
  </Router>
);

export default App;
