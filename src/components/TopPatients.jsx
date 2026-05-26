import React, { useState } from "react";
import { BsX, BsCheck2 } from "react-icons/bs";
import {
  topPatients,
  recentTransactions,
  leaveRequests,
} from "../data/TopPatients";
import "../styles/theme.scss";
import "../styles/TopPatients.css";

// ── Avatar ────────────────────────────────────
const Avatar = ({ image, name, size = 40 }) => (
  <div
    className="overflow-hidden flex-shrink-0"
    style={{ width: size, height: size, minWidth: size, borderRadius: "50%" }}
  >
    <img
      src={image}
      alt={name}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

// ─────────────────────────────────────────────
// TOP 5 PATIENTS
// ─────────────────────────────────────────────
const Top5Patients = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-3 p-3 p-md-4 h-100 d-flex flex-column"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      >
        {/* Header */}
        <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
          <h6
            className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success"
            style={{ fontFamily: "var(--font)" }}
          >
            Top 5 Patients
          </h6>
          <button
            className="btn btn-sm px-3 fs-6 text-success"
            style={{
              border: "1.5px solid var(--sidebar-border)",
              borderRadius: 8,
              background: "transparent",
              fontFamily: "var(--font)",
            }}
            onClick={() => setShowModal(true)}  // ← modal open
          >
            View All
          </button>
        </div>

        {/* Top 5 only */}
        <div className="d-flex flex-column gap-0 flex-grow-1">
          {topPatients.slice(0, 5).map((p, i) => (
            <div
              key={p.id}
              className="d-block d-sm-flex align-items-center justify-content-between py-3"
              style={{
                borderBottom:
                  i < 4 ? "1.5px solid var(--sidebar-border)" : "none",
              }}
            >
              <div className="d-flex mb-1 mb-sm-0 align-items-center gap-sm-3">
                <Avatar image={p.Image} name={p.name} />
                <div className="ps-1 ps-sm-0">
                  <div
                    className="fw-semibold fs-6 fs-sm-5 text-success"
                    style={{ fontFamily: "var(--font)" }}
                  >
                    {p.name}
                  </div>
                  <div
                    className="fs-6 text-info"
                    style={{ fontFamily: "var(--font)", marginTop: 2 }}
                  >
                    Total Paid : {p.totalPaid}
                  </div>
                </div>
              </div>
              <span className="s3-appt-badge fs-6">
                {p.appointments} Appointments
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ background: "rgba(0,0,0,0.45)", zIndex: 1050 }}
            onClick={() => setShowModal(false)}
          />

          {/* Modal box */}
          <div
            className="position-fixed top-50 start-50 translate-middle bg-white rounded-3 p-4"
            style={{
              zIndex: 1055,
              width: "90%",
              maxWidth: 560,
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
          >
            {/* Modal header */}
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6
                className="fw-bold mb-0 fs-4 text-success"
                style={{ fontFamily: "var(--font)" }}
              >
                All Patients
              </h6>
              <button
                className="btn btn-sm border-0 p-1"
                style={{ fontSize: 20, color: "var(--text-secondary)", lineHeight: 1 }}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            {/* All patients list */}
            <div className="d-flex flex-column gap-0">
              {topPatients.map((p, i) => (
                <div
                  key={p.id}
                  className="d-flex align-items-center justify-content-between py-3"
                  style={{
                    borderBottom:
                      i < topPatients.length - 1
                        ? "1.5px solid var(--sidebar-border)"
                        : "none",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <Avatar image={p.Image} name={p.name} />
                    <div>
                      <div
                        className="fw-semibold fs-6 text-success"
                        style={{ fontFamily: "var(--font)" }}
                      >
                        {p.name}
                      </div>
                      <div
                        className="fs-6 text-info"
                        style={{ fontFamily: "var(--font)", marginTop: 2 }}
                      >
                        Total Paid : {p.totalPaid}
                      </div>
                    </div>
                  </div>
                  <span className="s3-appt-badge fs-6">
                    {p.appointments} Appointments
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

// ─────────────────────────────────────────────
// RECENT TRANSACTIONS
// ─────────────────────────────────────────────
const RecentTransactions = () => {
  const [filter, setFilter] = useState("Weekly");

  return (
    <div
      className="bg-white rounded-3 p-3 p-md-4 h-100 d-flex flex-column"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
        <h6
          className="fw-bold mb-1 mb-sm-0 fs-5 fs-sm-1 text-success"
          style={{
            fontFamily: "var(--font)",
          }}
        >
          Recent Transactions
        </h6>
        <select
          className="form-select form-select-sm fs-6 text-info"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: "auto",
            border: "1.5px solid var(--sidebar-border)",
            borderRadius: 8,
            fontFamily: "var(--font)",
          }}
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Daily</option>
        </select>
      </div>

      {/* List */}
      <div className="d-flex flex-column gap-0 flex-grow-1">
        {recentTransactions.map((t, i) => (
        <div
            key={t.id}
            className="d-block d-sm-flex align-items-center justify-content-between py-3"
            style={{
              borderBottom:
                i < recentTransactions.length - 1
                  ? "1.5px solid var(--sidebar-border)"
                  : "none",
            }}
        >
            <div className="d-block d-sm-flex align-items-center gap-3">
              <div
                className="overflow-hidden flex-shrink-0 rounded-3"
                style={{ width: 42, height: 42 }}
              >
                <img
                  src={t.image}
                  alt={t.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Title + Invoice */}
              <div className="d-block d-sm-flex flex-column">
                <div
                  className="fw-semibold fs-5 text-success"
                  style={{
                    fontFamily: "var(--font)",
                  }}
                >
                  {t.title}
                </div>
                <div
                  className="fs-6 mb-1 mb-sm-0 text-info"
                  style={{
                    fontFamily: "var(--font)",
                    marginTop: 2,
                  }}
                >
                  {t.invoice}
                </div>
              </div>
            </div>

            {/* Amount badge */}
            <span
              className="s3-amount-badge fs-6 text-danger"
              style={{
                background: t.positive ? "#16a34a" : "#ef4444",
              }}
            >
              {t.amount}
            </span>
        </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// LEAVE REQUESTS
// ─────────────────────────────────────────────
const LeaveRequests = () => {
  const [filter, setFilter] = useState("Today");

  return (
    <div className="bg-white rounded-3 p-3 p-md-4 h-100 d-flex flex-column"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>

      <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
        <h6 className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success" style={{fontFamily: "var(--font)" }}>
          Leave Requests
        </h6>
        <select className="form-select form-select-sm fs-6 text-success" value={filter} onChange={e => setFilter(e.target.value)}
          style={{ width: "auto",border: "1.5px solid var(--sidebar-border)", borderRadius: 8, fontFamily: "var(--font)" }}>
          <option>Today</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      <div className="d-flex flex-column gap-0 flex-grow-1">
        {leaveRequests.map((r, i) => (
          <div key={r.id} className="d-block d-sm-flex align-items-center justify-content-between py-3"
            style={{ borderBottom: i < leaveRequests.length - 1 ? "1.5px solid var(--sidebar-border)" : "none" }}>
            <div className="d-block d-sm-flex align-items-center gap-3">
              <Avatar image={r.image} name={r.name} /> 
              <div>
                <div className="fw-semibold fs-5 text-success" style={{fontFamily: "var(--font)" }}>
                  {r.name}
                </div>
                <div className="fs-6 mb-1 mb-sm-0 text-info" style={{fontFamily: "var(--font)", marginTop: 2 }}>
                  {r.detail}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <button className="s3-action-btn s3-reject">
                <BsX size={20} />
              </button>
              <button className="s3-action-btn s3-accept">
                <BsCheck2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────
const DashboardSection3 = () => (
  <div className="row g-3 mt-1 align-items-stretch">
    <div className="col-12 col-xl-6 col-xxl-4">
      <Top5Patients />
    </div>
    <div className="col-12 col-xl-6 col-xxl-4">
      <RecentTransactions />
    </div>
    <div className="col-12 col-xl-6 col-xxl-4">
      <LeaveRequests />
    </div>
  </div>
);

export default DashboardSection3;