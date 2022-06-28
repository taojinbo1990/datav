import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './route';
export interface RoutesProps {
}

const Routes: FC<RoutesProps> = () => {
  return (
    <BrowserRouter basename=''>
      <Route />
    </BrowserRouter >
  );
};

export default Routes;