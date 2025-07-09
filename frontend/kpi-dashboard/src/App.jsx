// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota pública de login */}
                <Route path="/login" element={<Login />} />

                {/* Rota protegida: se não estiver logado, vai para /login */}
                <Route
                    path="/"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

function RequireAuth({ children }) {
    const isAuth = localStorage.getItem("loggedIn") === "true";
    return isAuth ? children : <Navigate to="/login" replace />;
}
