import React, { useState } from "react";
import {
  departmentsData,
  totalPatients,
  doctorScheduleStats,
  doctorsList,
  incomeByTreatment,
} from "../data/departments";
import "../styles/theme.scss";
import "../styles/Departments.css";

// ─────────────────────────────────────────────
// DONUT CHART (pure SVG)
// ─────────────────────────────────────────────
const DonutChart = ({ data, total }) => {
  const size = 400;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 170;
  const inner = 100;
  const stroke = radius - inner;
  const circ = 2 * Math.PI * (inner + stroke / 2);

  const totalVal = data.reduce((s, d) => s + d.value, 0);
  let offset = 0;

  const slices = data.map((d) => {
    const pct = d.value / totalVal;
    const dash = pct * circ;
    const gap = circ - dash;
    const slice = { ...d, dash, gap, offset };
    offset += dash;
    return slice;
  });

  const r = inner + stroke / 2;

  return (
    <div className="donut-wrap">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((s) => (
          <circle
            key={s.id}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${s.dash} ${s.gap}`}
            strokeDashoffset={-s.offset + circ / 4}
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        ))}
        {/* Center text */}
        <text
          className="d-none d-sm-block"
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fontWeight={500}
          fontSize={16}
          fill="#0A1B39"
          fontFamily="var(--font)"
        >
          Total Patient
        </text>
        <text
          className="d-none d-sm-block"
          x={cx}
          y={cy + 14}
          textAnchor="middle"
          fontSize={24}
          fontWeight="700"
          fill="#0A1B39"
          fontFamily="var(--font)"
        >
          {total}
        </text>
      </svg>
    </div>
  );
};

// ─────────────────────────────────────────────
// TOP 3 DEPARTMENTS
// ─────────────────────────────────────────────
const TopDepartments = () => {
  const [filter, setFilter] = useState("Weekly");

  return (
    <div
      className="bg-white rounded-3 p-3 p-md-4 h-100"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
        <h6
          className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success"
          style={{
            fontFamily: "var(--font)",
          }}
        >
          Top 3 Departments
        </h6>
        <select
          className="form-select form-select-sm fs-6 text-success"
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

      {/* Donut chart */}
      <div
        className="d-flex justify-content-center my-3 mx-auto"
        style={{ width: "100%", maxWidth: 600}}
      >
        <DonutChart data={departmentsData} total={totalPatients} />
      </div>

      {/* Legend */}
      <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap mt-2">
        {departmentsData.map((d) => (
          <div key={d.id} className="d-flex align-items-center gap-1">
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: d.color,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "var(--text-secondary)",
                fontFamily: "var(--font)",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                {d.value}
              </span>{" "}
              {d.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// DOCTORS SCHEDULE
// ─────────────────────────────────────────────
const DoctorsSchedule = () => (
  <div
    className="bg-white rounded-3 p-3 p-md-4 h-100"
    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
  >
    {/* Header */}
    <div
      className="d-block d-xl-flex align-items-center justify-content-between mb-3 pb-3"
      style={{ borderBottom: "1.5px solid var(--sidebar-border)" }}
    >
      <h6
        className="fw-bold mb-1 mb-xl-0 fs-4 fs-sm-1 text-success"
        style={{ fontFamily: "var(--font)" }}
      >
        Doctors Schedule
      </h6>
      <button
        className="btn btn-sm px-3 fs-6 text-success"
        style={{
          border: "1.5px solid var(--sidebar-border)",
          borderRadius: 8,
          background: "transparent",
          fontFamily: "var(--font)",
        }}
      >
        View All
      </button>
    </div>

    {/* Stats row */}
    <div className="d-flex mb-3">
      {doctorScheduleStats.map((s, i) => (
        <div
          key={i}
          className="flex-grow-1 text-center py-2"
          style={{
            borderRight:
              i < doctorScheduleStats.length - 1 ? "2px solid #c9ced7" : "none",
          }}
        >
          <div
            className="fs-6 text-info"
            style={{
              fontFamily: "var(--font)",
              marginBottom: 4,
            }}
          >
            {s.label}
          </div>
          <div
            className="fw-bold fs-1 text-success"
            style={{
              fontFamily: "var(--font)",
            }}
          >
            {s.value}
          </div>
        </div>
      ))}
    </div>

    {/* Doctors list */}
    <div className="d-flex flex-column gap-2">
      {doctorsList.map((doc) => (
        <div
          key={doc.id}
          className="d-block d-sm-flex align-items-center gap-3 py-2"
        >
          {/* Avatar */}
          <div
            className="rounded-circle mb-0 overflow-hidden flex-shrink-0"
            style={{
              width: 40,
              height: 40,
              background: doc.color,
            }}
          >
            <img
              src={doc.image}
              alt={doc.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Info */}
          <div className="flex-grow-1">
            <div
              className="fw-semibold fs-5 text-success"
              style={{
                fontFamily: "var(--font)",
              }}
            >
              {doc.name}
            </div>
            <div
              className="text-info mb-1 mb-sm-0"
              style={{
                fontSize: 13,
                fontFamily: "var(--font)",
              }}
            >
              {doc.specialty}
            </div>
          </div>
          {/* Book Now */}
          <button
            className="btn btn-sm text-white flex-shrink-0 fs-6"
            style={{
              background: "#2E37A4",
              borderRadius: 8,
              padding: "5px 14px",
              fontFamily: "var(--font)",
            }}
          >
            Book Now
          </button>
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// INCOME BY TREATMENT
// ─────────────────────────────────────────────
const IncomeByTreatment = () => {
  const [filter, setFilter] = useState("Weekly");

  return (
    <div
      className="bg-white rounded-3 p-3 p-md-4 h-100"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="d-block d-xl-flex align-items-center justify-content-between mb-3">
        <h6
          className="fw-bold mb-1 mb-xl-0 fs-4 fs-sm-1 text-success"
          style={{
            fontFamily: "var(--font)",
          }}
        >
          Income By Treatment
        </h6>
        <select
          className="form-select form-select-sm fs-6 text-success"
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

      {/* Treatment list */}
      <div className="d-flex flex-column">
        {incomeByTreatment.map((item, i) => (
          <div
            key={item.id}
            className="d-flex align-items-center justify-content-between py-3"
          >
            <div>
              <div
                className="fw-semibold fs-5 text-success"
                style={{
                  fontFamily: "var(--font)",
                  marginBottom: 4,
                }}
              >
                {item.label}
              </div>
              <div
                className="fs-6 text-info"
                style={{
                  fontFamily: "var(--font)",
                }}
              >
                {item.appointments.toLocaleString()} Apointments
              </div>
            </div>
            <div
              className="fw-bold fs-5 text-success"
              style={{
                fontFamily: "var(--font)",
                flexShrink: 0,
              }}
            >
              {item.income}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
const DashboardSection2 = () => (
  <div className="row g-3 mt-1 align-items-stretch">

    {/* Top 3 Departments */}
    <div className="col-12 col-xxl-4">
      <TopDepartments />
    </div>

    {/* Doctors Schedule + Income By Treatment */}
    <div className="col-12 col-xxl-8 d-flex flex-column flex-lg-row gap-3">
      <div className="flex-grow-1" style={{ minWidth: 0 }}>
        <DoctorsSchedule />
      </div>
      <div className="flex-grow-1" style={{ minWidth: 0 }}>
        <IncomeByTreatment />
      </div>
    </div>

  </div>
);

export default DashboardSection2;
