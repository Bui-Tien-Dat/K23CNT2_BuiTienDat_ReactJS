import React, { Component } from 'react';

class BtdEvenForm1 extends Component {
    constructor(props){
            super(props);
            this.state = {
                btdStudentName:'Bui Dat',
            }
        }
    //Ham xu ly su kien khi du lieu tren textbox thay doi
    btdHandleChange = (event)=>{
    /// cap nhat lai state
    this.setState({
        btdStudentName:event.target.value,
    })
    }
    //khhi submit form lay du lieu va hien thi
    btdHandleSubmit = (ev)=>{
        alert('Xin chao!' + this.state.btdStudentName);
        ev.preventDefault();
    }
    render(){
    return (
      <div className='alert alert-info'>
            <h1>Form Input</h1>
            <form onSubmit={this.btdHandleSubmit}>
                <label htmlFor='btdStudentName'>
                    <input type='text' name='btdStudentName'id='btdStudentName'
                        value={this.state.btdStudentName}
                        onChange={this.btdHandleChange}
                    />
                </label>
                <button className='btn btn-primary'>Click here</button>
            </form>
      </div>
    );
  }
}

export default BtdEvenForm1;