const express = require('express');
const router = express.Router();
const { getCourses, createCourse } = require('../controllers/courseController');
const { protect, admin } = require('../middleware/authMiddleware');

// Route 1: Anyone can view courses
router.get('/', getCourses);

// Route 2: ONLY logged-in Admins can create courses
// Notice how we put "protect" and "admin" before "createCourse"!
router.post('/', protect, admin, createCourse);

module.exports = router;
