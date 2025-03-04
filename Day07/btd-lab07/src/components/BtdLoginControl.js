import React, { Component } from 'react'
import BtdLoginComp from './BtdLoginComp';
import BtdLogoutComp from './BtdLogoutComp';

 class BtdLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    //ham su ly xu kien login
    btdHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
  render() {
    let { isLoggedIn}=this.state
    let btdElement =  isLoggedIn?<BtdLoginComp/> : <BtdLogoutComp/>
    return (
      <div className='alert alert-danger'>
        {btdElement}
        {
            isLoggedIn?
            <button>Logout</button>
            :<button onClick={this.btdHandleLogin}>Login</button>
        }

      </div>
    );
  }
}
export default BtdLoginControl;