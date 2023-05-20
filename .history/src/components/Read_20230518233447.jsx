import React, { useEffect, useState } from 'react'
import { showUser } from '../store/slice/userDetail';
import { useSelector, useDispatch  } from 'react-redux';
import ViewUser from './ViewUser';

const Read = () => {
    const [id, setId] = useState("")
    const [showPop, setShowPop] = useState(false)

    const userData = useSelector((state)=>{
        return state.users.user})
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(showUser())
    },[])

    return (
        <>
        {/* <ViewUser id={id} show={showPop}/> */}
        <div >
        {
             userData && userData.map((data)=>(
                <div className="card w-50 mx-auto" key={data.id} >
                <div className="card-body">
                    <h5 className="card-title">User Details</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{data.name}</h6>
                    <p className="card-text">Email : {data.email}</p>
                    <p className="card-text">Age : {data.age}</p>
                    <button  className="card-link"  onClick={[setShowPop(true), setId(data.id)]}>View</button>
                    <button href="#" className="card-link">Edit</button>
                    <button href="#" className="card-link">Delete</button>
                </div>
                </div>
               ))
        }
        </div>
        </>
    )
};

export default Read;
