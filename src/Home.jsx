import React, { useState } from 'react';
import User from './User';
import Admin from './Admin';

const mockEmployees = [
  { id: 0, name: "mock", lastname: 'mocklastname', position: "Manager" },
  { id: 1, name: "employee 1", lastname: "em", position: "Engineer" },
  { id: 2, name: "employee 2", lastname: "lord", position: "Designer" },
];

const Home = () => {
  const [showUser, setShowUser] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleUserClick = () => {
    setShowUser(true);
    setShowAdmin(false);
  };

  const handleAdminClick = () => {
    setShowUser(false);
    setShowAdmin(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 mb-4">
        <button onClick={handleUserClick} className={`px-4 py-2 rounded ${showUser ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          User Home Sector
        </button>
        <button onClick={handleAdminClick} className={`px-4 py-2 rounded ${showAdmin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          Admin Home Sector
        </button>
      </div>
      {showUser && <User employees={mockEmployees} />}
      {showAdmin && <Admin employees={mockEmployees} />}
    </div>
  );
};

export default Home;
