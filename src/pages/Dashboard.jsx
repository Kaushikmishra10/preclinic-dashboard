import React from "react";
import { VictoryBar, VictoryArea, VictoryChart, VictoryAxis } from "victory";
import {
  BsCalendarCheck,
  BsPeopleFill,
  BsCalendar2Plus,
  BsCurrencyDollar,
  BsPlusLg,
  BsCalendarWeek,
} from "react-icons/bs";
import Appointments from "../components/Appointments";
import Departments from "../components/Departments";
import Allappointments from "../components/Allappointments";
import TopPatients from "../components/TopPatients";
import doctors from "../assets/images/doctors.svg";
import appointments from "../assets/images/appointments.svg";
import patients from "../assets/images/patients.svg";
import revenue from "../assets/images/revenue.svg";
import { statsCards, chartDataMap } from "../data/adminData";
import "../styles/theme.scss";

// ── Icon map ──────────────────────────────────
const iconMap = {
  doctors:     <img src={doctors} alt="doctor image" />,
  patients:    <img src={patients} alt="patients image"  />,
  appointment: <img src={appointments} alt="appointment image" />,
  revenue:     <img src={revenue} alt="revenue image" />,
};

// ── Axis completely hidden ────────────────────
const hiddenAxis = {
  axis:       { stroke: "transparent" },
  ticks:      { stroke: "transparent" },
  tickLabels: { fill: "transparent", fontSize: 0 },
  grid:       { stroke: "transparent" },
};

// ── Mini Bar Chart ────────────────────────────
const MiniBarChart = ({ data, color }) => (
  <VictoryChart
    width={75}
    height={38}
    padding={{ top: 1, bottom: 1, left: 0, right: 0 }}
    style={{ parent: { background: "transparent" } }}
  >
    <VictoryAxis style={hiddenAxis} />
    <VictoryAxis dependentAxis style={hiddenAxis} />
    <VictoryBar
      data={data}
      x="day"
      y="value"
      barWidth={7}
      style={{ data: { fill: color, opacity: 0.85 } }}
      animate={false}
    />
  </VictoryChart>
);

// ── Mini Area Chart ───────────────────────────
const MiniAreaChart = ({ data, color }) => (
  <VictoryChart
    width={75}
    height={38}
    padding={{ top: 1, bottom: 1, left: 0, right: 0 }}
    style={{ parent: { background: "transparent" } }}
  >
    <VictoryAxis style={hiddenAxis} />
    <VictoryAxis dependentAxis style={hiddenAxis} />
    <VictoryArea
      data={data}
      x="day"
      y="value"
      style={{
        data: {
          fill: color,
          fillOpacity: 0.2,
          stroke: color,
          strokeWidth: 2,
        },
      }}
      animate={false}
    />
  </VictoryChart>
);

// ── Mini Chart switcher ───────────────────────
const MiniChart = ({ type, data, color }) =>
  type === "bar"
    ? <MiniBarChart  data={data} color={color} />
    : <MiniAreaChart data={data} color={color} />;

// ── Stats Card ────────────────────────────────
const StatCard = ({ card }) => {
  const chartData = chartDataMap[card.id];

  return (
    <div className="col-12 col-sm-6 col-xl-3">
      <div
        className="bg-white rounded-3 p-3 h-100"
        style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
      >
        {/* Top row: icon LEFT, badge+period RIGHT */}
        <div className="d-flex align-items-start justify-content-between mb-3">
          {/* Icon */}
          <div
            className="d-flex align-items-center justify-content-center rounded-3"
            style={{ width: 38, height: 38, flexShrink: 0 }}
          >
            {iconMap[card.id]}
          </div>

          {/* Badge + period */}
          <div className="text-end">
            <span
              className="rounded-pill px-2 d-inline-block fs-6 fw-bold"
              style={{
                background: card.positive ? "#16a34a" : "#dc2626",
                color:      card.positive ? "#dcfce7" : "#fee2e2",
              }}
            >
              {card.change}
            </span>
            <div className="text-info fs-6">
              {card.period}
            </div>
          </div>
        </div>

        {/* Bottom row: label+value LEFT, chart RIGHT */}
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <div className="text-info fs-5">
              {card.label}
            </div>
            <div
              className="fw-bold fs-1 text-success"
              style={{lineHeight: 1, letterSpacing: 1, marginTop: 4}}
            >
              {card.value}
            </div>
          </div>

          {/* Chart — fixed size, no overflow */}
          <div style={{ width: 75, height: 38, flexShrink: 0 }}>
            <MiniChart type={card.chartType} data={chartData} color={card.chartColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Dashboard page ────────────────────────────
const Dashboard = () => (
  <div className="p-3 p-md-4" style={{ fontFamily: "var(--font)" }}>

    {/* Page header */}
    <div className="d-block d-sm-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
      <h5 className="fw-bold mb-1 mb-sm-0 text-success fs-1">
        Admin Dashboard
      </h5>
      <div className="d-block d-sm-flex gap-2">
        <button
          className="btn btn-sm d-flex align-items-center gap-2 px-3 py-2 mb-1 mb-md-0 text-white bg-primary fs-6"
          style={{ borderRadius: 8}}
        >
          <BsPlusLg size={16} /> New Appointment
        </button>
        <button
          className="btn btn-sm d-flex align-items-center gap-2 px-3 py-2 fs-6 text-info"
          style={{
            border: "1.5px solid var(--sidebar-border)",
            borderRadius: 8,
            background: "#fff",
          }}
        >
          <BsCalendarWeek size={16} /> Schedule Availability
        </button>
      </div>
    </div>

    {/* Stats cards — h-100 on inner div makes all same height */}
    <div className="row g-3 align-items-stretch">
      {statsCards.map((card) => (
        <StatCard key={card.id} card={card} />
      ))}
    </div>

    <Appointments/>
    <Departments />
    <Allappointments />
    <TopPatients/>

  </div>
);

export default Dashboard;