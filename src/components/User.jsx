import React from 'react';
import EmployeeTable from './EmployeeTable';

const User = ({ employees }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">User Section</h2>
      <EmployeeTable employees={employees} />
    </div>
  );
};

export default User;
