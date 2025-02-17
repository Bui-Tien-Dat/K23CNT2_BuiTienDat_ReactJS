import React from 'react'

export default function BtdJsxExpression(){
    //bien
    const name="Bui Tien Dat";
    //bien doi tuong
    const user={
        firstName:"Dat",
        lastName:"Bui"
    }
    //ham
    const fullName=(user)=>{
        return   user.firstName + ' ' + user.lastName  ;
    }

    //element 
    const element =(
        <div>
            {/*bieu thuc jxs */}
            <h2>{fullName(user)}</h2>
            <hr/>
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //Ham
    const sayWelcom = (name)=>{
       if(name){
        return <h3>Welcome to {name}</h3>
       }else{
            return <h3>Welcome to Fit-NTU-K23CNT2</h3>
       }
    }
    return(
        <div>
            <h1> BTD - JSX Expression</h1>
            {/* su dung bien element */}
            {element}

            <hr/>
            {sayWelcom()}
            <hr/>
            {sayWelcom("Pham Hoang Nam")}
        </div>
    )
}