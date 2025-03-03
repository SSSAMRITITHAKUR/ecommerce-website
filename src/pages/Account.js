import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from "axios"; // Import axios
import "./Account.css"; // ✅ CSS import

const AccountPage = () => {
  const [user, setUser] = useState(null); // Simulating authentication
  const [error, setError] = useState(null); // For error handling

  // Handle login functionality
  const handleLogin = async (userData) => {
    try {
      // Send POST request to check if the user exists and password matches
      const response = await axios.post("http://localhost:5000/api/login", {
        email: userData.email,
        password: userData.password,
      });

      // If login is successful, store user data in state
      setUser(response.data); // Assuming response contains user data
      setError(null); // Clear any previous error messages
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password"); // Set error message
    }
  };

  const handleLogout = () => {
    setUser(null); // Simulating logout
  };

  return (
    <div className="account-container">
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>My Account</h2>
          <p>Manage your account details here.</p>
          <div className="login-form-wrapper">
            <LoginForm title="Login to Your Account" onLogin={handleLogin} />
            {error && <p className="error">{error}</p>} {/* Show error message */}
          </div>
        </>
      )}
    </div>
  );
};

export default AccountPage;
