import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route element={<AuthLayout />}>
          <Route
            path="/"
            element={<h1>Home</h1>}
          />
          <Route
            path="/add-question"
            element={<h1>Add question form</h1>}
          />
          <Route
            path="/questions/:id"
            element={<h1>Question details</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
