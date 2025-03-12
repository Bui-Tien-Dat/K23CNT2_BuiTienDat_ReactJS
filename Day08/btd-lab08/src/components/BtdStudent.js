import React, { Component } from "react";

class BtdStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    btdHandleView = (btdStudent)=>{
        // Chuyển lên BtdStudentList
        this.props.onBtdHandleView(btdStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ BtdStudentList
    let {renderBtdStudent, key} = this.props;
    console.log("Student:",renderBtdStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderBtdStudent.btdId}</td>
          <td>{renderBtdStudent.btdStudentName}</td>
          <td>{renderBtdStudent.btdAge}</td>
          <td>{renderBtdStudent.btdGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.btdHandleView(renderBtdStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default BtdStudent;