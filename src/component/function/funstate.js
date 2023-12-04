import React, { useState } from 'react'

const Funstate=()=>{
    const [name,setname]=useState("Reshmi")
   const [obj,setobj]=useState({age:20})
    const changename=()=>{
        setname("Preetha")
    }
   const changeage=()=>{
    setobj({...obj,age:25})
   }
    return(

        <div>
            <p>1.update name using state</p>
            <h4>Name : {name}</h4>
            <button onClick={changename}>Change Name</button>
            <p>2.update object using state</p>
            <h4>age : {obj.age}</h4>
            <button onClick={changeage}>change age</button>
        </div>
       
    )
}

export default Funstate