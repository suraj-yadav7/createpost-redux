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
                    <button className='close'>x</button>
                    <div className='viewUser'>
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
