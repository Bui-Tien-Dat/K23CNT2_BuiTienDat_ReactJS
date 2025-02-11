import React from "react";

function BtdCompInfor({ hoTen, maSinhVien, ngaySinh, dienThoai, tenLop }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Thông tin cá nhân</h1>
      <p><strong>Họ và tên:</strong> {hoTen}</p>
      <p><strong>Mã sinh viên:</strong> {maSinhVien}</p>
      <p><strong>Ngày sinh:</strong> {ngaySinh}</p>
      <p><strong>Điện thoại:</strong> {dienThoai}</p>
      <p><strong>Tên lớp:</strong> {tenLop}</p>
    </div>
  );
}

export default BtdCompInfor;
