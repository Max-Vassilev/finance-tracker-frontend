import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../styles/landing.css";

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="landing">
      <section className="hero">
        <h1>Your finances, made simple</h1>
        <p>
          Track expenses, manage categories, and gain clarity over your spending.
          No bank connections. Full privacy. Full control.
        </p>

        {!user && (
          <div className="hero-buttons">
            <Link to="/login" className="btn-secondary">Login</Link>
            <Link to="/register" className="btn-primary">Get Started</Link>
          </div>
        )}
      </section>

      <section className="feature-section">
        <div className="feature-text">
          <h2>Dashboards</h2>
          <p>See monthly summaries, income, and expenses at a glance.</p>
        </div>
        <div className="feature-image">
          <div className="image-placeholder">Dashboards Preview</div>
        </div>
      </section>

      <section className="feature-section reverse">
        <div className="feature-text">
          <h2>Transactions</h2>
          <p>Add and manage transactions quickly and effortlessly.</p>
        </div>
        <div className="feature-image">
          <div className="image-placeholder">Transactions Preview</div>
        </div>
      </section>

      <section className="feature-section">
        <div className="feature-text">
          <h2>Categories</h2>
          <p>Organize your spending with custom categories.</p>
        </div>
        <div className="feature-image">
          <div className="image-placeholder">Categories Preview</div>
        </div>
      </section>

      <footer className="footer">
        Finance Tracker © 2026
      </footer>
    </div>
  );
}
