import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Creating a user 
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
        console.log("The dat in createuser", apiData)
        return apiData 
    }
    catch(error){
        rejectWithValue(error)
    }
} )

// reading user data in allUser page
export const showUser = createAsyncThunk("showUser", async(arg,{rejectWithValue})=>{
    let response = await fetch("https://646273424dca1a661346b571.mockapi.io/crud")
    try{
        let apiData = await response.json()
        // console.log("the fetched", apiData)
        return apiData
    }
    catch(error){
        rejectWithValue(error)
    }
})

// Deleting user from database
export const deleteUser = createAsyncThunk("deleteUser", async(id,{rejectWithValue})=>{
    let response = await fetch(`https://646273424dca1a661346b571.mockapi.io/crud/${id}`,{
        method:"DELETE"
    })
    try{
        let apiData = await response.json()
        // console.log("the fetched", apiData)
        return apiData
    }
    catch(error){
        rejectWithValue(error)
    }
})

// Handling update user-data
export const updateUser = createAsyncThunk("editUser", async(data,{rejectWithValue})=>{
    let response = await fetch(`https://646273424dca1a661346b571.mockapi.io/crud/${data.id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
                    })
    try{
        let apiData = await response.json()
        // console.log("the fetched", apiData)
        return apiData
    }
    catch(error){
        rejectWithValue(error)
    }
})

const userDetail= createSlice({
    name:"userDetail",
    initialState:{
        user:[],
        loading:false,
        error:null,
        searchValue:"",
        genderValue:"",
        favouriteData:[]
    },
    
    reducers:{
        searchUser(state,action){
            state.searchValue=action.payload
        },

        genderShow(state,action){
            state.genderValue=action.payload
        },

        favouriteUser(state,action){
            state.favouriteData.push(action.payload)
        console.log("the payload fav", state.favouriteData)

        }
    },


    extraReducers:{
        // handling create new user
        [createUser.pending]:(state)=>{
            state.loading=true
        },
        [createUser.fulfilled]:(state,action)=>{
            state.user.push(action.payload)
        },
        [createUser.rejected]:(state,action)=>{
            state.error=action.payload.message
        },
        // handling show user 
        [showUser.pending]:(state)=>{
            state.loading=true
        },
        [showUser.fulfilled]:(state,action)=>{
            state.user= action.payload
            
        },
        [showUser.rejected]:(state,action)=>{
            state.error=action.payload
        },
        // handling delete existing user
        [deleteUser.pending]:(state)=>{
            state.loading=true
        },
        [deleteUser.fulfilled]:(state,action)=>{
            const {id} = action.payload
            if(id){
                state.user=state.user.filter((elem)=>elem.id !== id)
            }
            
        },
        [deleteUser.rejected]:(state,action)=>{
            state.error=action.payload
        },

        // Handling edit user data
        [updateUser.pending]:(state)=>{
            state.loading=true
        },
        [updateUser.fulfilled]:(state,action)=>{
            if(action.payload.id){
               state.user= state.user.map((elem)=>(
                elem.id === action.payload.id ? action.payload : elem))
            }
            
        },
        [updateUser.rejected]:(state,action)=>{
            state.error=action.payload
        },
    }
  
})

export default userDetail.reducer 
export const {searchUser,genderShow,favouriteUser} = userDetail.actions
