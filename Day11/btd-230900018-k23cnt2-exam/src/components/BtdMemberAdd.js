import React, { useState } from "react";

const BtdMemberAdd = ({ addMember }) => {
  const [newMember, setNewMember] = useState({
    id: "",
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMember(newMember);
    setNewMember({ id: "", fullname: "", username: "", password: "" });
  };

  return (
    <div>
      <h2>Thêm Thành Viên</h2>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="ID" value={newMember.id} onChange={handleChange} required />
        <input name="fullname" placeholder="Họ và Tên" value={newMember.fullname} onChange={handleChange} required />
        <input name="username" placeholder="Tên Đăng Nhập" value={newMember.username} onChange={handleChange} required />
        <input name="password" placeholder="Mật Khẩu" type="password" value={newMember.password} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default BtdMemberAdd;