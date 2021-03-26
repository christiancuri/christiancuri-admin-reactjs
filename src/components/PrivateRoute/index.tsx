/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Session } from '@services';

export const PrivateRoute = ({
  component: Component,
  ...props
}: any): ReactElement => (
  <Route
    {...props}
    render={prop =>
      Session.isAuthenticated() ? (
        <Component {...prop} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
