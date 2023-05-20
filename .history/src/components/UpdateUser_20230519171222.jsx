import React from "react"

const Update = ({id,setShowUpdate})=>{
    return(
        <>
        <div className="update">
            <div className="UpdateData">
            <button className='close' style={{position:"absolute", right:"40%"}} onClick={setShowUpdate(false)}>x</button>
            Name: <input type="text" ></input>
            email: <input type="text" ></input>
            age: <input type="number" ></input>
            </div>
        </div>
        
        </>

    )
};

export default Update;