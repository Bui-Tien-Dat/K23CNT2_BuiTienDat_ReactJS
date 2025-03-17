import React, { useState } from 'react'

export default function BtdFormUser({onBtdAddNew}) {

    const [id, setBtdId] = useState('')
    const [btdFullName, setBtdFullName] = useState('')
    const [btdUserName, setBtdUserName] = useState('')
    const [btdPass, setBtdPass] = useState('')

   

    const btdHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,btdFullName,btdUserName, btdPass)
        
        onBtdAddNew({id,btdFullName,btdUserName, btdPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setBtdId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='btdFullName' value={btdFullName} onChange={(ev)=>setBtdFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='btdUserName' value={btdUserName} onChange={(ev)=>setBtdUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='btdPass' value={btdPass} onChange={(ev)=>setBtdPass(ev.target.value)} /> </p>

            <p>
                <button name='btdSave' onClick={btdHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}