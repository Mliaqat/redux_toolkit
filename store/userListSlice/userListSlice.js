import { createSlice } from "@reduxjs/toolkit";


export const userListSlice=createSlice({
    name:"userList",
    initialState:[
        {
            name:"ali"
        }
    ],
    reducers:{
        addUser:state=>{
            state.push({name:"Liaqat"})
        }
    }
})


export const {addUser} =userListSlice.actions

export default userListSlice.reducer