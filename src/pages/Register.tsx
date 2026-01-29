import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <header className="landing-header">
        <Link to="/" className="landing-logo">Finance Tracker</Link>
        <nav className="landing-nav">
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>

      <div className="auth-container">
        <div className="auth-card">
          <h2>Register</h2>
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button onClick={() => navigate("/app/dashboard")}>Register</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
