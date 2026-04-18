# 🎓 LMS Academy (MERN Stack)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A premium, full-stack Learning Management System built from scratch using the **MERN Stack** (MongoDB, Express, React, Node.js). 

This project was developed to demonstrate enterprise-level application architecture, including strict Role-Based Access Control (RBAC), secure stateless authentication, relational database modeling, and modern responsive UI/UX design.

---

## ✨ Core Features

### 🔐 Advanced Authentication & Security
- **Stateless JWT Auth:** Secure login system using JSON Web Tokens stored securely on the client.
- **Password Encryption:** Passwords automatically hashed and salted using `bcryptjs`.
- **Password Recovery:** Fully functional "Forgot Password" token generation and reset workflow.

### 🛡️ 3-Tier Role-Based Access Control (RBAC)
- **Students**: Can browse course catalogs, enroll in courses, and view their personalized "My Learning" dashboard.
- **Teachers**: Possess dedicated instructor dashboards to publish new courses and view registered students.
- **Admins**: Have global oversight capabilities, including a master database view of all registered users and roles.

### 🎨 Premium UI/UX Design
- **Modern Aesthetics**: Built with Tailwind CSS utilizing glassmorphism, dynamic gradients, and modern typography (Inter).
- **Responsive Layouts**: Fully mobile-responsive navigation, tables, and grid systems.
- **Micro-interactions**: Hover states, transition animations, and user-feedback alerts.

---

## 🚀 Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide-React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Security**: jsonwebtoken, bcryptjs, crypto

---

## 🛠️ Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MadhuraKaikadi/Learning-Management-System.git
   cd Learning-Management-System
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
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 🧠 Architectural Concepts Mastered

- **Single Page Applications (SPAs)**: Implemented seamless client-side routing to prevent page reloads.
- **Custom Middleware Pipelines**: Engineered custom Express middleware to intercept requests, verify JWT signatures, and reject unauthorized roles before hitting controllers.
- **Relational NoSQL**: Utilized Mongoose `.populate()` to seamlessly join isolated collections (e.g., merging Student documents with Course documents via Enrollments).
- **Environment Management**: Strictly separated development and production variables dynamically injecting API URLs at build time.

---

*Designed and developed by Madhura Kaikadi.*
