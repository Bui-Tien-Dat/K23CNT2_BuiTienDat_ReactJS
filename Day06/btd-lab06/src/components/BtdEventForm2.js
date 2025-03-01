import React, { Component } from 'react'

class BtdEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            btdCourse:'CSS3',
        }
    }
    //ham su ly xu kien thi thay doi khoa hoc
    btdHandleChange = (event)=>{
        //cap nhat lai state
        this.setState({
            btdCourse:event.target.value,
        })
    }
    //ham su ly su kien khi submit form 
    btdHandleSubmit = (event)=>{
        alert("Khoa hoc ban chon:" + this.state.btdCourse);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h1>Form Select</h1>
            <form >
                <label htmlFor=''>
                    <select name='btdCourse' id='btdCourse' 
                    value={this.state.btdCourse}
                    onChange={this.btdHandleChange}
                    >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascrip'}>Javascrip</option>
                        <option value={'Squery'}>Squery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                    </select>
                </label>
                <button className='btn btn-primary' onClick={this.btdHandleSubmit}>Click here</button>
            </form>
      </div>
    )
  }
}
export default BtdEventForm2;