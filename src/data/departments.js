import doctor from "../assets/images/s-doctor1.png";
import doctor1 from "../assets/images/doctor.png";
import doctor2 from "../assets/images/doctor2.png";
import doctor3 from "../assets/images/doctor3.png";

export const departmentsData = [
  { id: "cardiology", label: "Cardiology", value: 214, color: "#7B61FF" },
  { id: "dental",     label: "Dental",     value: 150, color: "#E05ECC" },
  { id: "neurology",  label: "Neurolgy",   value: 121, color: "#A0AEC0" },
];

export const totalPatients = 569;

// ── Doctors Schedule ──────────────────────────
export const doctorScheduleStats = [
  { label: "Available",   value: 48 },
  { label: "Unavailable", value: 28 },
  { label: "Leave",       value: 12 },
];

export const doctorsList = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "Orthopedic Surgeon", image: doctor, color: "#7B61FF" },
  { id: 2, name: "Dr. Emily Carter",  specialty: "Pediatrician",       image: doctor1, color: "#06AED4" },
  { id: 3, name: "Dr. David Lee",     specialty: "Gynecologist",       image: doctor2, color: "#0E9384" },
  { id: 4, name: "Dr. Michael Smith", specialty: "Cardiologist",       image: doctor3, color: "#E05ECC" },
];

// ── Income By Treatment ───────────────────────
export const incomeByTreatment = [
  { id: 1, label: "Cardiology",       appointments: 4556, income: "$5,985" },
  { id: 2, label: "Radiology",        appointments: 4125, income: "$5,194" },
  { id: 3, label: "Dental Surgery",   appointments: 1796, income: "$2,716" },
  { id: 4, label: "Orthopaedics",     appointments: 3827, income: "$4,682" },
  { id: 5, label: "General Medicine", appointments: 9894, income: "$9,450" },
];