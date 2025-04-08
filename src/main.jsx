import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import AuthLayout from "./components/AuthLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route element={<AuthLayout />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/add-question" element={<h1>Add question form</h1>} />
          <Route path="/questions/:id" element={<h1>Question details</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
