// LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call API to log in user with formData
      const response = await axios.post("/api/login", formData);
      const token = response.data.token;
      // Save the token in local storage for future API calls
      localStorage.setItem("token", token);
      // Redirect to the dashboard page after successful login
      window.location.href = "/dashboard";
    } catch (error) {
      // Handle login errors, e.g., invalid credentials
      console.error(error);
    }
  };

  return (
    <div className="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-div">
          <label htmlFor="email">Email:</label>
          <br/>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-div">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn">Log In</button>
      </form>
      <div>I have already account. <Link to="/signup" className='link'>Sign Up</Link></div>
    </div>
  );
};

export default LoginForm;
