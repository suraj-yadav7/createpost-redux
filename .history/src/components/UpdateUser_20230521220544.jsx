import React, { useEffect, useState } from "react"
import "../assets/updateuser.css"
import { useSelector } from "react-redux";

const Update = ({id,setUpdate})=>{
    const userData = useSelector((state)=>state.users.user)

    const  [updateData, setUpdateData] = useState()
    
    useEffect(()=>{
        if(id){
            const singleUser = userData.filter((elem) => elem.id === id) 
            setUpdateData(singleUser[0])
            console.log("the name", singleUser[0])
        }
        console.log("The data from parent",updateData)

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
            <span>Name: </span><input type="text" name="name" onChange={updateChange}  ></input>
            <span>Email:</span><input type="text" name="email" onChange={updateChange} ></input>
            <span>Age(digit): </span> <input type="number"  name="age" ></input>
            <button onClick={handleSubmit}>update</button>
            </div>
        </div>
        
        </>

    )
};

export default Update;