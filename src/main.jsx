import React from 'react'; // นำเข้าไลบรารี React เพื่อสร้างคอมโพเนนต์ React
import ReactDOM from 'react-dom/client'; // นำเข้าไลบรารี ReactDOM เพื่อเรนเดอร์คอมโพเนนต์ React ใน DOM
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // นำเข้าคอมโพเนนต์และฟังก์ชันที่จำเป็นสำหรับการเรนเดอร์เราเตอร์ใน React โดยใช้ React Router
import App from './App'; // นำเข้าคอมโพเนนต์ App จากไฟล์ App.js
import Home from './components/Home'; // นำเข้าคอมโพเนนต์ Home จากไฟล์ Home.js ในโฟลเดอร์ components
import Owner from './components/Owner'; // นำเข้าคอมโพเนนต์ Owner จากไฟล์ Owner.js ในโฟลเดอร์ components
import './index.css'; // นำเข้าไฟล์ CSS สำหรับการสไตล์อินเด็กซ์ของเรา

// สร้างการกำหนดเราเตอร์สำหรับแอปพลิเคชัน
const router = createBrowserRouter([
  {
    path: '/', // กำหนดเส้นทางหลัก ('/') สำหรับการกำหนดเราเตอร์
    element: <App />, // ระบุว่าคอมโพเนนต์ App ควรถูกเรนเดอร์เมื่อเส้นทางหลักถูกตรงกับเส้นทางหลัก
    children: [ // กำหนดเส้นทางย่อยสำหรับเส้นทางหลัก
      {
        path: '/', // กำหนดเส้นทางย่อยเป็น '/'
        element: <Home />, // ระบุว่าคอมโพเนนต์ Home ควรถูกเรนเดอร์เมื่อเส้นทางย่อยถูกตรงกับเส้นทางย่อย
      },
      {
        path: '/owner', // กำหนดเส้นทางย่อยเป็น '/owner'
        element: <Owner />, // ระบุว่าคอมโพเนนต์ Owner ควรถูกเรนเดอร์เมื่อเส้นทางย่อย '/owner' ถูกตรงกับเส้นทางย่อย
      },
    ],
  },
]);

// เรนเดอร์แอปพลิเคชันภายในคอมโพเนนต์ RouterProvider เพื่อให้การเรนเดอร์เราเตอร์ทำงานได้ทั่วทั้งแอพพลิเคชัน
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
