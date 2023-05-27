import React, { useEffect, useState } from "react"
// import "../assets/updateuser.css"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateUser = ()=>{
    const {id} = useParams()
    console.log("the id", id)

    const userData = useSelector((state)=> state.users.user)
    const singleUser = userData.filter((elem)=> elem.id === id)
    const singleUserData = singleUser[0]
    console.log('Tje', singleUserData)

    return(
        <>
             <form className='w-50 mx-auto' >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mx-auto'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male"  id="flexRadioDefault1" />
                        <label className="form-check-label"  for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female"  id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>

        
    )}

    export default UpdateUser;
