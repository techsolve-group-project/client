import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const PublicLayout = () => {
  const navigate = useNavigate();

  const handleIsLoggedIn = () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      return navigate('/');
    }
    return;
  };

  useEffect(() => {
    handleIsLoggedIn();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
