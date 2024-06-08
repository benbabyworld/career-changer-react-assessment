import React from 'react'; // นำเข้าไลบรารี React เพื่อใช้ในการสร้างคอมโพเนนต์ React
import EmployeeTable from './EmployeeTable'; // นำเข้าคอมโพเนนต์ EmployeeTable จากไฟล์ EmployeeTable.js
import EmployeeForm from './EmployeeForm'; // นำเข้าคอมโพเนนต์ EmployeeForm จากไฟล์ EmployeeForm.js

// คอมโพเนนต์ Admin ที่รับพารามิเตอร์ employees, addEmployee, deleteEmployee
const Admin = ({ employees, addEmployee, deleteEmployee }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Section</h2>
      <EmployeeTable employees={employees} deleteEmployee={deleteEmployee} /> {/* เรียกใช้คอมโพเนนต์ EmployeeTable และส่งพารามิเตอร์ employees และ deleteEmployee */}
      <EmployeeForm addEmployee={addEmployee} /> {/* เรียกใช้คอมโพเนนต์ EmployeeForm และส่งพารามิเตอร์ addEmployee */}
    </div>
  );
};

export default Admin; // ส่งออกคอมโพเนนต์ Admin เพื่อให้สามารถนำไปใช้งานได้ในที่อื่น
