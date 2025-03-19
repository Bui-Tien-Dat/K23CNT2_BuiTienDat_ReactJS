import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BtdEditUser from './BtdEditUser'; // Import component mới

export default function BtdReadMockAPI() {
    const [btdListUser, setBtdListUser] = useState([]);
    const [editUserId, setEditUserId] = useState(null); // Lưu id user đang sửa

    const btdApiOnline = "https://67dac72235c87309f52e0022.mockapi.io/K23CNT2_BuiTienDat/btd_users";

    useEffect(() => {
        axios
            .get(btdApiOnline)
            .then((res) => setBtdListUser(res.data))
            .catch((error) => console.log("Lỗi phát sinh:", error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa user này không?")) {
            axios
                .delete(`${btdApiOnline}/${id}`)
                .then(() => {
                    setBtdListUser(btdListUser.filter(user => user.id !== id));
                })
                .catch((error) => console.log("Lỗi khi xóa:", error));
        }
    };

    const handleEdit = (id) => {
        setEditUserId(id);
    };

    const handleSave = (updatedUser) => {
        setBtdListUser(btdListUser.map(user => user.id === updatedUser.id ? updatedUser : user));
        setEditUserId(null);
    };

    return (
        <div className='alert alert-danger'>
            <h2>Danh sách</h2>
            <table className='table table-border'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FullName</th>
                        <th>Age</th>
                        <th>Active</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {btdListUser.map((user) => (
                        editUserId === user.id ? (
                            <BtdEditUser key={user.id} user={user} onSave={handleSave} onCancel={() => setEditUserId(null)} />
                        ) : (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.btdFullName}</td>
                                <td>{user.btdAge}</td>
                                <td>{user.btdActive ? 'Hoạt động' : 'Khóa'}</td>
                                <td>
                                    <button onClick={() => handleEdit(user.id)}>Sửa</button>
                                    <button onClick={() => handleDelete(user.id)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );
}
