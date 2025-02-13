import React, { useState } from "react";
import "./LoginForm.css"; // ✅ Separate CSS for styling

const LoginForm = ({ title, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy authentication logic (replace with API call)
    if (email && password) {
      const userData = { name: "John Doe", email }; // Example user data
      onLogin(userData); // Pass user data to parent component
    }
  };

  return (
    <div className="login-form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
