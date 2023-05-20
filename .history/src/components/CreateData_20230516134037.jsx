import React, {useState} from 'react'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/slice/userDetail'


const CreateData = () => {
    
    const [data, SetData]=useState({})
    const handleData= (e)=>{
        SetData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }

    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("the data in disppatch",data)
        dispatch(createUser(data))

    }
    return (
        <>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mx-auto'>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleData} id="flexRadioDefault1" />
                        <label className="form-check-label"  for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleData} id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </>
    )
}

export default CreateData
