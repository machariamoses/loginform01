// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons library
import googlep from './googl.png';
import facebookp from './faceboo.png';
import linkedinp from './linkedi.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, such as authentication
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <div className="password-input-container">
              <input
                 type={showPassword ? 'text' : 'password'}
                 id="password"
                 value={password}
                 onChange={handlePasswordChange}
                 placeholder="Password"
                 required
              />
              <span className="password-toggle" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className="forgot-password">
            <a href=" #">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-options">
          <p>Sign in with:</p>
          <div className="social-logos">
            <img src={googlep} alt="Google" />
            <img src={facebookp} alt="Facebook" />
            <img src={linkedinp} alt="LinkedIn" />
          </div>
        </div>
        <div className="sign_up">
            <a href=" #">~ Sign Up to Create Account ~</a>
          </div>
      </div>
    </div>
  );
};

export default Login;
