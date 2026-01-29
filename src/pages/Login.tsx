import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <header className="landing-header">
        <Link to="/" className="landing-logo">Finance Tracker</Link>
        <nav className="landing-nav">
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
      </header>

      <div className="auth-container">
        <div className="auth-card">
          <h2>Login</h2>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button onClick={() => navigate("/app/dashboard")}>Login</button>
          <p>No account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
}
