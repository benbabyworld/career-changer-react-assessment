import React from 'react'; // นำเข้าไลบรารี React เพื่อใช้ในการสร้างคอมโพเนนต์ React

// คอมโพเนนต์ EmployeeTable ที่รับพารามิเตอร์ employees และ deleteEmployee
const EmployeeTable = ({ employees, deleteEmployee }) => {
  return (
    <table className="min-w-full bg-white"> {/* เริ่มต้นสร้างตาราง */}
      <thead> {/* ส่วนหัวของตาราง */}
        <tr> {/* แถวของหัวข้อคอลัมน์ */}
          <th className="py-2">Name</th> {/* คอลัมน์ชื่อ */}
          <th className="py-2">Last Name</th> {/* คอลัมน์นามสกุล */}
          <th className="py-2">Position</th> {/* คอลัมน์ตำแหน่ง */}
          <th className="py-2">Actions</th> {/* คอลัมน์สำหรับปุ่มดำเนินการ */}
        </tr>
      </thead>
      <tbody> {/* ส่วนเนื้อหาของตาราง */}
        {/* ใช้เมธอด map ในการวนลูปผ่านข้อมูลของพนักงานทั้งหมด */}
        {employees.map(employee => (
          <tr key={employee.id}> {/* แถวข้อมูลของแต่ละพนักงาน */}
            <td className="py-2">{employee.name}</td> {/* แสดงชื่อของพนักงาน */}
            <td className="py-2">{employee.lastname}</td> {/* แสดงนามสกุลของพนักงาน */}
            <td className="py-2">{employee.position}</td> {/* แสดงตำแหน่งของพนักงาน */}
            <td className="py-2">
              {/* เช็คว่าฟังก์ชั่น deleteEmployee ถูกส่งเข้ามาหรือไม่ หากใช่ให้แสดงปุ่ม Delete */}
              {deleteEmployee && <button onClick={() => deleteEmployee(employee.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable; // ส่งออกคอมโพเนนต์ EmployeeTable เพื่อให้สามารถนำไปใช้งานได้ในที่อื่น
