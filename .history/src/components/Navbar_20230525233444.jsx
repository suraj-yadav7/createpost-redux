import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {searchUser} from  '../store/slice/userDetail'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const allusers = useSelector((state)=>state.users.user)
  const [searchVal, setSearchVal] = useState("")
  const dispatch = useDispatch()
  console.log("The search val", searchVal)

  const { loginWithRedirect } = useAuth0();

  useEffect(()=>{
    dispatch(searchUser(searchVal))

  },[searchVal])
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >CRUD WebApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >CreateUser</Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link active" >AllPost({allusers.length})</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" onChange={(e)=>setSearchVal(e.target.value)} placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button style={{padding:"0 5px", margin:"0 1rem"}} onClick={() => loginWithRedirect()}>Log In</button>;
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
