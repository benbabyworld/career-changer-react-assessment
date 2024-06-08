import React, { useState } from 'react'; // นำเข้าไลบรารี React เพื่อใช้ในการสร้างคอมโพเนนต์ React

// คอมโพเนนต์ EmployeeForm ที่รับพารามิเตอร์ addEmployee
const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState(''); // สร้าง state สำหรับเก็บค่าชื่อ
  const [lastname, setLastname] = useState(''); // สร้าง state สำหรับเก็บค่านามสกุล
  const [position, setPosition] = useState(''); // สร้าง state สำหรับเก็บตำแหน่ง

  // ฟังก์ชั่น handleSubmit สำหรับการส่งข้อมูลพนักงานเมื่อฟอร์มถูกส่ง
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อฟอร์มถูกส่ง
    const newEmployee = { id: Date.now(), name, lastname, position }; // สร้างข้อมูลพนักงานใหม่
    addEmployee(newEmployee); // เรียกใช้ฟังก์ชั่น addEmployee เพื่อเพิ่มข้อมูลพนักงานใหม่
    setName(''); // เคลียร์ค่าชื่อ
    setLastname(''); // เคลียร์ค่านามสกุล
    setPosition(''); // เคลียร์ค่าตำแหน่ง
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Last Name:</label>
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required className="border p-2 w-full" />
      </div>
      <div>
        <label className="block">Position:</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Employee</button>
    </form>
  );
};

export default EmployeeForm; // ส่งออกคอมโพเนนต์ EmployeeForm เพื่อให้สามารถนำไปใช้งานได้ในที่อื่น
