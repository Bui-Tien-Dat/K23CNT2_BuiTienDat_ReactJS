import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BtdNavNar from './components/BtdNavNar'
import BtdHome from './components/BtdHome'
import BtdAbout from './components/BtdAbout'
import BtdContact from './components/BtdConTact'
import BtdListUser from './components/BtdListUser'
import BtdFormUser from './components/BtdFormUser'
export default function BtdApp() {

  const listUsers  = [
    {id:"SV001", btdFullName:"Bui Tien Dat", btdUserName:"DatDat", btdPass:"123456a@"},
    {id:"SV002", btdFullName:"Hoang Van B", btdUserName:"VanB", btdPass:"123456a@"},
    {id:"SV003", btdFullName:"Nguyễn Quang A", btdUserName:"QuangA", btdPass:"123456a@"},
  ]

  const[btdUsers, setBtdUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const btdHandleAdd = (btdParam)=>{
    console.log("btdHandleAdd:", btdParam);
    
    setBtdUsers(prev =>{ 
      return [
        ...prev,
        btdParam
      ]
    })
  }
  return (
    <div className='container border my-3'>
        <h1>React Router Dom - Demo - [Bui Tien Dat - K23CNT2]</h1>
        <hr/>
        <Router>
            <BtdNavNar />
            <Routes>
                <Route path='/' element = {<BtdHome />} />
                <Route path='/about' element = {<BtdAbout />} />
                <Route path='/contact' element = {<BtdContact />} />
                <Route path='/list-user' element = {<BtdListUser  renderBtdUsers={btdUsers}/>} />
                <Route path='/create-user' element = {<BtdFormUser  onTvcAddNew={btdHandleAdd}/>} />
            </Routes>
        </Router>
    </div>
  )
}