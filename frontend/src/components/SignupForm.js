// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Call API to register user with formData
            await axios.post('/signup', formData);
            // Redirect to the login page after successful registration
            window.location.href = '/login';
        } catch (error) {
            // Handle registration errors, e.g., email already registered
            console.error(error);
        }
    };

    return (
    <div className='signup'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className="input-div">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-div">
          <label htmlFor="age">Age:</label>
          <br />
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-div">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder='example@gmail.com'
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
        <button type="submit" className='btn'>Sign Up</button>
      </form>
      <div>I have already account. <Link to="/login" className='link'>Log In</Link></div>
    </div>
    );
};

export default SignupForm;
