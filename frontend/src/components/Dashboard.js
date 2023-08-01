// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProgressTracker from './ProgressTracker';

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [exerciseRecommendations, setExerciseRecommendations] = useState([]);

    useEffect(() => {
        // Fetch user profile and exercise recommendations upon component mount
        const fetchUserProfile = async () => {
            try {
                // Get the JWT token from local storage
                const token = localStorage.getItem('token');
                // Set the token as the authorization header for API requests
                axios.defaults.headers.common['Authorization'] = token;
                // Fetch user profile data
                const response = await axios.get('/api/profile');
                setUser(response.data.user);
                // Fetch exercise recommendations for the user
                const exerciseResponse = await axios.get('/api/exercise/recommendations');
                setExerciseRecommendations(exerciseResponse.data.recommendations);
            } catch (error) {
                // Handle errors, e.g., authentication failure
                console.error(error);
                // Redirect to the login page if there's an authentication error
                window.location.href = '/login';
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <h1>Welcome, {user.name}!</h1>
      <h2>User Information:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h2>Exercise Recommendations:</h2>
      <ul>
        {exerciseRecommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>

      <h2>Progress Tracker</h2>
      <ProgressTracker />
        </div>
    );
};

export default Dashboard;
