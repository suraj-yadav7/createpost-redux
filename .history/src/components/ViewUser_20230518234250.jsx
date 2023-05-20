import React from 'react'
import "../assets/viewuser.css"
import { useSelector } from 'react-redux'


const ViewUser = ({id,show}) => {
    const userData = useSelector((state => state.users.user))
    let singleUserData = userData.filter((elem)=> elem.id===id)
    console.log("the singel user data",singleUserData)
  return (
    <>
    <div >
        <button className='close'>x</button>
    {
     show && <div className='viewUserBackground'>
      <div className='viewUser'>
        <h4>Name: </h4>
        <h4>Email:</h4>
        <h4>Gender</h4>
        <h4>Age:</h4>
      </div>
      </div>
}
    </div>
    </>
  )
}

export default ViewUser
