import axios from "axios";
import { GetAllActivities } from "../slices/activitiesSlice";

export const getAllActivities = ()=>{
    return async dispatch =>{
        const activities = (await axios.get("http://localhost:3001/activities/")).data
        dispatch(GetAllActivities(activities))
    }
}

export const postActivity = (newActivity) =>{
    return async dispatch =>{
        await axios.post("http://localhost:3001/activities/post", newActivity)
    }
}