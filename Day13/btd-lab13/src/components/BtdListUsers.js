import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BtdListUsers() {
    const [btdUsers, setBtdUsers] = useState([]);
    const btdApiUrl = "https://67dac72235c87309f52e0022.mockapi.io/K23CNT2_BuiTienDat/btd_users";

    // Lấy danh sách users khi component mount
    useEffect(() => {
        axios.get(btdApiUrl)
            .then(response => {
                setBtdUsers(response.data);
            })
            .catch(error => {
                console.error("Lỗi khi tải danh sách users:", error);
            });
    }, []);

    // Hàm xử lý xóa user
    const btdHandleDelete = (btdUserId) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa user này?")) {
            axios.delete(`${btdApiUrl}/${btdUserId}`)
                .then(() => {
                    // Cập nhật lại danh sách sau khi xóa
                    setBtdUsers(btdUsers.filter(user => user.id !== btdUserId));
                    alert("Xóa user thành công!");
                })
                .catch(error => {
                    console.error("Lỗi khi xóa user:", error);
                    alert("Có lỗi xảy ra khi xóa user!");
                });
        }
    };

    return (
        <div>
           
            
        </div>
    );
}