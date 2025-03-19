import React, { useState } from 'react';
import axios from 'axios';

export default function BtdEditUser({ user, onSave, onCancel }) {
    const [editUser, setEditUser] = useState(user);

    const handleChange = (e) => {
        setEditUser({ ...editUser, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        axios
            .put(`https://67dac72235c87309f52e0022.mockapi.io/K23CNT2_BuiTienDat/btd_users/${editUser.id}`, editUser)
            .then((res) => onSave(res.data))
            .catch((error) => console.log("Lỗi khi cập nhật:", error));
    };

    return (
        <tr>
            <td>{editUser.id}</td>
            <td><input type="text" name="btdFullName" value={editUser.btdFullName} onChange={handleChange} /></td>
            <td><input type="number" name="btdAge" value={editUser.btdAge} onChange={handleChange} /></td>
            <td>
                <select name="btdActive" value={editUser.btdActive} onChange={handleChange}>
                    <option value="true">Hoạt động</option>
                    <option value="false">Khóa</option>
                </select>
            </td>
            <td>
                <button onClick={handleUpdate}>Lưu</button>
                <button onClick={onCancel}>Hủy</button>
            </td>
        </tr>
    );
}
