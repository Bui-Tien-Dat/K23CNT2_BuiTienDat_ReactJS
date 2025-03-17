import React from 'react'

export default function BtdListUser({renderBtdUsers}) {

    const btdElements = renderBtdUsers.map((btdItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{btdItem.id}</td>
                    <td>{btdItem.btdFullName}</td>
                    <td>{btdItem.btdUserName}</td>
                    <td>{btdItem.btdPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {btdElements}
            </tbody>
        </table>
    </div>
  )
}