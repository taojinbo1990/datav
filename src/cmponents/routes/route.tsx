import React, { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Pages from '@/pages';
import Home from '@/pages/home';
export interface RouteProps {
}
const Route: FC<RouteProps> = () => {
  const element = useRoutes([{
    path: '/',
    element: <Pages />,
    children: [{
      path: '/',
      element: <Navigate to="/home" />,
    }, {
      path: '/home',
      element: <Home />
    }]
  }])
  return element
};

export default Route;