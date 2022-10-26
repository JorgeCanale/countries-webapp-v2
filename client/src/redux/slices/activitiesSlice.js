import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activities: [],
    error: "",
}

export const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers:{
        GetAllActivities:(state, action)=>{
            if(typeof action.payload === "string"){
                state.error = action.payload
            }else{
                state.activities = action.payload
            }
        }
    }
})

export const { GetAllActivities} = activitiesSlice.actions

export default activitiesSlice.reducer