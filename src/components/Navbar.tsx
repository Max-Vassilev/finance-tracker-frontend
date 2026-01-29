import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Link to="/app/dashboard">Dashboard</Link>
      <Link to="/app/transactions">Transactions</Link>
      <Link to="/app/categories">Categories</Link>

      <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "8px",
          border: "none",
          borderRadius: "4px",
          background: "#2563eb",
          color: "#fff",
        }}
      >
        Logout
      </button>
    </nav>
  );
}
