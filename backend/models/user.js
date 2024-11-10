// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  graduationYear: Number,
  department: String,
  jobTitle: String,
  location: String,
});

module.exports = mongoose.model('User', userSchema);
