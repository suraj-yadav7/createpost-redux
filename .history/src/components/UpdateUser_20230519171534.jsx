import React from "react"
import "../assets/updateuser.css"

const Update = ({id,setUpdate})=>{
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            Name: <input type="text" ></input>
            email: <input type="text" ></input>
            age: <input type="number" ></input>
            </div>
        </div>
        
        </>

    )
};

export default Update;