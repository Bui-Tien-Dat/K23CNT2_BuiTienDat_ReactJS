import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function BtdEditUser() {
     const btdUser = {
            id:0,
            'btd_name':'',
            'btd_email':'',
            'btd_phone':'',
            'btd_active':true
        }
    
        const [btd_user, setBtd_User] = useState(btdUser);
        const btdApi = "https://67e0d18258cc6bf78523031d.mockapi.io/btd-k23cnt2-2310900018/btd_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(btdApi+"/"+`${id}`)
            .then(btd_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(btd_response.data); // Dữ liệu từ API
                setBtd_User(btd_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const btdHandlSubmit = (ev)=>{
            ev.preventDefault();
            console.log(btd_user);
            axios
            .put(btdApi+`/${id}`, btd_user)
            .then((btd_response) => {
                alert('Cập nhật thành công!');
                navigate('/btd-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="btd_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="btd_name"
                name="btd_name"
                value={btd_user.btd_name} 
                onChange={(ev)=>setBtd_User({...btd_user,btd_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="btd_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="btd_email" 
             name="btd_email"
             value={btd_user.btd_email} 
             onChange={(ev)=>setBtd_User({...btd_user,btd_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="btd_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="btd_phone" 
             name="btd_phone"
             value={btd_user.btd_phone} 
             onChange={(ev)=>setBtd_User({...btd_user,btd_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="btd_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="btd_active_true"  className="mx-3"   
                onChange={(ev)=>setBtd_User({...btd_user,btd_active:ev.target.value})}
                value={true}
                name="btd_active"  /> 
            <label htmlFor="btd_active_true">Hoạt động</label>
            <input type="radio" id="btd_active_false"  className="mx-3"
                onChange={(ev)=>setBtd_User({...btd_user,btd_active:ev.target.value})}
                value={false} 
                name="btd_active" /> 
            <label htmlFor="btd_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnBtdCreate" 
                    onClick={btdHandlSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnBtdBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}