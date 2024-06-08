import React, { useState } from 'react';
import User from './User'; // นำเข้าคอมโพเนนต์ User สำหรับแสดงผู้ใช้
import Admin from './Admin'; // นำเข้าคอมโพเนนต์ Admin สำหรับแสดงผู้ดูแลระบบ

// ข้อมูลพนักงานที่ใช้ในการจำลอง
const mockEmployees = [
  { id: 0, name: "mock", lastname: 'mocklastname', position: "Manager" },
  { id: 1, name: "employee 1", lastname: "em", position: "Engineer" },
  { id: 2, name: "employee 2", lastname: "lord", position: "Designer" },
]

// คอมโพเนนต์ Home ที่แสดงผู้ใช้และผู้ดูแลระบบ
const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees); // สถานะสำหรับเก็บข้อมูลพนักงาน
  const [showAdmin, setShowAdmin] = useState(false); // สถานะสำหรับตรวจสอบว่าควรแสดงผู้ดูแลระบบหรือไม่

  // ฟังก์ชันสำหรับเพิ่มข้อมูลพนักงานใหม่
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // ฟังก์ชันสำหรับลบข้อมูลพนักงาน
  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* ปุ่มสำหรับเลือกแสดงผู้ใช้หรือผู้ดูแลระบบ */}
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setShowAdmin(false)} className={`px-4 py-2 rounded ${!showAdmin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          User Home Sector
        </button>
        <button onClick={() => setShowAdmin(true)} className={`px-4 py-2 rounded ${showAdmin ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
          Admin Home Sector
        </button>
      </div>
      {/* เงื่อนไขการแสดงผู้ใช้หรือผู้ดูแลระบบ */}
      {showAdmin ? (
        <Admin employees={employees} addEmployee={addEmployee} deleteEmployee={deleteEmployee} />
      ) : (
        <User employees={employees} />
      )}
    </div>
  );
};

export default Home; // ส่งคอมโพเนนต์ Home ออกไปใช้งานในที่อื่น
