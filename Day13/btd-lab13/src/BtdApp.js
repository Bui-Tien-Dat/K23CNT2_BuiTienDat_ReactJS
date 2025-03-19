import React from 'react'
import BtdReadApiLocal from './components/BtdReadApiLocal'
import BtdReadMockAPI from './components/BtdReadMockAPI'
import BtdCreateMockAPI from './components/BtdCreateMockAPI'
import BtdListUsers from './components/BtdListUsers'


export default function BtdApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1>ReactJS - API - Bui Tien Dat</h1>
      <hr/>
      <BtdReadApiLocal/>
      <hr/>
      <h2>Doc du lieu tu MockApi</h2>
      <BtdReadMockAPI/>
      <BtdCreateMockAPI/>
      <BtdListUsers/>
      
    </div>
  )
}
