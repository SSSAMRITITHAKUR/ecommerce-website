import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import "./Account.css"; // ✅ CSS import

const AccountPage = () => {
  const [user, setUser] = useState(null); // Simulating authentication

  const handleLogin = (userData) => {
    setUser(userData); // Simulating login by setting user data
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
          </div>
        </>
      )}
    </div>
  );
};

export default AccountPage;
