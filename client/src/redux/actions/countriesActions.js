import axios from "axios"
import { GetAllCountries,GetOneCountry,FilterCountries, FilteredByAlphabeticalOrder,
     FilteredByPopulation, FilteredByActivities,CleanErrorState } from "../slices/countriesSlice"


export const getCountries = () => {
    return async dispatch =>{
        const countries = (await axios.get(`/countries`)).data
        if(countries){
            dispatch(GetAllCountries(countries))
        }else{            
            let error = "Error al conectar con el servidor"
            dispatch(GetAllCountries(error))
        }
    }
}

export const countryByName = (name) => {
    return async dispatch =>{
        const Country = (await axios.get(`/countries/country/${name}`)).data
        dispatch(GetOneCountry(Country))
    }
}

export const getFilterByContinents = (continent) => {
    return async dispatch =>{
        const filtered = (await axios.get(`/filters/continents/${continent}`)).data
        dispatch(FilterCountries(filtered))
    }
}

export const getFilterByAlphabeticalOrder = (order) => {
    return async dispatch =>{
        const filtered = (await axios.get(`/filters/alphabetical/${order}`)).data
        dispatch(FilterCountries(filtered))
    }
}

export const getFilterByPopulation = (order) => {
    return async dispatch =>{
        const filtered = (await axios.get(`/filters/population/${order}`)).data
        dispatch(FilterCountries(filtered))
    }
}

export const filteredByAlphabetical = (order) =>{
    return async dispatch =>{
        dispatch(FilteredByAlphabeticalOrder(order))
    }
}

export const filteredByPopulation = (order)=>{
    return async dispatch =>{
        dispatch(FilteredByPopulation(order))
    }
}

export const filteredByActivities = (activity) =>{
    return async dispatch =>{
        dispatch(FilteredByActivities(activity))
    }
}

export const cleanErrorState = ()=>{
    return async dispatch=>{
        dispatch(CleanErrorState(undefined))
    }
}