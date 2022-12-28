import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { RootContainer } from './styles';

export default () => {
  return (
    <RootContainer>
      <Sidebar />
      <Outlet />
    </RootContainer>
  );
};