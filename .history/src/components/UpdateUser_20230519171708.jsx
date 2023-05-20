import React from "react"
import "../assets/updateuser.css"

const Update = ({id,setUpdate})=>{
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            <span>Name: </span><input type="text" ></input>
            <span>Email:</span><input type="text" ></input>
            <span>Age</span> <input type="number" ></input>
            </div>
        </div>
        
        </>

    )
};

export default Update;