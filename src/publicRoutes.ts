import React from 'react';

export const publicRoutes = [
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
