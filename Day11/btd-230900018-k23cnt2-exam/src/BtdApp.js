import React, { useState } from "react";
import BtdMemberList from "./components/BtdMemberList";
import BtdMemberAdd from "./components/BtdMemberAdd";

const BtdApp = () => {
  const [members, setMembers] = useState([
    { id: "2310900011", fullname: "Nguyễn Văn A", username: "nguyenvana", password: "password123" },
    { id: "2310900012", fullname: "Trần Thị B", username: "tranthib", password: "abc12345" },
    { id: "2310900014", fullname: "Lê Văn C", username: "levanc", password: "lepassword" },
  ]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };
  
  // Xóa thành viên
  const handleDeleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  // Chỉnh sửa thành viên (đơn giản: hiển thị alert)
  const handleEditMember = (member) => {
    alert(`Chỉnh sửa thành viên: ${member.fullname}`);
    // Ở đây bạn có thể mở form chỉnh sửa
  };
  return (
    <div>
      <h1 className="text-center">Quản lý Thành viên</h1>
      <BtdMemberAdd addMember={addMember} />
      <BtdMemberList members={members} />
      
    </div>
  );
};

export default BtdApp;
