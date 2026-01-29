import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Finance Tracker</h3>
        <Navbar />
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "30px" }}>
        {children}
      </main>
    </div>
  );
}
