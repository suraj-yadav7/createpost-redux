import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async()=>{
    let response = await fetch("",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(response)
                })

    try{
        let apiData = await response.json()
        return apiData 
    }
    catch(error){

    }
} )

const userDetail= createSlice({
    name:"userDetail",
    initialState:{
        user:[],
        loading:false,
        error:null,
    },
    reducers:{
        addPost(state,action){

        }
    },
    extraReducers:{
    }


})

export default userDetail.reducer 
export const {addPost} = userDetail.actions
