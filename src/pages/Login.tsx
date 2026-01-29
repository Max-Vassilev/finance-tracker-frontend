import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import "../styles/landing.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  function handleLogin() {
    login(email);
    navigate("/app/dashboard");
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h2>Login</h2>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" />
          <button onClick={handleLogin}>Login</button>
          <p>No account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
}
