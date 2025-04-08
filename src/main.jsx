import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
// hafidz
import FormAddQuestion from './pages/FormAddQuestion';
// conflict
import PublicLayout from './layout/PublicLayout';
import QuestionPost from './pages/QuestionPost';
import Homepage from './pages/Homepage';


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
            element={<Homepage/>}
          />
          <Route
            path="/add-question"
            element={<FormAddQuestion/>}
          />
          <Route
            path="/questions/:id"
            element={<QuestionPost/>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
