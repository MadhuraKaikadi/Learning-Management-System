const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to generate a JWT Token
const generateToken = (id) => {
  // We sign the token with a secret key from our .env file
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The user will stay logged in for 30 days
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id), // Give them a token upon registering
      message: 'User registered successfully!'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authenticate a user (Login)
// @route   POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find the user by their email
    const user = await User.findOne({ email });

    // 2. Check if user exists AND if the password matches the hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id), // Give them a token to keep them logged in
        message: 'Login successful!'
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser
};
