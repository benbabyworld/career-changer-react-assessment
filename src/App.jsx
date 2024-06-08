import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="p-4">
      <nav className="flex justify-between p-4 bg-gray-800 text-white">
        <button onClick={handleHomeClick} className="mr-4">Home</button>
        <Link to="/owner">Owner</Link>
      </nav>
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
