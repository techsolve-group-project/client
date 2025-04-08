import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicLayout from './layout/PublicLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Route>
        <Route
          path="/"
          element={<AuthLayout />}
        >
          <Route
            index
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
