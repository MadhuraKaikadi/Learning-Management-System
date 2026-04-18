import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = localStorage.getItem('userToken');
        // We use our VIP Wristband to fetch ONLY the courses this specific student enrolled in
        const response = await fetch('http://localhost:5000/api/enrollments/my-courses', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        setEnrollments(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch enrollments");
        setLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">My Learning Dashboard</h1>
      
      {loading ? (
        <p className="text-center text-xl text-gray-500">Loading your courses...</p>
      ) : enrollments.length === 0 ? (
        <div className="text-center p-10 bg-gray-100 rounded-lg">
          <p className="text-xl text-gray-500 mb-4">You haven't enrolled in any courses yet!</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">Browse Catalog</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrollments.map((enrollment) => (
            <div key={enrollment._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="text-xs font-bold text-green-600 uppercase tracking-wide mb-2">Enrolled</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{enrollment.course.title}</h3>
                <p className="text-gray-600 mb-4 h-12 overflow-hidden">{enrollment.course.description}</p>
                
                {/* Fake Progress Bar for Design! */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
