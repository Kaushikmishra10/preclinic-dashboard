import React, { useState } from "react";
import { allAppointments, statusConfig } from "../data/allappointments";
import "../styles/theme.scss";
import "../styles/Allappointments.css";

// ── Avatar ────────────────────────────────────
const Avatar = ({ image, name }) => (
  <div
    className="appt-avatar overflow-hidden flex-shrink-0"
    style={{ borderRadius: "50%" }}
  >
    <img
      src={image}
      alt={name}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

// ── Status badge ──────────────────────────────
const StatusBadge = ({ status }) => {
  const cfg = statusConfig[status] || { color: "#6b7a90", border: "#6b7a90" };
  return (
    <span
      className="appt-status-badge"
      style={{ color: cfg.color, borderColor: cfg.border, background: cfg.bg }}
    >
      {status}
    </span>
  );
};

// ── Table ─────────────────────────────────────
const AppointmentTable = ({ data }) => (
  <div className="appt-table-wrap">
    <table className="appt-table w-100">
      <thead>
        <tr>
          <th className="fs-5">Doctor</th>
          <th className="fs-5">Patient</th>
          <th className="fs-5">Date & Time</th>
          <th className="fs-5">Mode</th>
          <th className="fs-5">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {/* Doctor */}
            <td>
              <div className="d-flex align-items-center gap-2">
                <Avatar image={row.doctor.Image} name={row.doctor.name} />
                <div>
                  <div className="appt-name fs-5">{row.doctor.name}</div>
                  <div className="appt-sub fs-6">{row.doctor.specialty}</div>
                </div>
              </div>
            </td>
            {/* Patient */}
            <td>
              <div className="d-flex align-items-center gap-2">
                <Avatar image={row.patient.Image} name={row.patient.name} />
                <div>
                  <div className="appt-name fs-5">{row.patient.name}</div>
                  <div className="appt-sub fs-6">{row.patient.phone}</div>
                </div>
              </div>
            </td>
            {/* Date & Time */}
            <td><span className="appt-datetime fs-5">{row.datetime}</span></td>
            {/* Mode */}
            <td><span className="appt-mode fs-5">{row.mode}</span></td>
            {/* Status */}
            <td><StatusBadge status={row.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── All Appointments ──────────────────────────
const AllAppointments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-3 p-3 p-md-4 mt-3"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      >
        {/* Header */}
        <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
          <h6
            className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success"
            style={{ fontFamily: "var(--font)" }}
          >
            All Appointments
          </h6>
          <button
            className="btn btn-sm px-3 fs-6 text-success"
            style={{
              border: "1.5px solid var(--sidebar-border)",
              borderRadius: 8,
              background: "transparent",
              fontFamily: "var(--font)",
            }}
            onClick={() => setShowModal(true)}
          >
            View All
          </button>
        </div>

        {/* Table — sirf 5 rows */}
        <AppointmentTable data={allAppointments.slice(0, 5)} />
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
              width: "95%",
              maxWidth: 900,
              maxHeight: "85vh",
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
                All Appointments
              </h6>
              <button
                className="btn btn-sm border-0 p-1"
                style={{ fontSize: 22, color: "var(--text-secondary)", lineHeight: 1 }}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            {/* Table — saare rows */}
            <AppointmentTable data={allAppointments} />
          </div>
        </>
      )}
    </>
  );
};

export default AllAppointments;