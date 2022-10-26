import React,{useState} from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { NavBar } from "../navbar/navbar";
import "./detail.scss"

export  const Detail = () =>{

    let data = useLocation()
    const country = useSelector(store=>store.countries.Country)
    let languages = []
   

    if(country){
        for(let key in country?.languages) languages.push(country.languages[key])
    }

    return (
        
        <div className="detail">
            {data.pathname !== "/landing" ? <NavBar/>: <></>}
            {country.id === undefined ? <h1>Loading</h1>:<div className="infoBackground">
                <img className="flag" src={`${country?.flags}`} alt="country flag"/>
                <h1 className="name">{country?.name}</h1>     
                <div className="infoContainer">               
                    <div className="leftSideBar">
                        <h3 className="tittle">Capital: </h3>
                        <h3 className="tittle">Continente: </h3>
                        <h3 className="tittle">Area: </h3>
                        <h3 className="tittle">Population: </h3>
                        <h3 className="languages">Languages</h3>
                        {country?.activities !== undefined && country.activities.length > 0 ?
                        <h3 className="activities">Activities</h3>: <></>}
                    </div>
                    <div className="rightSideBar">
                        <h3 className="text">{country?.capital}</h3>
                        <h3 className="text">{country?.continents}</h3>
                        <h3 className="text">{country?.area}</h3>
                        <h3 className="text">{country?.population}</h3>
                        {languages?.map(language =>{
                        return (<h3 className="language">{language}</h3>)
                        })}
                        {country?.activities && country.activities.map(activity =>{
                        return(
                        <h3 className="activity">{activity.name}</h3>
                        )})
                        }
                    </div>
                </div>
                </div>}
        </div>
    )
}