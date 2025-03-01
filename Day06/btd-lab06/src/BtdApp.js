import React, { Component } from 'react'
import BtdEvenForm1 from './components/BtdEvenForm1';
import BtdEventForm2 from './components/BtdEventForm2';
import BtdEventForm3 from './components/BtdEventForm3';
import BtdEventForm4 from './components/BtdEventForm4';
import BtdEventForm5 from './components/BtdEventForm5';

class BtdApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
            <h1 className='text-center'>Even Form - demo</h1>
            <hr/>
            <BtdEvenForm1/>
            <BtdEventForm2/>
            <BtdEventForm3/>
            <BtdEventForm4/>
            <BtdEventForm5/>
      </div>
    );
  }
}

export default BtdApp;