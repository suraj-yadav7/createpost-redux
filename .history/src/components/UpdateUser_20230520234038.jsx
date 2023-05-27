import React, { useState } from "react"
import "../assets/updateuser.css"
import { useSelector } from "react-redux";

const Update = ({id,setUpdate})=>{
    const userData = useSelector((state)=>state.users.user)

    const  [userName, setUserName] = useState("")
    console.log(userName)
    let singleUser = userData.filter((elem) => elem.id === id)
    let singleUserData = singleUser[0]
    console.log("the", singleUserData)

    const updateChange = ()=>{
        
    }
    
    const handleSubmit = ()=>{

    }
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            <span>Name: </span><input type="text" name="name" onChange={updateChange}  value={singleUserData.name}></input>
            <span>Email:</span><input type="text" name="email" onChange={updateChange} value={singleUserData.email}></input>
            <span>Age(digit): </span> <input type="number" min='0' name="age" value={singleUserData.age}></input>
            <button onClick={handleSubmit}>update</button>
            </div>
        </div>
        
        </>

    )
};

export default Update;