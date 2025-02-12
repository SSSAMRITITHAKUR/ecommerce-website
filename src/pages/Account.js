import React from "react";
import LoginForm from "../components/LoginForm";
import "./Account.css"; // ✅ CSS import

const AccountPage = () => {
  return (
    <div className="account-container">
      <h2>My Account</h2>
      <p>Manage your account details here.</p>
      <div className="login-form-wrapper">
        <LoginForm title="Login to Your Account" />
      </div>
    </div>
  );
};

export default AccountPage;
