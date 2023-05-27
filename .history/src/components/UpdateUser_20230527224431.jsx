import React, { useEffect, useState } from "react"
// import "../assets/updateuser.css"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/slice/userDetail";

const UpdateUser = ()=>{
    const {id} = useParams()
    const [ data, setData] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector((state)=> state.users.user)
    // console.log("the use", userData)

    useEffect(()=>{
        if(id){
        const singleUser = userData.filter((elem)=> elem.id === id)
        const singleUserData = singleUser[0]
        setData(singleUserData)

        }
    },[])
    const  handleChange =(e)=>{
    setData({...data, [e.target.name]:e.target.value})
}
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(updateUser(data))
        console.log('The dispatched id',data.id)
        navigate("/read")
    }

    console.log("The user data fetched & update", data)
    return(
        <>    <h1 style={{textAlign:"center"}}>Update User Data</h1>
             <form className='w-50 mx-auto' onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={data && data.name} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={data && data.email}  onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={data && data.age} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mx-auto'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" checked={data && data.gender==="male"}  id="flexRadioDefault1" />
                        <label className="form-check-label"  htmlFor="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" checked={data && data.gender==="female"}  id="flexRadioDefault2" />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>

        
    )}

    export default UpdateUser;
