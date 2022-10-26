import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    countries: [],
    backup: [],
    Country: [],
    error: null,
}

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers:{
        GetAllCountries: (state, action)=>{
            if(typeof action.payload === "string"){
                state.error = action.payload
            }else{
                state.countries = action.payload
                state.backup = action.payload
            }
        },
        GetOneCountry: (state, action) =>{
            if(typeof action.payload === "string"){
                state.error = action.payload
            }else{
                state.Country = action.payload
            }
        },
        FilterCountries: (state, action)=>{
            state.countries = action.payload
        },
        FilteredByAlphabeticalOrder:(state, action)=>{
            if(action.payload === "asc"){
                let filtered = state.countries.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
                state.countries = filtered
            }else if(action.payload === "desc"){
                let filtered = state.countries.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
                state.countries = filtered
            }

        },
        FilteredByPopulation: (state, action)=>{
            if(action.payload === "asc"){
                let filtered = state.countries.sort((a,b) => a.population - b.population)
                state.countries = filtered
            }else if(action.payload === "desc"){
                let filtered = state.countries.sort((a,b) => b.population - a.population)
                state.countries = filtered
            }
        },
        FilteredByActivities:(state,action) =>{
            let filtered = state.countries.filter((country)=> country.activities && country.activities.map((activity)=> activity?.name).includes(action.payload))
            state.countries = filtered
        },
        CleanErrorState: (state,action)=>{
            state.error = action.payload
        }
    }
})

export const {GetAllCountries, GetOneCountry, FilterCountries, FilteredByAlphabeticalOrder, FilteredByPopulation, FilteredByActivities,CleanErrorState} = countriesSlice.actions

export default countriesSlice.reducer