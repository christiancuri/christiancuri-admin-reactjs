import React from 'react';
import { RouteProps } from 'react-router';

export const publicRoutes: RouteProps[] = [
  {
    exact: true,
    path: '/login',
    component: React.lazy(() => import('./pages/Login')),
  },
];

export const privateRoutes: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: React.lazy(() => import('./pages/Home')),
  },
  {
    exact: true,
    path: '/posts',
    component: React.lazy(() => import('./pages/Posts')),
  },
];
