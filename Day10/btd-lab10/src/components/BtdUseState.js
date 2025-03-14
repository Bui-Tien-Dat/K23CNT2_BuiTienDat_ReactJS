import React, { useState } from 'react'

export default function BtdUseState()  {
    //khoi tao state
    const [btdCount, setBtdCount] = useState(0);

    //khoi tao state la mot mang
    const btdArr = [10,12,20,22];
    const [btdArray, setBtdArray] = useState(btdArr);

    // khởi tạo state với mảng object
    const btdStudents = [
        {btdId:"SV001",btdName:"Bui Dat", btdAge:19},
        {btdId:"SV002",btdName:"Pham Hoang Nam", btdAge:19},
    ];
    const [btdStudentList, setBtdStudentList] = useState(btdStudents);
    
    // Hàm xử lý sự kiện khi thêm mới phần tử vào mảng
    const btdHandleAddList=()=>{
        setBtdArray([
            ...btdArray,
            parseInt(Math.random()*100),
        ])
    }

    // Hàm xử lý sự kiện thêm mới sinh viên
    const btdHandleAddNewStudent = ()=>{
        let btdStudent = {
            btdId:"SV003",
            btdName:"Nguyen Van Truong",
            btdAge:22
        };
        // Thêm vào state btdStudentList
        setBtdStudentList([
            ...btdStudentList,
            btdStudent
        ])

        console.log("List: ", btdStudentList);
        
    }
  
    return (
      <div className='alert alert-danger'>
        <h2>useState Demo</h2>
        <div>
        <h3>Count: {btdCount}</h3>
            <button onClick={()=>setBtdCount(btdCount+1)}>Tăng + </button>
            <button onClick={()=>setBtdCount(btdCount-1)}>Giảm - </button>
        </div>
        <div>
            <h3>Array: {btdArray.toString()}</h3>
            <button onClick={btdHandleAddList}>Thêm phần từ</button>
        </div>
        <div>
            <h3>Danh sách sinh viên</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nam</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        btdStudentList.map((btdStudent,index)=>{
                            return <>
                                <tr>
                                    <td>{btdStudent.btdId}</td>
                                    <td>{btdStudent.btdName}</td>
                                    <td>{btdStudent.btdAge}</td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
                <tfoot>
                    <button onClick={btdHandleAddNewStudent}>Thêm mới sinh viên</button>
                </tfoot>
            </table>
        </div>
      </div>
    )
  
}
