import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const PublicLayout = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  const handleIsLoggedIn = () => {
    if (accessToken) {
      navigate('/');
    }
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
