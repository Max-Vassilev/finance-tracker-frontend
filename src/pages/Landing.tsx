import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing">

      {/* Navbar */}
      <header className="landing-header">
        <div className="landing-logo">Finance Tracker</div>

        <nav className="landing-nav">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero">
        <h1>Your finances, made simple</h1>
        <p>
          Track expenses, manage categories, and gain clarity over your spending.
          No bank connections. Full privacy. Full control.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="btn-primary">Get Started</Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </section>

      {/* Feature Sections */}
      <FeatureSection
        title="Dashboards"
        text="See monthly summaries, income, and expenses at a glance."
        reverse={false}
      />

      <FeatureSection
        title="Transactions"
        text="Add and manage transactions quickly and effortlessly."
        reverse={true}
      />

      <FeatureSection
        title="Categories"
        text="Organize your spending with custom categories."
        reverse={false}
      />

      {/* Footer */}
      <footer className="footer">
        Finance Tracker © 2026
      </footer>
    </div>
  );
}

function FeatureSection({
  title,
  text,
  reverse,
}: {
  title: string;
  text: string;
  reverse: boolean;
}) {
  return (
    <section className={`feature-section ${reverse ? "reverse" : ""}`}>
      <div className="feature-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div className="feature-image">
        {/* Placeholder for future screenshots */}
        <div className="image-placeholder">
          {title} Preview
        </div>
      </div>
    </section>
  );
}
