import React, { useEffect, useState } from 'react'
import { showUser,deleteUser } from '../store/slice/userDetail';
import { useSelector, useDispatch  } from 'react-redux';
import ViewUser from './ViewUser';
import UpdateUser  from "./UpdateUser"
import { Link, Navigate } from 'react-router-dom';

const Read = () => {
    // view state
    const [id, setId] = useState()
    const [showPop, setShowPop] = useState(false)

    // update state
    const [upId, setUpId]  = useState()
    
    // radio button
    const [genderData, setGenderData] = useState('all')
  
    const userData = useSelector((state)=>state.users.user)
    const searchData =useSelector((state)=> state.users.searchValue)
    const dispatch = useDispatch()
    


    useEffect(()=>{
        dispatch(showUser())
    },[])

    return (
        <>
       { showPop && <ViewUser id={id}  setShow={setShowPop}/> }
        <div >
        <h2 style={{textAlign:"center"}}>All User Data</h2>
        <div className='genderRadio' style={{textAlign:"center",padding:"10px"}}>
        <input className='form-check-input' name="gender" value="all" onChange={(e)=>setGenderData(e.target.value)} type='radio' checked={ genderData === "all"}/>
        <lable className="form-check-label">All</lable> 
        <input className='form-check-input' name="gender" value="male" onChange={(e)=>setGenderData(e.target.value)} type='radio' checked={genderData==="male"}/>
        <lable className="form-check-label">Male</lable> 
        <input className='form-check-input' name="gender" value="female" onChange={(e)=>setGenderData(e.target.value)} type='radio' checked={genderData==="female"}/>
        <lable className="form-check-label">Female</lable> 
        </div>
        {
             userData && userData.filter((elem)=> {
                if(searchData.length===0){
                    return elem
                }
                else{
                    return elem.name.toLowerCase().includes(searchData.toLowerCase())
                }
             }) && userData.filter((elem)=>{
                if(genderData === "male"){
                    return elem.gender === genderData
                }
                if(genderData === "female"){
                    return elem.gender === genderData
                }
                else{
                    return elem
                }
             }) && userData.filter((elem)=> {
                if(fav===true){
                    
                    return elem.id.includes(favData.id)
                }})
             
             
             .map((data)=>(
                <div className="card w-50 mx-auto" key={data.id} >
                <div className="card-body">
                    <h6 className="card-title">User Details</h6>
                    
                    <h6 className="card-subtitle mb-2 text-body-secondary">Name: {data.name}</h6>
                    <p className="card-text">Email : {data.email}</p>
                    <p className="card-text">Age : {data.age}</p>
                    <p className="card-text">Gender : {data.gender}</p>
                    <button  className="card-link"  onClick={()=>{setShowPop(true), setId(data.id)}}>View</button>
                    <button  className="card-link"  ><Link to={`/edit/${data.id}`}>Edit</Link></button>
                    <button  className="card-link"  onClick={()=>dispatch(deleteUser(data.id))}>Delete</button>
                </div>
                </div>
    
        ))}

        </div>
        
        </>
    )
};

export default Read;
