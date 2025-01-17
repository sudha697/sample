import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [activeTab, setActiveTab] = useState("User");

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Panel */}
        <div className="left-panel">
          <h1>Hello Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="register-btn">Register</button>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
        

          <h2>Login</h2>
            {/* User/Admin Toggle */}
            <div className="user-admin-toggle">
            <button
              className={activeTab === "User" ? "active" : ""}
              onClick={() => setActiveTab("User")}
            >
              User
            </button>
            <button
              className={activeTab === "Admin" ? "active" : ""}
              onClick={() => setActiveTab("Admin")}
            >
              Admin
            </button>
          </div>
          <form className="login-form">
            {/* Username Field */}
            <div className="input-group">
              <input type="text" placeholder={activeTab === "User" ? "Username" : "Admin Username"} />
              <FontAwesomeIcon icon={faUser} className="icon user-icon" />
            </div>

            {/* Password Field */}
            <div className="input-group">
              <input type="password" placeholder="Password" />
              <FontAwesomeIcon icon={faLock} className="icon lock-icon" />
            </div>

            {/* Forgot Password Link */}
            <a href="#" className="forgot-password">Forgot Password?</a>

            {/* Login Button */}
            <button type="button" className="login-btn">Login</button>

            {/* Social Login Section */}
            <p>or login with social platforms</p>
            <div className="social-login">
              <img src="/google-icon.png" alt="Google Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;