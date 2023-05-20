import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{
    let response = await fetch("https://646273424dca1a661346b571.mockapi.io/crud",{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(data)
                })

    try{
        let apiData = await response.json()
        return apiData 
    }
    catch(error){
        console.log("the error:",rejectWithValue,error)

    }
} )

export const showUser = createAsyncThunk("showUser", async({rejectWithValue})=>{
    let response = await fetch("https://646273424dca1a661346b571.mockapi.io/crud",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify()
    })
    try{
        let apiData = await response.json()
        return apiData
    }
    catch(error){
        console.log("the error:",rejectWithValue,error)
    }
})

const userDetail= createSlice({
    name:"userDetail",
    initialState:{
        user:[],
        loading:false,
        error:null,
    },
    reducers:{
        
    },
    extraReducers:{
        [createUser.pending]:(state)=>{
            state.loading=true
        },
        [createUser.fulfilled]:(state,action)=>{
            state.user.push(action.payload)
        },
        [createUser.rejected]:(state,action)=>{
            state.error=action.payload.message
        },
        [showUser.pending]:(state)=>{
            state.loading=true
        },
        [showUser.fulfilled]:(state,action)=>{
            state.user= action.payload
            console.log(action.payload)
        },
        [showUser.rejected]:(state,action)=>{
            state.error=action.payload
        }
    }


})

export default userDetail.reducer 
export const {addPost} = userDetail.actions
