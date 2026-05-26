import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import "./styles/sidebar.scss";

// ── Credentials ───────────────────────────────
const VALID_EMAIL    = "kaushik@gmail.com";
const VALID_PASSWORD = "Kaushik10";

function App() {
  const [page,        setPage]        = useState("login"); // "login" | "signup" | "dashboard"
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authError,   setAuthError]   = useState("");

  // ── Login handler ─────────────────────────
  const handleLogin = (email, password) => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      setAuthError("");
      setPage("dashboard");
    } else {
      setAuthError("Invalid email or password. Please try again.");
    }
  };

  // ── Auth pages ────────────────────────────
  if (page === "login") {
    return (
      <Login
        onLogin={handleLogin}
        authError={authError}
        onNavigateSignup={() => { setAuthError(""); setPage("signup"); }}
      />
    );
  }

  if (page === "signup") {
    return (
      <Signup
        onNavigateLogin={() => { setAuthError(""); setPage("login"); }}
      />
    );
  }

  // ── Dashboard ─────────────────────────────
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row g-0" style={{ minHeight: "100vh" }}>

          {/* Sidebar col — fixed 260px, desktop only */}
          <div className="sidebar-col p-0 d-flex flex-column">
            <Sidebar />
          </div>

          {/* Right side: Header + Content */}
          <div className="col content-col d-flex flex-column p-0">

            {/* Header */}
            <div className="position-relative">
              <Header onSidebarClick={() => setSidebarOpen(true)} onLogout={() => setPage("login")} />
            </div>

            {/* Page content */}
            <main className="flex-grow-1" style={{ background: "#f4f7fb" }}>
              <Dashboard />
            </main>

          </div>
        </div>
      </div>

      {/* Sidebar overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar mobile drawer */}
      <div className={`sidebar-drawer ${sidebarOpen ? "open" : ""}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>
    </>
  );
}

export default App;