import React from 'react'

export default function BtdRenderList() {
    const btdList = ["Bui Dat","ReactJS","Fit-NTU"];
  return (
    <div className='alert alert-success'>
        <h2>Danh sach:</h2>
        {
            btdList.map(item=>{
                return <li>{item}</li>
            })
        }
    </div>
  )
}
