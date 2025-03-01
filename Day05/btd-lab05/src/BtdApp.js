import React, { Component } from 'react'
import BtdFuncEven1 from './components/BtdFuncEven1'

export default class BtdApp extends Component {
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-infor my-2'>K23CNT2 - Bui Tien Dat - Event and Form</h1>
        <hr/>

        <BtdFuncEven1/>
      </div>
    )
  }
}

