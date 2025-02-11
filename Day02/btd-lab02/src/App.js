import React from 'react';
import BtdCompinfor from "./BtdCompInfor";

function App() {
  // Thông tin cá nhân
  const studentInfo = {
    hoTen: "Bùi Tiến Đạt",
    maSinhVien: "2310900018",
    ngaySinh: "05/09/2005",
    dienThoai: "0345 450 710",
    tenLop: "K23CNT2"
  };

  return (
<div>
      {/* Truyền dữ liệu vào component BtdCompInfor */}
      <BtdCompinfor 
        hoTen={studentInfo.hoTen}
        maSinhVien={studentInfo.maSinhVien}
        ngaySinh={studentInfo.ngaySinh}
        dienThoai={studentInfo.dienThoai}
        tenLop={studentInfo.tenLop}
      />
    </div>
  );
}

export default App;
