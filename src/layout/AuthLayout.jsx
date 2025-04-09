import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Navbar from '../components/Navbar';
export default function AuthLayout() {
  const navigate = useNavigate();
  const handleIsLoggedIn = () => {
    const token = localStorage.getItem('access_token');
    if (!token || token === 'undefined') {
      return navigate('/login');
    }
    return;
  };
  useEffect(() => {
    handleIsLoggedIn();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
