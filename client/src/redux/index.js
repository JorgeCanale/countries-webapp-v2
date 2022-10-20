import {configureStore} from "@reduxjs/toolkit"
import countriesSlice from "./slices/countriesSlice"
import activitiesSlice from "./slices/activitiesSlice"

export const store = configureStore({
    reducer:{
        countries: countriesSlice,
        activities: activitiesSlice
    },
})