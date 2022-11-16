import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../countriesCards/Cards";
import { FilterSelector } from "../../filters/filtersSelect";
import { useEffect, useState } from "react";
import { getCountries } from "../../../redux/actions/countriesActions";
import { getAllActivities } from "../../../redux/actions/activitiesAction";
import { useLocation} from "react-router-dom";
import {NavBar} from "../../navbar/navbar"
import { Loading } from "../../Loaders/Loading";
import './Home.scss'


export const Home = () =>{
    const Countries = useSelector(store => store.countries.countries)
    const error = useSelector(store => store.countries.error)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getAllActivities())
        setLoading(false)
    },[])

    const path = useLocation()


    return(

        <div className="HomeContainer">
            <div className="HomeBackground" />
            {path.pathname !== "/landing" ? <NavBar/>: <></>}
            <FilterSelector />
            {Countries.length > 0 ? <Cards countries={Countries}/> : <Loading className="Loading" /> }
        </div>
    )
}