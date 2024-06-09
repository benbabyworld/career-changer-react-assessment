import React from 'react'; // นำเข้าไลบรารี React เพื่อสร้างคอมโพเนนต์ React
import { Link, Outlet } from 'react-router-dom'; // นำเข้าฟังก์ชันและคอมโพเนนต์ที่จำเป็นจาก react-router-dom สำหรับการสร้างระบบนำทาง

const App = () => {
  return (
    <div className="p-4"> {/* กำหนดการจัดวางของคอมโพเนนต์ทั้งหมดใน div นี้ */}
      <nav className="flex justify-between p-4 bg-gray-800 text-white"> {/* สร้างแถบนำทางด้วยการกำหนดสไตล์ */}
        {/* ลิงก์สำหรับนำทางไปยังเส้นทางหลัก ('/') และลิงก์สำหรับเส้นทาง /owner */}
        <Link to="/" className="mr-4">
          <button>Home</button>
        </Link>
        <Link to="/owner">Owner</Link>
      </nav>
      <div className="container mx-auto p-4"> {/* กำหนดการจัดวางของคอนเทนต์หลักใน div นี้ */}
        <Outlet /> {/* คอมโพเนนต์ Outlet สำหรับแสดงคอมโพเนนต์ย่อยตามเส้นทางที่กำหนด */}
      </div>
    </div>
  );
};

export default App; // ส่งออกคอมโพเนนต์ App เพื่อให้สามารถนำไปใช้ในไฟล์อื่นได้
