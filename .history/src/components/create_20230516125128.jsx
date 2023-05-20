import React, {useState} from 'react'

const Create = () => {
    
    const [data, SetData]=useState({})
    const handleData= (e)=>{
        SetData({...data, [e.target.name]:e.target.value})
        console.log(data)
    }

    return (
        <>
            <form className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name="name" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input type="text" class="form-control" name="age" onChange={handleData} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='mx-auto'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" onChange={handleData} id="flexRadioDefault1" />
                        <label class="form-check-label"  for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" onChange={handleData} id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Create
