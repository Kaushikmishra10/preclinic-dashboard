import React, { useState } from "react";
import logo from "../assets/images/preclinic-icon.svg";
import avatar from "../assets/images/avatar.svg";
import {
  BsCalendar3,
  BsGear,
  BsBell,
  BsSearch,
  BsX,
} from "react-icons/bs";
import "../styles/theme.scss";

const Header = ({ onSidebarClick, onLogout }) => {
  const [search, setSearch] = useState("");
  const [headerDrawerOpen, setHeaderDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar header d-flex align-items-center justify-content-between px-3 py-2 gap-3 border-bottom">

        {/* ── LEFT: Sidebar hamburger + Logo — 992px se niche dikhega ── */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <button
            className="header-icon-btn"
            onClick={onSidebarClick}
            aria-label="Open sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6"  x2="21" y2="6"  />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <a href="#" className="d-flex align-items-center gap-2 text-decoration-none">
            <img src={logo} alt="Preclinic" style={{ width: 26, height: 26 }} />
            <span className="fw-semibold d-none d-sm-inline"
              style={{ fontSize: 15, color: "var(--text-primary)" }}>
              Preclinic
            </span>
          </a>
        </div>

        {/* ── MIDDLE: Search — 756px se upar ── */}
        <div className="header-search d-flex justify-content-between">
          <BsSearch className="header-search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="header-search-kbd text-success fw-bold fs-5">⌘</span>
        </div>

        {/* ── RIGHT: Icons — 756px se upar ── */}
        <div className="d-flex align-items-center gap-3 header-right-icons">
          <button className="header-icon-btn" aria-label="Calendar">
            <BsCalendar3 size={25} />
          </button>
          <button className="header-icon-btn" aria-label="Settings">
            <BsGear size={25} />
          </button>
          <button className="header-icon-btn" aria-label="Notifications">
            <BsBell size={25} />
            <span className="header-badge" />
          </button>
          <img
            src={avatar}
            alt="User avatar"
            className="header-avatar"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div
            className="header-avatar d-none align-items-center justify-content-center text-white fw-semibold"
            style={{ background: "linear-gradient(135deg, #2E37A4, #06AED4)", fontSize: 13 }}
          >A</div>

          {/* Logout button — desktop */}
          <button
            className="btn btn-sm px-3"
            style={{ fontSize: 12, color: "#ef4444", border: "1.5px solid #ef4444", borderRadius: 8, background: "transparent", fontFamily: "var(--font)", whiteSpace: "nowrap" }}
            onClick={() => onLogout && onLogout()}
          >
            Log out
          </button>
        </div>

        {/* ── RIGHT: Header hamburger — 756px se niche ── */}
        <button
          className="header-icon-btn header-hamburger ms-auto"
          type="button"
          onClick={() => setHeaderDrawerOpen(true)}
          aria-label="Open header menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

      </nav>

      {/* ── Header drawer — search + icons, 756px se niche ── */}
      {headerDrawerOpen && (
        <>
          <div className="header-drawer">
            {/* Close */}
            <div className="d-flex justify-content-end px-3 pt-2">
              <button className="header-icon-btn" onClick={() => setHeaderDrawerOpen(false)}>
                <BsX size={22} />
              </button>
            </div>
            {/* Search */}
            <div className="px-3 pb-3">
              <div className="header-search" style={{ width: "100%" }}>
                <BsSearch className="header-search-icon" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: "100%" }}
                />
                <span className="header-search-kbd text-success fw-bold fs-5">⌘</span>
              </div>
            </div>
            {/* Icons */}
            <div className="d-flex align-items-center gap-3 px-3 pb-3">
              <button className="header-icon-btn" aria-label="Calendar">
                <BsCalendar3 size={22} />
              </button>
              <button className="header-icon-btn" aria-label="Settings">
                <BsGear size={22} />
              </button>
              <button className="header-icon-btn" aria-label="Notifications">
                <BsBell size={22} />
                <span className="header-badge" />
              </button>
              <img
                src={avatar}
                alt="User avatar"
                className="header-avatar"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="header-avatar d-none align-items-center justify-content-center text-white fw-semibold"
                style={{ background: "linear-gradient(135deg, #2E37A4, #06AED4)", fontSize: 13 }}
              >A</div>

              {/* Logout — mobile drawer */}
              <button
                className="btn btn-sm px-3 ms-auto"
                style={{ fontSize: 12, color: "#ef4444", border: "1.5px solid #ef4444", borderRadius: 8, background: "transparent", fontFamily: "var(--font)", whiteSpace: "nowrap" }}
                onClick={() => { setHeaderDrawerOpen(false); onLogout && onLogout(); }}
              >
                Log out
              </button>
            </div>
          </div>

          {/* Overlay */}
          <div
            className="header-drawer-overlay"
            onClick={() => setHeaderDrawerOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Header;