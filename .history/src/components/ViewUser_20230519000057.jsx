import React, { useState } from 'react'
import "../assets/viewuser.css"
import { useSelector } from 'react-redux'


const ViewUser = ({ id, show,setShow }) => {
    const userData = useSelector((state => state.users.user))
    let singleUserData = userData.filter((elem) => elem.id === id)
    console.log("the singel user data", singleUserData)
    return (
        <>
            {
                show && <div className='viewUserBackground'>
                    <div className='viewUser'>
                    <button className='close' style={{position:"absolute", right:"40%"}} onClick={()=>setShow(false)}>x</button>
                        <h4>Name: {singleUserData[0].name}</h4>
                        <h4>Email: {singleUserData[0].email}</h4>
                        <h4>Gender: {singleUserData[0].gender}</h4>
                        <h4>Age: {singleUserData[0].age}</h4>
                    </div>
                </div>
            }

        </>
    )
}

export default ViewUser
