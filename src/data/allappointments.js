import doctor1 from "../assets/images/appt-doc-1.png";
import doctor2 from "../assets/images/appt-doc-2.png";
import doctor3 from "../assets/images/appt-doc-3.png";
import doctor4 from "../assets/images/appt-doc-4.png";
import doctor5 from "../assets/images/appt-doc-5.png";
import patient1 from "../assets/images/appt-pat-1.png";
import patient2 from "../assets/images/appt-pat-2.png";
import patient3 from "../assets/images/appt-pat-3.png";
import patient4 from "../assets/images/appt-pat-4.png";
import patient5 from "../assets/images/appt-pat-5.png";

export const allAppointments = [
  {
    id: 1,
    doctor:  { name: "Dr. John Smith",     specialty: "Neurosurgeon",   Image: doctor1  },
    patient: { name: "Jesus Adams",        phone: "+1 41254 45214",     Image: patient1 },
    datetime: "28 May 2025 - 11:15 AM",
    mode: "Online",     status: "Confirmed",
  },
  {
    id: 2,
    doctor:  { name: "Dr. Lisa White",     specialty: "Oncologist",     Image: doctor2  },
    patient: { name: "Ezra Belcher",       phone: "+1 65895 41247",     Image: patient2 },
    datetime: "29 May 2025 - 11:30 AM",
    mode: "In-Person",  status: "Cancelled",
  },
  {
    id: 3,
    doctor:  { name: "Dr. Patricia Brown", specialty: "Pulmonologist",  Image: doctor3  },
    patient: { name: "Glen Lentz",         phone: "+1 62458 45845",     Image: patient3 },
    datetime: "30 May 2025 - 09:30 AM",
    mode: "Online",     status: "Confirmed",
  },
  {
    id: 4,
    doctor:  { name: "Dr. Rachel Green",   specialty: "Urologist",      Image: doctor4  },
    patient: { name: "Bernard Griffith",   phone: "+1 61422 45214",     Image: patient4 },
    datetime: "30 May 2025 - 10:00 AM",
    mode: "Online",     status: "Checked Out",
  },
  {
    id: 5,
    doctor:  { name: "Dr. Michael Smith",  specialty: "Cardiologist",   Image: doctor5  },
    patient: { name: "John Elsass",        phone: "+1 47851 26371",     Image: patient5 },
    datetime: "30 May 2025 - 11:00 AM",
    mode: "Online",     status: "Schedule",
  },
  {
    id: 6,
    doctor:  { name: "Dr. John Smith",     specialty: "Neurosurgeon",   Image: doctor1  },
    patient: { name: "Sarah Mitchell",     phone: "+1 41254 11234",     Image: patient1 },
    datetime: "31 May 2025 - 09:00 AM",
    mode: "In-Person",  status: "Confirmed",
  },
  {
    id: 7,
    doctor:  { name: "Dr. Lisa White",     specialty: "Oncologist",     Image: doctor2  },
    patient: { name: "David Warner",       phone: "+1 65895 99871",     Image: patient2 },
    datetime: "31 May 2025 - 10:30 AM",
    mode: "Online",     status: "Schedule",
  },
  {
    id: 8,
    doctor:  { name: "Dr. Patricia Brown", specialty: "Pulmonologist",  Image: doctor3  },
    patient: { name: "Emily Clarke",       phone: "+1 62458 77845",     Image: patient3 },
    datetime: "01 Jun 2025 - 11:00 AM",
    mode: "Online",     status: "Cancelled",
  },
  {
    id: 9,
    doctor:  { name: "Dr. Rachel Green",   specialty: "Urologist",      Image: doctor4  },
    patient: { name: "Robert Stone",       phone: "+1 61422 33214",     Image: patient4 },
    datetime: "01 Jun 2025 - 02:00 PM",
    mode: "In-Person",  status: "Confirmed",
  },
  {
    id: 10,
    doctor:  { name: "Dr. Michael Smith",  specialty: "Cardiologist",   Image: doctor5  },
    patient: { name: "Lisa Turner",        phone: "+1 47851 55371",     Image: patient5 },
    datetime: "02 Jun 2025 - 03:00 PM",
    mode: "Online",     status: "Checked Out",
  },
];

export const statusConfig = {
  "Confirmed":   { color: "#16a34a", bg: "#F4FBF7", border: "#16a34a" },
  "Cancelled":   { color: "#ef4444", bg: "#FEF4F4", border: "#ef4444" },
  "Checked Out": { color: "#06AED4", bg: "#E9F8FB", border: "#06AED4" },
  "Schedule":    { color: "#06AED4", bg: "#F4F9FE", border: "#06AED4" },
};