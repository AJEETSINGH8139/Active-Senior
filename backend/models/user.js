// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
