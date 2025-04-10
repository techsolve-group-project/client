import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import http from "../helpers/http";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "178954168879-e4otrm71o6betbngde8tlkgj0mh9u53f.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("google-btn"),
      { theme: "outline", size: "large" } // customization attributes
    );
    // google.accounts.id.prompt()
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await http({
        method: "POST",
        url: "/auth/login",
        data: {
          email,
          password,
        },
      });
      localStorage.setItem("access_token", result.data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.statusText,
        text: error.response.data.message,
      });
    }
  };
  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    try {
      let { data } = await http({
        method: "post",
        url: "/auth/google-login",
        data: {
          googleToken: response.credential,
        },
      });
      console.log(data);
      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.statusText,
        text: error.response.data.message,
      });
    }
  };
  return (
    <div className="bg-slate-900 h-screen w-screen flex justify-center items-center">
      <form className="max-w-sm mx-auto w-lg p-10" onSubmit={handleLogin}>
        <h2 className="dark:text-white font-bold text-2xl mb-4 text-center">
          Login
        </h2>
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
        <div className="flex flex-col m-auto">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
        >
          Submit
        </button>
        <button type="button" id="google-btn">
          Login with Google
        </button>
        </div>
       
        <div className="text-white py-3">
          <p>
            Doesn't have an Account?{" "}
            <Link className="text-sky-400" to={"/register"}>
              Register here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
