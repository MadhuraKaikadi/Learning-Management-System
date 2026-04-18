import { useState } from 'react';

const AdminDashboard = () => {
  const [courseData, setCourseData] = useState({ title: '', description: '', price: '' });
  const [message, setMessage] = useState('');

  // Grab the magical JWT token we saved during login!
  const token = localStorage.getItem('userToken');

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // <--- WE SEND THE VIP WRISTBAND HERE!
        },
        body: JSON.stringify(courseData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage('Course Created Successfully! 🎉');
        setCourseData({ title: '', description: '', price: '' }); // Clear the form
      } else {
        setMessage(`Error: ${data.message}`); // This will say "Not authorized as an Admin" if you are a student!
      }
    } catch (err) {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Admin Dashboard</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Create a New Course</h2>
        {message && <div className="mb-4 text-blue-700 font-medium p-2 bg-blue-100 rounded">{message}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Title</label>
            <input type="text" name="title" value={courseData.title} required onChange={handleChange} className="w-full mt-1 p-2 border rounded" placeholder="e.g. Master React in 30 Days" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Description</label>
            <textarea name="description" value={courseData.description} required onChange={handleChange} className="w-full mt-1 p-2 border rounded" rows="3" placeholder="What will students learn?"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price ($)</label>
            <input type="number" name="price" value={courseData.price} required onChange={handleChange} className="w-full mt-1 p-2 border rounded" placeholder="e.g. 49" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition-colors">Publish Course</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
