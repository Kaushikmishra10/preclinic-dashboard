import React, { useState } from "react";
import logo from "../assets/images/preclinic-icon.svg";
import icon from "../assets/images/Lasvegas.svg";
import {
  BsArrowLeft,
  BsArrowDownUp,
  BsGrid,
  BsChevronDown,
  BsX,
  BsMoon,
} from "react-icons/bs";
import "../styles/theme.scss";
import "../styles/sidebar.scss";

// Menu data
const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <BsGrid />,
    children: [
      { id: "admin", label: "Admin Dashboard" },
      { id: "doctor", label: "Doctor Dashboard" },
      { id: "patient", label: "Patient Dashboard" },
    ],
  },
];

//Sidebar
const Sidebar = ({ onClose }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(true);
  const [openMenus, setOpenMenus] = useState({ dashboard: true });
  const [activeItem, setActiveItem] = useState("admin");

  React.useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const toggle = (id) => setOpenMenus((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div className="sidebar d-flex flex-column py-0">
      <div
        className="d-flex align-items-center justify-content-between px-1 py-1 border-bottom"
      >
        <a
          href="#"
          className="d-flex align-items-center gap-2 text-decoration-none"
        >
          <img src={logo} alt="Preclinic Logo" style={{ width: 35, height: 35 }} />
          <span
            className="fw-semibold fs-1"
            style={{ color: "var(--text-primary)" }}
          >
            Preclinic
          </span>
        </a>
        {/* Desktop: back arrow | Mobile: X close */}
        {onClose ? (
          <button
            className="btn btn-sm border-0 p-1 rounded-2 text-info"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <BsX size={20} />
          </button>
        ) : (
          <button
            className="btn btn-sm border-0 p-1 rounded-2 text-info"
            aria-label="Go back"
          >
            <BsArrowLeft size={16} />
          </button>
        )}
      </div>

      <div
        className="d-flex align-items-center justify-content-between mx-1 mt-1 px-2 py-2 rounded-3 bg-danger"
      >
        <div className="d-flex align-items-center gap-2">
          <img src={icon} alt="Las Vegas icon" style={{ width: 38, height: 38 }} />
          <div>
            <div
              className="fw-semibold text-success fs-6"
            >
              Trustcare Clinic
            </div>
            <div className="text-info" style={{ fontSize: 11 }}>
              Lasvegas
            </div>
          </div>
        </div>
        <span style={{ color: "var(--text-muted-clr)" }}>
          <BsArrowDownUp size={14} />
        </span>
      </div>

      <nav className="px-1 mt-1">
        <div className="sidebar-label mb-2 ps-1">Main Menu</div>

        <ul className="list-unstyled mb-0">
          {menuItems.map((item) => (
            <li key={item.id} className="mb-1">
              <button
                className={`menu-btn d-flex align-items-center gap-2 px-2 py-2 ${openMenus[item.id] ? "active" : ""}`}
                onClick={() => toggle(item.id)}
                aria-expanded={!!openMenus[item.id]}
              >
                <span className="flex-shrink-0">{item.icon}</span>

                <span className="flex-grow-1">{item.label}</span>

                {item.children && (
                  <BsChevronDown
                    className={`menu-chevron ${openMenus[item.id] ? "rotate" : ""}`}
                  />
                )}
              </button>

              {item.children && openMenus[item.id] && (
                <ul className="list-unstyled ps-4 mb-0 mt-1">
                  {item.children.map((child) => (
                    <li key={child.id} className="mb-1">
                      <button
                        className={`submenu-btn d-flex align-items-center gap-2 px-2 py-1 ${activeItem === child.id ? "active" : ""}`}
                        onClick={() => setActiveItem(child.id)}
                      >
                        <span className="sub-dot" />
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {showUpgrade && (
        <div
          className="mx-1 mb-3 p-3 rounded-3 text-center position-relative"
          style={{
            background: "var(--badge-bg)",
            border: "1.5px solid var(--upgrade-border)",
          }}
        >
          <button
            onClick={() => setShowUpgrade(false)}
            className="btn btn-sm border-0 p-0 position-absolute top-0 end-0 mt-2 me-2"
            style={{ color: "var(--text-muted-clr)", lineHeight: 1 }}
            aria-label="Close"
          >
            <BsX size={20} />
          </button>

          <div className="upgrade-logo d-flex align-items-center justify-content-center mx-auto mb-2">
            <img src={logo} alt="Preclinic Logo" />
          </div>

          <div
            className="fw-bold mb-1"
            style={{ fontSize: 13, color: "var(--text-primary)" }}
          >
            Upgrade To Pro
          </div>
          <div style={{ fontSize: 11, color: "var(--text-secondary)", lineHeight: 1.5 }}>
            Check 1 min video and begin use Preclinic like a pro
          </div>
        </div>
      )}

      <div
        className="d-flex align-items-center justify-content-between mx-1 mb-1 px-3 py-2 rounded-2 bg-danger"
      >
        <span
          className="d-flex align-items-center gap-2 text-success fw-semibold fs-6"
        >
          <BsMoon size={14} /> Dark Mode
        </span>
        <label className="toggle-wrap mb-0">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((v) => !v)}
            aria-label="Toggle dark mode"
          />
          <span className="toggle-track" />
        </label>
      </div>

    </div>
  );
};

export default Sidebar;