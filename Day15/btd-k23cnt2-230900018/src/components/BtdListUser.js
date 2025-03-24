import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function BtdListUser() {
    // state
    const [btdListUser, setBtdListUser] = useState([])
    const btdApi = "https://67e0d18258cc6bf78523031d.mockapi.io/btd-k23cnt2-2310900018/btd_users"

    useEffect(()=>{
        axios.get(btdApi)
        .then(btd_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(btd_response.data); // Dữ liệu từ API
            setBtdListUser(btd_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    

    const btdHandleDelete = async (btdId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(btdApi+"/"+btdId);

            let btdListUserDelete = btdListUser.filter(x=>x.id !=btdId);
            setBtdListUser(btdListUserDelete);
        }
    }
    const navigate = useNavigate();
    const btdHandleUpdate = (btdId) =>{
        navigate(`/btd-edit-user/${btdId}`);
    }
  return (
    <div>
         <h2>Danh sách user</h2>
         <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    btdListUser.map((btdUserItem,index)=>{
                        return (
                            <tr>
                                <td>{btdUserItem.id}</td>
                                <td>{btdUserItem.btd_name}</td>
                                <td>{btdUserItem.btd_email}</td>
                                <td>{btdUserItem.btd_phone}</td>
                                <td>
                                    {btdUserItem.btd_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>btdHandleUpdate(btdUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> btdHandleDelete(btdUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
