import React, { useState } from "react";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryStack,
  VictoryTheme,
} from "victory";
import { BsCalendar3, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  appointmentStatBoxes,
  monthlyAppointmentData,
  chartColors,
  legendItems,
  appointmentsList,
  popularDoctors,
} from "../data/appointmentData";
import doctor from "../assets/images/doctors.svg";
import "../styles/theme.scss";
import "../styles/Appointments.css";

// ─────────────────────────────────────────────
// AXIS STYLES
// ─────────────────────────────────────────────
const xAxisStyle = {
  axis: { stroke: "#e8edf2" },
  ticks: { stroke: "transparent" },
  tickLabels: {
    fontSize: 9,
    fill: "#9aa5b4",
    fontFamily: "Poppins,sans-serif",
    padding: 4,
  },
  grid: { stroke: "transparent" },
};
const yAxisStyle = {
  axis: { stroke: "transparent" },
  ticks: { stroke: "transparent" },
  tickLabels: {
    fontSize: 9,
    fill: "#9aa5b4",
    fontFamily: "Poppins,sans-serif",
    padding: 6,
  },
  grid: { stroke: "#f0f4f8", strokeDasharray: "4,4" },
};

// ─────────────────────────────────────────────
// STAT BOX
// ─────────────────────────────────────────────
const StatBox = ({ item }) => (
  <div
    className="flex-grow-1 p-1 rounded-3"
    style={{ border: "1.5px solid var(--sidebar-border)", minWidth: 0 }}
  >
    <div className="d-flex align-items-center justify-content-center gap-2">
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: item.color,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span
        style={{
          className: "fs-6 text-info",
          fontFamily: "var(--font)",
        }}
      >
        {item.label}
      </span>
    </div>
    <div
      className="fw-bold d-flex justify-content-center fs-4 fs-sm-1 text-success"
      style={{
        fontFamily: "var(--font)",
      }}
    >
      {item.value}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// MINI CALENDAR
// ─────────────────────────────────────────────
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MiniCalendar = () => {
  const now = new Date();
  const [current, setCurrent] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState({
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });

  const today = now.getDate();
  const year = current.getFullYear();
  const month = current.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--)
    cells.push({ day: daysInPrev - i, curr: false });
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ day: d, curr: true });
  let next = 1;
  while (cells.length % 7 !== 0)
    cells.push({ day: next++, curr: false });

  return (
    <div>
      {/* Month + Year nav */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <button
          className="btn btn-sm border-0 p-1"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setCurrent(new Date(year, month - 1, 1))}
        >
          <BsChevronLeft size={14} />
        </button>
        <span
          className="fw-bold"
          style={{
            fontSize: 16,
            color: "var(--text-primary)",
            fontFamily: "var(--font)",
          }}
        >
          {MONTHS[month]} {year}
        </span>
        <button
          className="btn btn-sm border-0 p-1"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setCurrent(new Date(year, month + 1, 1))}
        >
          <BsChevronRight size={14} />
        </button>
      </div>

      {/* Day headers */}
      <div className="d-grid mb-2" style={{ gridTemplateColumns: "repeat(7,1fr)" }}>
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-center"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-muted-clr)",
              fontFamily: "var(--font)",
              padding: "2px 0",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Date cells */}
      <div className="d-grid" style={{ gridTemplateColumns: "repeat(7,1fr)", gap: 3 }}>
        {cells.map((cell, i) => {
          const isToday =
            cell.curr &&
            cell.day === today &&
            month === now.getMonth() &&
            year === now.getFullYear();

          // ← ab teeno check ho rahe hain
          const isSelected =
            cell.curr &&
            cell.day === selectedDay.day &&
            month === selectedDay.month &&
            year === selectedDay.year;

          let bg      = "transparent";
          let color   = cell.curr ? "var(--text-primary)" : "var(--text-muted-clr)";
          let fw      = 400;
          let outline = "none";

          if (isToday && !isSelected) {
            outline = "2px solid #2E37A4";
            color   = "#2E37A4";
            fw      = 700;
          }
          if (isSelected) {
            bg      = "#2E37A4";
            color   = "#fff";
            fw      = 700;
            outline = "none";
          }

          return (
            <div
              key={i}
              onClick={() =>
                cell.curr &&
                setSelectedDay({ day: cell.day, month, year }) // ← month aur year bhi save
              }
              className="text-center d-flex align-items-center justify-content-center"
              style={{
                height: 32,
                fontSize: 13,
                borderRadius: 6,
                fontFamily: "var(--font)",
                cursor:     cell.curr ? "pointer" : "default",
                background: bg,
                color,
                fontWeight: fw,
                outline,
                outlineOffset: "-2px",
                transition: "background 0.15s, color 0.15s",
                userSelect: "none",
              }}
            >
              {cell.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// APPOINTMENT ITEM
// ─────────────────────────────────────────────
const AppointmentItem = ({ item }) => (
  <div
    className="py-3 px-2 rounded-3 mb-3"
    style={{
      minHeight: 72,
      background: item.bgColor,
    }}
  >
    <div className="d-block d-sm-flex align-items-center justify-content-between gap-3">
      <div className="flex-grow-1">
        <div
          className="fw-semibold mb-1 fs-6 fs-sm-4 text-success"
          style={{
            fontFamily: "var(--font)",
          }}
        >
          {item.title}
        </div>
        <div
          className="d-flex align-items-center gap-sm-2 fs-6 text-info"
          style={{
            fontFamily: "var(--font)",
          }}
        >
          <BsCalendar3 className="d-none d-sm-block" size={12} /> {item.date}
        </div>
      </div>
      <div
        className="overflow-hidden flex-shrink-0"
        style={{
          height: 40,
        }}
      >
        <img
          className="visit-img object-fit-cover"
          src={item.image}
          alt={item.title}
        //   style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  </div>
);
// ─────────────────────────────────────────────
// DOCTOR CARD
// ─────────────────────────────────────────────
const DoctorCard = ({ doctor }) => (
  <div className="col-12 col-sm-6 col-xxl-4">
    <div
      className="p-3 rounded-3 h-100"
      style={{ border: "1.5px solid var(--sidebar-border)" }}
    >
      <div className="d-flex align-items-center gap-2 mb-2">
        <div
          className="rounded-circle overflow-hidden"
          style={{
            width: 42,
            height: 42,
            flexShrink: 0,
            background: doctor.color,
          }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <div
            className="fw-semibold"
            style={{
              fontSize: 14,
              color: "var(--text-primary)",
              fontFamily: "var(--font)",
              lineHeight: 1.3,
            }}
          >
            {doctor.name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              fontFamily: "var(--font)",
            }}
          >
            {doctor.specialty}
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 15,
          color: "var(--text-secondary)",
          fontFamily: "var(--font)",
        }}
      >
        <span className="fw-bold" style={{ color: "var(--text-primary)" }}>
          {doctor.bookings}
        </span>{" "}
        Bookings
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
const AppointmentStatistics = () => {
  const [filter, setFilter] = useState("Monthly");
  const [apptFilter, setApptFilter] = useState("All Type");
  const [docFilter, setDocFilter] = useState("Weekly");

  return (
    <div className="row g-3 mt-1 align-items-stretch">
      {/* ── LEFT col ── */}
      <div className="col-12 col-xl-7 d-flex flex-column gap-3 mb-3 mb-lg-0">
        {/* Appointment Statistics card */}
        <div
          className="bg-white rounded-3 p-3 p-md-4"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
            <h6
              className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success"
              style={{ fontFamily: "var(--font)" }}
            >
              Appointment Statistics
            </h6>
            <select
              className="form-select form-select-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                width: "auto",
                fontSize: 14,
                color: "var(--text-secondary)",
                border: "1.5px solid var(--sidebar-border)",
                borderRadius: 8,
                fontFamily: "var(--font)",
              }}
            >
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>

          <div className="d-flex gap-2 mb-1 flex-wrap appt-stat-boxes">
            {appointmentStatBoxes.map((item) => (
              <StatBox key={item.id} item={item} />
            ))}
          </div>

          <div className="appt-chart-wrap">
            <VictoryChart
              domainPadding={{ x: 14 }}
              domain={{ y: [0, 5000] }}
              height={240}
              padding={{ top: 10, bottom: 40, left: 42, right: 16 }}
              theme={VictoryTheme.clean}
              style={{
                parent: { width: "100%", fontFamily: "Poppins,sans-serif" },
              }}
            >
              <VictoryAxis
                dependentAxis
                tickValues={[0, 1000, 2000, 3000, 4000, 5000]}
                tickFormat={(t) => (t === 0 ? "0K" : `${t / 1000}K`)}
                style={yAxisStyle}
              />
              <VictoryAxis
                tickFormat={monthlyAppointmentData.map((d) => d.month)}
                style={{
                  ...xAxisStyle,
                  tickLabels: {
                    fontSize: 9,
                    fill: "#9aa5b4",
                    fontFamily: "Poppins,sans-serif",
                    padding: 6,
                  },
                }}
              />
              <VictoryStack>
                <VictoryBar
                  data={monthlyAppointmentData}
                  x="month"
                  y="completed"
                  barWidth={11}
                  cornerRadius={{ top: 2 }}
                  style={{ data: { fill: chartColors.completed } }}
                  animate={false}
                />
                <VictoryBar
                  data={monthlyAppointmentData}
                  x="month"
                  y="ongoing"
                  barWidth={11}
                  style={{ data: { fill: chartColors.ongoing } }}
                  animate={false}
                />
                <VictoryBar
                  data={monthlyAppointmentData}
                  x="month"
                  y="rescheduled"
                  barWidth={11}
                  style={{ data: { fill: chartColors.rescheduled } }}
                  animate={false}
                />
              </VictoryStack>
            </VictoryChart>
          </div>

          {/* Legend — colored dots */}
          <div className="appt-legend">
            {legendItems.map((item) => (
              <div key={item.key} className="appt-legend-item">
                <span
                  className="appt-legend-dot"
                  style={{ background: item.color }}
                />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Popular Doctors card */}
        <div
          className="bg-white rounded-3 p-3 p-md-4 flex-grow-1"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
        <div className="d-block d-sm-flex align-items-center justify-content-between mb-3">
            <h6
              className="fw-bold mb-1 mb-sm-0 fs-4 fs-sm-1 text-success"
              style={{
                fontFamily: "var(--font)",
              }}
            >
              Popular Doctors
            </h6>
            <select
              className="form-select form-select-sm"
              value={docFilter}
              onChange={(e) => setDocFilter(e.target.value)}
              style={{
                width: "auto",
                fontSize: 14,
                color: "var(--text-secondary)",
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

          <div className="row g-3">
            {popularDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT col ── */}
      <div className="col-12 col-xl-5">
        <div
          className="bg-white rounded-3 p-3 p-md-4 h-100 d-flex flex-column"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          <div className="d-block d-sm-flex align-items-center justify-content-between mb-1 mb-sm-2 mb-lg-5">
            <h6
              className="fw-bold mb-1 mb-sm-0 fs-1 text-success"
              style={{ fontFamily: "var(--font)" }}
            >
              Appointments
            </h6>
            <select
              className="form-select form-select-sm"
              value={apptFilter}
              onChange={(e) => setApptFilter(e.target.value)}
              style={{
                width: "auto",
                fontSize: 14,
                color: "var(--text-secondary)",
                border: "1.5px solid var(--sidebar-border)",
                borderRadius: 8,
                fontFamily: "var(--font)",
              }}
            >
              <option>All Type</option>
              <option>General Visit</option>
              <option>Consultation</option>
            </select>
          </div>

          <div
            className="p-2 mb-1 mb-lg-5 rounded-3"
          >
            <MiniCalendar />
          </div>

          <div className="flex-grow-1">
            {appointmentsList.map((item) => (
              <AppointmentItem key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center mt-auto pt-3 ">
            <button
              className="btn btn-sm w-100 py-2 fs-5  text-success fw-semibold"
              style={{
                border: "1.5px solid var(--sidebar-border)",
                borderRadius: 8,
                fontFamily: "var(--font)",
                background: "#F5F6F8",
              }}
            >
              View All Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentStatistics;
