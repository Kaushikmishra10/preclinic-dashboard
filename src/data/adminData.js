// =============================================
// dashboardData.js — Dashboard ke saare charts
// aur stats ka data yahan se aata hai
// =============================================

// ── Stats cards ──────────────────────────────
export const statsCards = [
  {
    id: "doctors",
    label: "Doctors",
    value: "247",
    change: "+95%",
    positive: true,
    period: "in last 7 Days",
    color: "#7B61FF",       // icon bg
    chartColor: "#7B61FF",
    chartType: "bar",
  },
  {
    id: "patients",
    label: "Patients",
    value: "4178",
    change: "+25%",
    positive: true,
    period: "in last 7 Days",
    color: "#FF6B35",
    chartColor: "#FF6B35",
    chartType: "area",
  },
  {
    id: "appointment",
    label: "Appointment",
    value: "12178",
    change: "-15%",
    positive: false,
    period: "in last 7 Days",
    color: "#06AED4",
    chartColor: "#06AED4",
    chartType: "bar",
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "$55,1240",
    change: "+25%",
    positive: true,
    period: "in last 7 Days",
    color: "#0E9384",
    chartColor: "#0E9384",
    chartType: "area",
  },
];

// ── Doctors mini bar chart data ───────────────
export const doctorsChartData = [
  { day: "M", value: 30 },
  { day: "T", value: 55 },
  { day: "W", value: 40 },
  { day: "T", value: 70 },
  { day: "F", value: 45 },
  { day: "S", value: 80 },
  { day: "S", value: 60 },
];

// ── Patients mini area chart data ─────────────
export const patientsChartData = [
  { day: "M", value: 20 },
  { day: "T", value: 45 },
  { day: "W", value: 28 },
  { day: "T", value: 60 },
  { day: "F", value: 35 },
  { day: "S", value: 55 },
  { day: "S", value: 40 },
];

// ── Appointment mini bar chart data ───────────
export const appointmentChartData = [
  { day: "M", value: 50 },
  { day: "T", value: 35 },
  { day: "W", value: 60 },
  { day: "T", value: 40 },
  { day: "F", value: 70 },
  { day: "S", value: 30 },
  { day: "S", value: 55 },
];

// ── Revenue mini area chart data ──────────────
export const revenueChartData = [
  { day: "M", value: 30 },
  { day: "T", value: 50 },
  { day: "W", value: 40 },
  { day: "T", value: 65 },
  { day: "F", value: 55 },
  { day: "S", value: 75 },
  { day: "S", value: 60 },
];

// ── Chart data map — id se match karo ─────────
export const chartDataMap = {
  doctors:     doctorsChartData,
  patients:    patientsChartData,
  appointment: appointmentChartData,
  revenue:     revenueChartData,
};