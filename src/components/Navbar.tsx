import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Link to="/app/dashboard">Dashboard</Link>
      <Link to="/app/transactions">Transactions</Link>
      <Link to="/app/categories">Categories</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
