import React from "react";
import PropTypes from "prop-types";
import "./InputField.css"; // ✅ CSS import

const InputField = ({ label, type }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} className="input-box" />
    </div>
  );
};

// ✅ Props validation
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
