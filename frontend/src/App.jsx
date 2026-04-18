import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar sits at the very top of every single page */}
      <Navbar />

      {/* Main Content Area where the pages change */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </main>

      {/* Footer sits at the very bottom of every single page */}
      <Footer />
    </div>
  );
}

export default App;
