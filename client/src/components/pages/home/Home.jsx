import React from "react";
import './Home.scss'
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../countriesCards/Cards";
import { FilterSelector } from "../../filters/filtersSelect";
import { useEffect } from "react";
import { getCountries } from "../../../redux/actions/countriesActions";
import { getAllActivities } from "../../../redux/actions/activitiesAction";
import { useLocation } from "react-router-dom";
import {NavBar} from "../../navbar/navbar"


export const Home = () =>{
    
    const Countries = useSelector(store => store.countries.countries)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getAllActivities())
    },[])

    const path = useLocation()

    return(

        <div className="HomeContainer">
            <div className="HomeBackground"></div>
            {path.pathname !== "/landing" ? <NavBar/>: <></>}
            <FilterSelector />
            <Cards countries={Countries}/>
        </div>
    )
}