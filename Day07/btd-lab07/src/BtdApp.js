import React, { Component } from 'react'
import BtdLoginControl from './components/BtdLoginControl';
import BtdRenderList from './BtdRenderList';
import BtdRenderListStudent from './components/BtdRenderListStudent';

 class BtdApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>Bui Tien Dat - Render condition, List key</h1>
        <hr/>
        <BtdLoginControl/>
       <BtdRenderList/>
       <BtdRenderListStudent/>
      </div>
    )
  }
}
export default BtdApp;