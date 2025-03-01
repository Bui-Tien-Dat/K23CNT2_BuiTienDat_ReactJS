import React from 'react'

export default function BtdFuncEven1() {

    //Hm xu ly su kien
    const BtdEvenButton1Click = ()=>{
        alert("Button 1 - Clicked");
    } 
    const BtdEvenButton2Click = ()=>{
        alert("Button 2 - Clicked");
    } 
  return (
    <div className=''>
        <button className='btn btn-primary' onClick={BtdEvenButton1Click()}>
          Button1
          </button>
        <button className='btn btn-primary' onClick={BtdEvenButton2Click}>
          Button2
          </button>
    </div>
  );
}
