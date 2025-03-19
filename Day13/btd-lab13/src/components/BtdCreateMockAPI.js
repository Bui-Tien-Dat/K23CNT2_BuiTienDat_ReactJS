import React, { useState } from 'react'
import axios from 'axios'

export default function BtdCreateMockAPI() {
    // Khởi tạo state
    const [btdFullName, setBtdFullName] = useState('')
    const [btdAge, setBtdAge] = useState(0)
    const [btdActive, setBtdActive] = useState(true)

    // API post
    const btdCreateUserApi = "https://67dac72235c87309f52e0022.mockapi.io/K23CNT2_BuiTienDat/btd_users";

    // Khi submit form
    const btdHandleSubmit = (event) => {
        event.preventDefault();
        console.log("btdActive:", btdActive);
        
        let btdNewUser = { btdFullName, btdAge, btdActive };
        console.log(btdNewUser);

        // Ghi dữ liệu vào API
        axios
            .post(btdCreateUserApi, btdNewUser)
            .then((btd_response) => {
                console.log("User created:", btd_response.data);
                alert("Thêm user thành công!");
            })
            .catch((error) => {
                console.error("Lỗi khi tạo user:", error);
                alert("Có lỗi xảy ra khi thêm user!");
            });
    };

    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr />
            <form onSubmit={btdHandleSubmit}>
                <div className='mb-1'>
                    <label htmlFor="btdFullName">Full Name</label>
                    <input type='text' name='btdFullName' id="btdFullName"
                        value={btdFullName}
                        onChange={(ev) => setBtdFullName(ev.target.value)} />
                </div>
                <div className='mb-1'>
                    <label htmlFor="btdAge">Age</label>
                    <input type='number' name='btdAge' id="btdAge"
                        value={btdAge}
                        onChange={(ev) => setBtdAge(Number(ev.target.value))} />
                </div>
                <div className='mb-1'>
                    <label>Active</label>
                    <input type='radio' name='btdActive' id="btdActive_hd" value={true}
                        checked={btdActive === true}
                        onChange={() => setBtdActive(true)} />
                    <label htmlFor="btdActive_hd"> Hoạt động</label>

                    <input type='radio' name='btdActive' id="btdActive_kh" value={false}
                        checked={btdActive === false}
                        onChange={() => setBtdActive(false)} />
                    <label htmlFor="btdActive_kh"> Khóa</label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}