// =============================================
// dashboardSection3Data.js
// =============================================

import patient1 from "../assets/images/appt-pat-1.png";
import patient2 from "../assets/images/appt-pat-2.png";
import patient3 from "../assets/images/appt-pat-3.png";
import patient4 from "../assets/images/appt-pat-4.png";
import patient5 from "../assets/images/appt-pat-5.png";

import stripe from "../assets/images/stripe.png";
import dots from "../assets/images/doubleDot.png";
import leave1 from "../assets/images/leave1.png";
import leave2 from "../assets/images/leave2.png";
import leave3 from "../assets/images/leave3.png";
import leave4 from "../assets/images/leave4.png";
import leave5 from "../assets/images/leave5.png";

// ── Top 5 Patients ────────────────────────────
export const topPatients = [
  { id: 1, name: "Jesus Adams",      totalPaid: "$6589", appointments: 80, Image: patient1 },
  { id: 2, name: "Ezra Belcher",     totalPaid: "$5632", appointments: 60, Image: patient2 },
  { id: 3, name: "Glen Lentz",       totalPaid: "$4125", appointments: 40, Image: patient3 },
  { id: 4, name: "Bernard Griffith", totalPaid: "$3140", appointments: 25, Image: patient4 },
  { id: 5, name: "John Elsass",      totalPaid: "$2654", appointments: 25, Image: patient5 },
  { id: 6, name: "Sarsh Mitchall",   totalPaid: "$2100", appointments: 76, Image: patient1 },
  { id: 7, name: "David Warner",     totalPaid: "$1986", appointments: 43, Image: patient2 },
  { id: 8, name: "Emily Clarke",     totalPaid: "$2391", appointments: 47, Image: patient3 },
  { id: 9, name: "Robert Stone",     totalPaid: "$3100", appointments: 96, Image: patient4 },
  { id: 10, name: "Lisa Turner",     totalPaid: "$2586", appointments: 20, Image: patient5 },
];

// ── Recent Transactions ───────────────────────
export const recentTransactions = [
  { id: 1, title: "General Check-up",    invoice: "#INV5889", amount: "+$234", positive: true,  image: stripe},
  { id: 2, title: "Online Consultation", invoice: "#INV7874", amount: "+$234", positive: true,  image: dots},
  { id: 3, title: "Purchase Product",    invoice: "#INV4458", amount: "-$69",  positive: false, image: stripe},
  { id: 4, title: "Online Consultation", invoice: "#INV5456", amount: "+$234", positive: true,  image: dots},
  { id: 5, title: "Online Consultation", invoice: "#INV4557", amount: "+$234", positive: true,  image: stripe},
];

// ── Leave Requests ────────────────────────────
export const leaveRequests = [
  { id: 1, name: "James Allaire",   detail: "4 Days - Personal Reason",   image: leave1},
  { id: 2, name: "Esther Schmidt",  detail: "2 Days - Going to Hospital",  image: leave2 },
  { id: 3, name: "Valerie Padgett", detail: "1 Day - Changing Account",    image: leave3 },
  { id: 4, name: "Diane Nash",      detail: "1 Day - Not Well",            image: leave4 },
  { id: 5, name: "Sally Cavazos",   detail: "2 Days - Going to Checkup",   image: leave5 },
];