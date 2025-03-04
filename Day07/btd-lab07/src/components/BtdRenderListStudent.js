import React, { Component } from 'react'

 class BtdRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            btdStudent:[
                {btdId:"NTU001",btdName:"Bui Tien Dat",btdAge:19,btdClass:"K23CNT2"},
                {btdId:"NTU002",btdName:"Pham Hoang Nam",btdAge:19,btdClass:"K23CNT3"},
                {btdId:"NTU003",btdName:"Hoang Thi Thu Hoai",btdAge:19,btdClass:"K23CNT1"},
                {btdId:"NTU004",btdName:"Nguyen Thi Lua",btdAge:19,btdClass:"K23CNT4"},
            ],
        }
    }
  render() {
    let btdElement = this.state.btdStudent.map((btdItem, index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{btdItem.btdId}</td>
                <td>{btdItem.btdName}</td>
                <td>{btdItem.btdAge}</td>
                <td>{btdItem.btdClass}</td>
                <td>
                <button>Sửa</button>
                <button>Xóa</button>
                </td>
        </tr>
        )
    })
    return (
      <div alert alert-infor>
        <h2>Danh sach sinh vien</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>btdId</th>
                    <th>btdName</th>
                    <th>btdAge</th>
                    <th>btdClass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {btdElement}
            </tbody>
        </table>
      </div>
    )
  }
}
export default BtdRenderListStudent;