# 🎓 LMS Academy (MERN Stack)

A professional, full-stack Learning Management System built using MongoDB, Express.js, React.js, and Node.js. 

This project was built from scratch to demonstrate proficiency in RESTful API design, database management, JWT authentication, and modern React frontend development.

## 🚀 Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS v4, React Router DOM
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose
- **Authentication**: JSON Web Tokens (JWT), bcryptjs

## ✨ Key Features

- **Role-Based Access Control**: Separate logic and routes for Students and Admins.
- **Secure Authentication**: Passwords hashed with bcrypt, state managed via JWTs in localStorage.
- **Admin Dashboard**: Protected routes for creating and publishing new courses.
- **Student Dashboard**: Browse the course catalog and enroll in courses with a single click.
- **RESTful API**: Clean, documented endpoints for Users, Courses, and Enrollments.

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   ```
   *Create a `.env` file in the `backend` folder with:*
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_key
   ```
   *Start the backend server:*
   ```bash
   npm run dev
   ```

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🧠 Core Concepts Mastered
- **Single Page Applications (SPAs)**: Instant client-side routing with React Router.
- **Stateless Authentication**: Avoiding server-memory bloat by using JWTs.
- **NoSQL Relationships**: Using Mongoose `.populate()` to join Student Enrollments with Course Data.
- **Middleware Pipeline**: Custom Express middleware for `protect` and `admin` route guarding.
