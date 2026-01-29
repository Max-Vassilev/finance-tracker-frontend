import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/landing.css";

export default function Layout() {
  const { user } = useAuth();

  return (
    <>
      <header className="landing-header">
        <div className="landing-logo">
          <Link to="/">Finance Tracker</Link>
        </div>

        <nav className="landing-nav">
          {!user && (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link">Register</Link>
            </>
          )}

          {user && (
            <Link to="/app/dashboard" className="nav-button">
              Dashboard
            </Link>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
}
