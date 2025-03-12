import React, { Component } from "react";
import BtdControl from "./components/BtdControl";
import BtdStudentList from "./components/BtdStudentList";
import BtdForm from "./components/BtdForm";

class BtdApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      btdStudents:[
        {btdId:"SV001",btdStudentName:"Trịnh Văn Chung",btdAge:46,btdGender:"Nam",btdBirthday:"05/09/2005",btdBirthPlace:"HN", btdAddress:"tan trieu "},
        {btdId:"SV002",btdStudentName:"Chu Nguyên Chương",btdAge:188,btdGender:"Nữ",btdBirthday:"25/05/1179",btdBirthPlace:"HP", btdAddress:"Trung quốc"},
        {btdId:"SV003",btdStudentName:"Tần Thủy Hoàng",btdAge:55,btdGender:"Nam",btdBirthday:"25/05/1079",btdBirthPlace:"TpHCM", btdAddress:"Trung Quốc"},
        {btdId:"SV004",btdStudentName:"Hoàng Thùy Linh",btdAge:55,btdGender:"Nam",btdBirthday:"25/05/1079",btdBirthPlace:"TpHCM", btdAddress:"Hồ chí minh"},
      ],
      tvcStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  btdHandleView = (btdStudent)=>{
    this.setState({
      btdStudent:btdStudent,
    })
  }

  render() {
    // log
    console.log("View Student:", this.state.btdStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Bui Tien Dat - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <BtdControl  />
                {/* danh sách sinh vien  */}
                <BtdStudentList  renderBtdStudents={this.state.btdStudents} onBtdHandleView={this.btdHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <BtdForm  renderBtdStudent = {this.state.btdStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BtdApp;