import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <aside
        style={{
          width: "240px",
          background: "#0f172a",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Finance Tracker</h2>
        <Navbar />
      </aside>

      <main
        style={{
          flex: 1,
          padding: "40px",
          background: "#f5f6fa",
        }}
      >
        {children}
      </main>
    </div>
  );
}
