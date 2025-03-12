import React from "react";

const BtdMemberList = ({ members, onEdit, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: "center", color: "blue" }}>Danh sách Thành viên</h2>
      <table className="table table-bordered">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Tên Đăng Nhập</th>
            <th>Mật Khẩu</th>
            <th>Hành Động</th> {/* Cột mới */}
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={member.id} className={index % 2 === 0 ? "table-light" : "table-secondary"}>
              <td>{member.id}</td>
              <td>{member.fullname}</td>
              <td>{member.username}</td>
              <td>{member.password}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(member)}>
                  ✏ Sửa
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(member.id)}>
                  ❌ Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BtdMemberList;
