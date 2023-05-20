import { createSlice } from "@reduxjs/toolkit";

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
    }


})

export default userDetail.reducer 
export const {addPost} = userDetail.actions
