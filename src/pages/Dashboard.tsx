import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">Finance Tracker</div>
        <Navbar />
      </aside>

      <main className="main-content">
        <h1>Dashboard</h1>

        <div className="card">
          Dashboard content placeholder
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Income</h3>
            <p>$0.00</p>
          </div>

          <div className="stat-card">
            <h3>Total Expenses</h3>
            <p>$0.00</p>
          </div>

          <div className="stat-card">
            <h3>Balance</h3>
            <p>$0.00</p>
          </div>
        </div>
      </main>
    </div>
  );
}
