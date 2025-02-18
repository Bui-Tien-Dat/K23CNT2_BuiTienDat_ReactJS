
import BtdClassComp from "./components/BtdClassComp";
import BtdFunComp from "./components/BtdFunComp";
import BtdFunComp1 from "./components/BtdFunComp1";

function BtdApp() {
  //object
  const users = {
    fullName:'Pham Hoang Nam',
    age:19,
    phone:"0123456789"
    
  }
  
  return (
    <div className="container border mt-3">
      <h1>Demo Component - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <BtdFunComp name="Bui Dat" address="53 Trieu Khuc" company="DH Nguyen Trai"/>
          <hr/>
          <BtdFunComp name="Pham Khanh" address="Nhat Ban" company="Tokyo"/>
          <hr/>
      </div>
      <div className='alert alert-info'>
        <BtdFunComp1 renderInfo={users}/>
      </div>
      <BtdClassComp />
      {/*chuyen du lieu tu btdapp -> xuong btdclasscomp*/}
      <BtdClassComp renderName="K23CNT2" renderUsers={users}/>
    </div>
  );
}

export default BtdApp;
