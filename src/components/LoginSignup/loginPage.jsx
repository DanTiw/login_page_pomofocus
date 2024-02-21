import React, { useState } from "react";
import "./loginPage.css";
import emailImage from "../assets/email.png";
import passwordImage from "../assets/password.png";
import personImage from "../assets/person.png";

const LoginPage = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="login-page">
      <div
        className="login-form"
        style={{ display: showSignup ? "none" : "block" }}
      >
        <h2>Login</h2>
        <div className="input-group">
          <img src={emailImage} alt="Email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <img src={passwordImage} alt="Password" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-button">Login</button>
      </div>

      <div
        className="signup-form"
        style={{ display: showSignup ? "block" : "none" }}
      >
        <h2>Sign Up</h2>
        <div className="input-group">
          <img src={personImage} alt="Username" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <img src={emailImage} alt="Email" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <img src={passwordImage} alt="Password" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="signup-button">Sign Up</button>
      </div>
      <button onClick={() => setShowSignup(!showSignup)}>Toggle</button>
    </div>
  );
};

export default LoginPage;
