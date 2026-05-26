// =============================================
// appointmentStatsData.js
// =============================================
import doctor from "../assets/images/doctor.png";
import doctor2 from "../assets/images/doctor2.png";
import doctor3 from "../assets/images/doctor3.png";
import visit from "../assets/images/visit.png";

// ── 4 mini stat boxes ─────────────────────────
export const appointmentStatBoxes = [
  { id: "all",        label: "All Appointments", value: "6314", color: "#2E37A4" },
  { id: "cancelled",  label: "Cancelled",        value: "456",  color: "#ef4444" },
  { id: "reschedule", label: "Reschedule",       value: "745",  color: "#ec4899" },
  { id: "completed",  label: "Completed",        value: "4578", color: "#0E9384" },
];

// ── Stacked bar chart data ─────────────────────
export const monthlyAppointmentData = [
  { month: "Jan", completed: 1800, ongoing: 700,  rescheduled: 300  },
  { month: "Feb", completed: 1600, ongoing: 600,  rescheduled: 200  },
  { month: "Mar", completed: 2400, ongoing: 900,  rescheduled: 400  },
  { month: "Apr", completed: 2600, ongoing: 900,  rescheduled: 300  },
  { month: "May", completed: 3200, ongoing: 1100, rescheduled: 500  },
  { month: "Jun", completed: 900,  ongoing: 500,  rescheduled: 200  },
  { month: "Jul", completed: 1200, ongoing: 600,  rescheduled: 300  },
  { month: "Aug", completed: 1800, ongoing: 700,  rescheduled: 300  },
  { month: "Sep", completed: 3500, ongoing: 1000, rescheduled: 400  },
  { month: "Oct", completed: 3200, ongoing: 1100, rescheduled: 400  },
  { month: "Nov", completed: 2000, ongoing: 800,  rescheduled: 300  },
  { month: "Dec", completed: 1800, ongoing: 700,  rescheduled: 300  },
];

// ── Chart colors ──────────────────────────────
export const chartColors = {
  completed:   "#06AED4",
  ongoing:     "#2E37A4",
  rescheduled: "#0E9384",
};

// ── Legend items ──────────────────────────────
export const legendItems = [
  { key: "completed",   label: "Completed",   color: "#06AED4" },
  { key: "ongoing",     label: "Ongoing",     color: "#2E37A4" },
  { key: "rescheduled", label: "Rescheduled", color: "#0E9384" },
];

// ── Appointments list ─────────────────────────
export const appointmentsList = [
  { id: 1, title: "General Visit", date: "Wed, 05 Apr 2025, 06:30 PM", image: visit, bgColor: "#E7E8EB" },
  { id: 2, title: "General Visit", date: "Wed, 05 Apr 2025, 04:10 PM", image: visit, bgColor: "#FDF4F9" },
  { id: 3, title: "General Visit", date: "Wed, 05 Apr 2025, 10:00 AM", image: visit, bgColor: "#E8FBFA" },
];

// ── Popular Doctors ───────────────────────────
export const popularDoctors = [
  { id: 1, name: "Dr. Mick Thompson", specialty: "Cardiologist",  bookings: 258, initials: "MT", color: "#2E37A4", image: doctor},
  { id: 2, name: "Dr. Emily Carter",  specialty: "Pediatrician",  bookings: 125, initials: "EC", color: "#06AED4", image: doctor2},
  { id: 3, name: "Dr. David Lee",     specialty: "Gynecologist",  bookings: 115, initials: "DL", color: "#0E9384", image: doctor3},
];