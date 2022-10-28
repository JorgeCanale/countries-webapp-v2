import React from "react";
import './Home.scss'
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../countriesCards/Cards";
import { FilterSelector } from "../../filters/filtersSelect";
import { useEffect, useState } from "react";
import { getCountries } from "../../../redux/actions/countriesActions";
import { getAllActivities } from "../../../redux/actions/activitiesAction";
import { useNavigate, useLocation} from "react-router-dom";
import {NavBar} from "../../navbar/navbar"
import { Loading } from "../../Loaders/Loading";


export const Home = () =>{
    const Countries = useSelector(store => store.countries.countries)
    const error = useSelector(store => store.countries.error)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getAllActivities())
    },[])

    const path = useLocation()


    return(

        <div className="HomeContainer">
            <div className="HomeBackground" />
            {path.pathname !== "/landing" ? <NavBar/>: <></>}
            <FilterSelector />
            {Countries === undefined ? <Loading />:<Cards countries={Countries}/>}
        </div>
    )
}