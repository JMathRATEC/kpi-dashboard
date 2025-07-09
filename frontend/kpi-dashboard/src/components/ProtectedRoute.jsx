import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const auth = localStorage.getItem("loggedIn");
    return auth === "true" ? children : <Navigate to="/login" replace />;
}
