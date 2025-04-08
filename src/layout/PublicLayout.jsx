import React from 'react';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <>
      <h1>PublicLayout</h1>
      <Outlet />
    </>
  );
};

export default PublicLayout;
