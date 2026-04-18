const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can have the same email
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Student', 'Admin'], // The role MUST be one of these two
    default: 'Student', // If no role is provided, make them a Student
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt dates

module.exports = mongoose.model('User', userSchema);
