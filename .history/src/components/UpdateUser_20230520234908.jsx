import React, { useState } from "react"
import "../assets/updateuser.css"
import { useSelector } from "react-redux";

const Update = ({id,setUpdate})=>{
    const userData = useSelector((state)=>state.users.user)

    
    let singleUser = userData.filter((elem) => elem.id === id)
    let singleUserData = singleUser[0]
    
    const  [updateData, setUpdateData] = useState({singleUserData})
    const updateChange = (e)=>{
            setUpdateData({...updateData, [e.target.name]:e.target.value})        
    }
    console.log("the update", updateData)
    const handleSubmit = ()=>{

    }
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            <span>Name: </span><input type="text" name="name" onChange={updateChange}  value={singleUserData.name}></input>
            <span>Email:</span><input type="text" name="email" onChange={updateChange} value={singleUserData.email}></input>
            <span>Age(digit): </span> <input type="number"  name="age" value={singleUserData.age}></input>
            <button onClick={handleSubmit}>update</button>
            </div>
        </div>
        
        </>

    )
};

export default Update;