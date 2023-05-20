import React from 'react'
import "../assets/viewuser.css"
import { useSelector } from 'react-redux'


const ViewUser = ({ id, show }) => {
    const userData = useSelector((state => state.users.user))
    let singleUserData = userData.filter((elem) => elem.id === id)
    console.log("the singel user data", singleUserData)
    return (
        <>
            {
                show && <div className='viewUserBackground'>
                    <div className='viewUser'>
                    <button className='close' style={{position:"absolute", right:"40%"}}>x</button>
                        <h4>Name: </h4>
                        <h4>Email:</h4>
                        <h4>Gender</h4>
                        <h4>Age:</h4>
                    </div>
                </div>
            }

        </>
    )
}

export default ViewUser
