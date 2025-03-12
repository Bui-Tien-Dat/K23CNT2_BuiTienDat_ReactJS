import React, { Component } from "react";
import BtdStudent from "./BtdStudent";

class BtdStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    btdHandleView = (btdStudent)=>{
        // Chuyển dữ liệu lên BtdApp
        this.props.onBtdHandleView(btdStudent);
    }


  render() {
    // lấy dữ liệu trong props từ BtdApp chuyển xuống
    let {renderBtdStudents} = this.props;
    console.log("List:",renderBtdStudents);
    
    // chuyển dữ liệu vào BtdStudent để hiển thị
    let btdElementStudent = renderBtdStudents.map((btdItem,index)=>{
        return <BtdStudent key={index} renderBtdStudent={btdItem} onBtdHandleView={this.btdHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {btdElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BtdStudentList;