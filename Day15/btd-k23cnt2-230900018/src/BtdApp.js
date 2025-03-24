import React from 'react'
import { BrowserRouter as BtdRouter, Route, Routes } from 'react-router-dom'
import BtdNavBar from './components/BtdNavBar'
import BtdHome from './components/BtdHome'
import BtdEditUser from './components/BtdEditUser'
import BtdCreateUser from './components/BtdCreateUser'
import BtdListUser from './components/BtdListUser'

export default function BtdApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-info  text-center'>K23CNT2 - Bui Tien Dat - 2310900018</h1>
      <hr/>
      <BtdRouter>
        <BtdNavBar/>
        <hr/>
        <Routes>
              <Route path='/' element={<BtdHome/>} />
              <Route path='/btd-list-user' element={<BtdListUser/>} />
              <Route path='/btd-create-user' element={<BtdCreateUser/>} />
              <Route path='/btd-edit-user/:id' element={<BtdEditUser/>} />
          </Routes>
      </BtdRouter>
    </div>
  )
}
