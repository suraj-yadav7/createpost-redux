import { createSlice } from "@reduxjs/toolkit";

const userDetails= createSlice({
    name:"user",
    initialState:{
        post:[],
        male:""
    },
    reducers:{
        addPost(state,action){

        }
    }


})

export default userDetails.reducer 
export const {addPost} = userDetails.actions
