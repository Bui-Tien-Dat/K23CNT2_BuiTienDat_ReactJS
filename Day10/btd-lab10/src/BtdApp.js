import React, { Component } from 'react'
import BtdUseState from './components/BtdUseState'
import BtdUseEffect from './components/BtdUseEffect';

 class BtdApp extends Component {
  render() {
    return (
      <div className='container border my-2'>
        <h1>Demo React hook</h1>
        <BtdUseState />
        <BtdUseEffect />
      </div>
    )
  }
}
export default BtdApp;