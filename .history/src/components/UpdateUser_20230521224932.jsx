import React, { useEffect, useState } from "react"
// import "../assets/updateuser.css"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UpdateUser = ()=>{
    const {id} = useParams()
    const [ data, setData] = useState()
    const userData = useSelector((state)=> state.users.user)
    console.log("the use", userData)

    useEffect(()=>{
        if(id){
        const singleUser = userData.filter((elem)=> elem.id === id)
        const singleUserData = singleUser[0]
        setData(singleUserData)

        }
    },[])
    const  handleChange =(e)=>{
    setData(...data, [e.target.name]=e.target.value)
}
console.log("skdfsdfds", data)
    return(
        <>
             <form className='w-50 mx-auto' >
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={data && data.name} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={data && data.email}   id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={data && data.age}  id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mx-auto'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" checked={data && data.gender==="male"}  id="flexRadioDefault1" />
                        <label className="form-check-label"  for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" checked={data && data.gender==="female"}  id="flexRadioDefault2" checked />
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
