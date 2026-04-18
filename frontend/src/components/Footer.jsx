const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} LMS Academy. All rights reserved.</p>
        <p className="text-sm mt-2">Built with the MERN Stack.</p>
      </div>
    </footer>
  );
};

export default Footer;
