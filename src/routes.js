/* eslint-disable react/jsx-filename-extension */
import {
  createBrowserRouter,
  // RouterProvider,
} from 'react-router-dom';
import React from 'react';
import Admin from './pages/Admin';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/',
    element: <Home
      address={{}}
      links={[]}
    />,
  },
]);

export default router;
