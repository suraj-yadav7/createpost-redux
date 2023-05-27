import React, { useState } from "react"
import "../assets/updateuser.css"
import { useSelector } from "react-redux";

const Update = ({id,setUpdate})=>{
    const userData = useSelector((state)=>state.users.user)

    const  [userName, setUserName] = useState("")
    console.log(userName)
    let singleUserData = userData.filter((elem) => elem.id === id)
    const handleSubmit = ()=>{

    }
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            <span>Name: </span><input type="text" onChange={setUserName()}  value={singleUserData[0].name || userName}></input>
            <span>Email:</span><input type="text" value={singleUserData[0].email}></input>
            <span>Age(digit): </span> <input type="number" value={singleUserData[0].age}></input>
            <button onClick={handleSubmit}>update</button>
            </div>
        </div>
        
        </>

    )
};

export default Update;