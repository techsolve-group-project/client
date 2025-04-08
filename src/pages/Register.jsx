import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import http from '../helpers/http';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await http({
        method: 'POST',
        url: '/auth/register',
        data: {
          name,
          email,
          password,
        },
      });
      localStorage.setItem('access_token', result.data.token);
      navigate('/');
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: error.response.statusText,
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
      <form
        className="max-w-sm mx-auto w-lg p-4"
        onSubmit={handleRegister}
      >
        <h2 className="dark:text-white font-bold text-2xl mb-4 text-center">Register</h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john doe"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
        >
          Submit
        </button>
        <div className="text-white">
          <p>
            Have an Account?{' '}
            <Link
              className="text-sky-400"
              to={'/login'}
            >
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
