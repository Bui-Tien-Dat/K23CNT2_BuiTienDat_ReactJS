import React, { Component } from 'react'

class BtdEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btdGioiTinh:'Nam',
        }

    }
    //ham su ly su kien changes
    btdHandleChange = (event)=>{
        this.setState({
            btdGioiTinh:event.target.value,
        })
    }
    //ham su ly su kien submit form
    btdHandleSubmit = (event)=>{
        event.preventDefault();
        alert("Gioi tinh cua ban la: " + this.state.btdGioiTinh)
    }
  render() {
    return (
      <div className='aler alert-success'>
        <h2>Form Input - radio</h2>
        <form>
            <div>
                <label htmlFor=''>Gioi tinh</label> &nbsp;&nbsp;&nbsp;
                <input type='radio' name='btdGioiTinh' id='btdNam' className='mx-2'
                    value="Nam" checked={this.state.btdGioiTinh === 'Nam'} onChange={this.btdHandleChange}/>
                    <label htmlFor='btdNam'>Nam</label> &nbsp;&nbsp;&nbsp;
                <input type='radio' name='btdGioiTinh' id='btdNu'className='mx-2'
                    value="Nu" checked={this.state.btdGioiTinh === 'Nu'} onChange={this.btdHandleChange}/>
                    <label htmlFor='btdNu'>Nu</label> &nbsp;&nbsp;&nbsp;
                <input type='radio' name='btdGioiTinh' id='btdKhac'className='mx-2'
                    value="Khac" checked={this.state.btdGioiTinh === 'Khac'} onChange={this.btdHandleChange}/>
                    <label htmlFor='btdKhac'>Khac</label>
            </div>
            <button onClick={this.btdHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default BtdEventForm3;