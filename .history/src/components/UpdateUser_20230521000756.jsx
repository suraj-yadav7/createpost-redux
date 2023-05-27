import React, { useEffect, useState } from "react"
import "../assets/updateuser.css"
import { useSelector } from "react-redux";

const Update = ({id,setUpdate})=>{
    const userData = useSelector((state)=>state.users.user)

    const  [updateData, setUpdateData] = useState()
    
    useEffect(()=>{
        if(id){

            let singleUser = userData.filter((elem) => elem.id === id) 
            setUpdateData(singleUser[0])
            console.log("the name", updateData)
        }

    },[])

    
    const updateChange = (e)=>{
            setUpdateData({...updateData, [e.target.name]:e.target.value})        
    }
    const handleSubmit = ()=>{

    }
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setUpdate(false)}>x</button>
            <span>Name: </span><input type="text" name="name" onChange={updateChange}  value={updateData.name}></input>
            <span>Email:</span><input type="text" name="email" onChange={updateChange} value={updateData.email}></input>
            <span>Age(digit): </span> <input type="number"  name="age" value={updateData.age}></input>
            <button onClick={handleSubmit}>update</button>
            </div>
        </div>
        
        </>

    )
};

export default Update;