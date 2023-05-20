import React, { useEffect, useState } from 'react'
import { showUser,deleteUser, updateUser } from '../store/slice/userDetail';
import { useSelector, useDispatch  } from 'react-redux';
import ViewUser from './ViewUser';
import UpdateUser  from "./UpdateUser"

const Read = () => {
    const [id, setId] = useState()
    const [showPop, setShowPop] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)

    const userData = useSelector((state)=>{
        return state.users.user})
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(showUser())
    },[])

    return (
        <>
        { showUpdate && <UpdateUser id={id} /> }
       { showPop && <ViewUser id={id}  setShow={setShowPop}/> }
        <div >
        {
             userData && userData.map((data)=>(
                <div className="card w-50 mx-auto" key={data.id} >
                <div className="card-body">
                    <h5 className="card-title">User Details</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{data.name}</h6>
                    <p className="card-text">Email : {data.email}</p>
                    <p className="card-text">Age : {data.age}</p>
                    <button  className="card-link"  onClick={()=>{setShowPop(true), setId(data.id)}}>View</button>
                    <button  className="card-link" onClick={()=>dispatch(updateUser(data.id))} >Edit</button>
                    <button  className="card-link"  onClick={()=>{setShowUpdate(true),dispatch(deleteUser(data.id))}}>Delete</button>
                </div>
                </div>
               ))
        }
        </div>
        </>
    )
};

export default Read;
