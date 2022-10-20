import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activities: [],
}

export const activitiesSlice = createSlice({
    name: "activities",
    initialState,
    reducers:{
        GetAllActivities:(state, action)=>{
            state.activities = action.payload
        }
    }
})

export const { GetAllActivities} = activitiesSlice.actions

export default activitiesSlice.reducer