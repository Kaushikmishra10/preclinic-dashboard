import React from "react";
import "../styles/theme.scss";

const Footer = () => (
  <footer
    className="d-flex align-items-center justify-content-center py-3 fs-6 mt-1 text-success"
    style={{
      borderTop: "1.5px solid var(--sidebar-border)",
      background: "#ffffff",
      fontFamily: "var(--font)",
      
    }}
  >
    2025 © Preclinic, All Rights Reserved
  </footer>
);

export default Footer;