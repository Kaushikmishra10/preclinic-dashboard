import React, { useState } from "react";
import { BsEye, BsEyeSlash, BsEnvelope, BsLock, BsPerson, BsPhone } from "react-icons/bs";
import logo from "../../assets/images/preclinic-icon.svg";
import "../../styles/theme.scss";
import "../../styles/auth.css";

const Signup = ({ onNavigateLogin }) => {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", password: "", confirmPassword: "",
  });
  const [showPass,    setShowPass]    = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree,       setAgree]       = useState(false);
  const [loading,     setLoading]     = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="auth-bg d-flex align-items-center justify-content-center min-vh-100 p-3">
      <div className="auth-card">

        {/* Logo */}
        <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
          <img src={logo} alt="Preclinic" style={{ width: 36, height: 36 }} />
          <span className="fw-bold" style={{ fontSize: 22, color: "var(--text-primary)", fontFamily: "var(--font)" }}>
            Preclinic
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-4">
          <h5 className="fw-bold mb-1" style={{ fontSize: 20, color: "var(--text-primary)", fontFamily: "var(--font)" }}>
            Create Account
          </h5>
          <p style={{ fontSize: 13, color: "var(--text-secondary)", fontFamily: "var(--font)" }}>
            Fill in the details to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="auth-field-wrap mb-3">
            <label className="auth-label">Full Name</label>
            <div className="auth-input-wrap">
              <BsPerson className="auth-input-icon" size={15} />
              <input
                type="text"
                name="fullName"
                className="auth-input"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="auth-field-wrap mb-3">
            <label className="auth-label">Email Address</label>
            <div className="auth-input-wrap">
              <BsEnvelope className="auth-input-icon" size={15} />
              <input
                type="email"
                name="email"
                className="auth-input"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="auth-field-wrap mb-3">
            <label className="auth-label">Phone Number</label>
            <div className="auth-input-wrap">
              <BsPhone className="auth-input-icon" size={15} />
              <input
                type="tel"
                name="phone"
                className="auth-input"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password */}
          <div className="auth-field-wrap mb-3">
            <label className="auth-label">Password</label>
            <div className="auth-input-wrap">
              <BsLock className="auth-input-icon" size={15} />
              <input
                type={showPass ? "text" : "password"}
                name="password"
                className="auth-input"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button type="button" className="auth-eye-btn" onClick={() => setShowPass(v => !v)} tabIndex={-1}>
                {showPass ? <BsEyeSlash size={15} /> : <BsEye size={15} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="auth-field-wrap mb-3">
            <label className="auth-label">Confirm Password</label>
            <div className="auth-input-wrap">
              <BsLock className="auth-input-icon" size={15} />
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                className="auth-input"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="button" className="auth-eye-btn" onClick={() => setShowConfirm(v => !v)} tabIndex={-1}>
                {showConfirm ? <BsEyeSlash size={15} /> : <BsEye size={15} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="d-flex align-items-start gap-2 mb-4 auth-remember">
            <input
              type="checkbox"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              className="auth-checkbox mt-1"
              required
            />
            <span style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font)", lineHeight: 1.5 }}>
              I agree to the{" "}
              <a href="#" className="auth-link">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="auth-link">Privacy Policy</a>
            </span>
          </label>

          {/* Submit */}
          <button type="submit" className="auth-submit-btn w-100" disabled={loading || !agree}>
            {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" /> : null}
            {loading ? "Creating account..." : "Create Account"}
          </button>

        </form>

        {/* Login link */}
        <p className="text-center mt-4 mb-0" style={{ fontSize: 13, fontFamily: "var(--font)", color: "var(--text-secondary)" }}>
          Already have an account?{" "}
          <a href="#" className="auth-link fw-semibold" onClick={e => { e.preventDefault(); onNavigateLogin && onNavigateLogin(); }}>
            Sign In
          </a>
        </p>

      </div>
    </div>
  );
};

export default Signup;