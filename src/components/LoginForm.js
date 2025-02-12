import React from "react";
import InputField from "./InputField";
import PropTypes from "prop-types"; // ✅ Props validation
import "./LoginForm.css"; // ✅ CSS import

const LoginForm = ({ title }) => {
  return (
    <div className="login-card">
      <h3>{title}</h3>
      <InputField label="Username or Email" type="text" />
      <InputField label="Password" type="password" />
      
      <div className="remember-me">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>

      <button className="login-btn">LOG IN</button>
      <p className="forgot-password">
        <a href="#">Lost your password?</a>
      </p>
    </div>
  );
};

// ✅ Props validation
LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LoginForm;
