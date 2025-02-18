import React, { Component } from 'react';

 class BtdClassComp extends Component {
    constructor(props){
        super(props);
        //khoi tao state
        this.state = {
            fullName:"Dat Dat",
            age:19,
            phone:"0123456788"
        }
    }
    //Ham xu ly su kien
     changeInfo = (ev)=>{
        //cap nhat state
        this.setState({
            fullName:"Bui Tien Dat"
        });
     }
  render() {
    let users = this.props.renderUsers;
    console.log('===============================');
    console.log(users);
    console.log('===============================');
    return (
      <div className='alert alert-success'>
        <h2>Trinh bay du lieu tu state</h2>
        <p>info state (fullName): {this.state.fullName}</p>
        <p>info state (age): {this.state.age}</p>
        <p>info state (phone): {this.state.phone}</p>

        <hr/>
        <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
        <hr/>
        <h3>Lay du lieu tu Props</h3>
        <p>Name: {this.props.renderName}</p>

        <p>fullName: {this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
        <p>Age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
      </div>
    );
  }
}
export default BtdClassComp;
