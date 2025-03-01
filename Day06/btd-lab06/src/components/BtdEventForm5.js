import React, { Component } from 'react';

class BtdEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            btdName:'Dat',
            btdAge:19,
            btdGender:'Female',
            btdCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    btdHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    btdHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.btdName + "\n" + this.state.btdAge);

        // Chuyển dữ liệu trên form lên App component (btdApp);
        this.props.onbtdHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='btdName'>Student Name:</label>
                        <input type='text' name='btdName' id='btdName' 
                            value={this.state.btdName}
                            onChange={this.btdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='btdAge'>Student Age:</label>
                        <input type='text' name='btdAge' id='btdAge' 
                            value={this.state.btdAge}
                            onChange={this.btdHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='btdGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='btdGender' id='btdMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.btdGender === 'Male'}
                                onChange={this.btdHandleChange} />
                            <label htmlFor='btdMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='btdGender' id='btdFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.btdGender === 'Female'}
                                onChange={this.btdHandleChange} />
                            <label htmlFor='btdFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='btdGender' id='btdNone' className='mx-2'
                                value={'None'}
                                checked={this.state.btdGender === 'None'}
                                onChange={this.btdHandleChange} />
                            <label htmlFor='btdNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='btdCourse'>
                            <select name='btdCourse' id='btdCourse' 
                                    value={this.state.btdCourse}
                                    onChange={this.btdHandleChange} >
                                <option value={'HTML5'}>HTML5</option>
                                <option value={'CSS3'}>CSS3</option>
                                <option value={'Javascript'}>Javascript</option>
                                <option value={'Jquery'}>Jquery</option>
                                <option value={'Bootstrap'}>Bootstrap</option>
                            </select>
                        </label>
                    </div>
                    <button onClick={this.btdHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default BtdEventForm5;