// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const userController = require('./controllers/userController');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routes
app.post('/api/signup', userController.signup);
app.post('/api/login', userController.login);

// Protected route example
app.get('/api/profile', authMiddleware, (req, res) => {
  // Fetch user profile from the database using req.userId
  res.json({ message: 'Protected route success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
