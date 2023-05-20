import React, { useEffect } from 'react'
import { showUser } from '../store/slice/userDetail';
import { useSelector, useDispatch  } from 'react-redux';

const Read = () => {
    const userData = useSelector((state)=>{
        return state.users.user})
    console.log("The data in read:",userData)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(showUser())
    },[])
    return (
        <>
        {
               userData.map((data)=>{
                <div className="card w-50 mx-auto" key={data.id} >
                <div className="card-body">
                    <h5 className="card-title">User Details</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{data.name}</h6>
                    <p className="card-text">Email : {data.email}</p>
                    <p className="card-text">age : {data.age}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                    </div>
                 })
        }
        </>
    )
};

export default Read;
