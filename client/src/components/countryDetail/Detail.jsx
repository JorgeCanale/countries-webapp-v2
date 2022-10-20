import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar } from "../navbar/navbar";
import "./detail.scss"

export  const Detail = () =>{

    let data = useLocation()
    const country = data.state
    let languages = []

    for(let key in country.languages){
        languages.push(country.languages[key])
    }


    return (
        <div className="detail">
            {data.pathname !== "/landing" ? <NavBar/>: <></>}
            <img className="flag" src={`${country.flags}`} alt="country flag"/>
            <h1 className="tittle">{country.name}</h1>
            <h3 className="tittle">Capital: </h3>
            <p className="text">{country.capital}</p>
            <h3 className="tittle">Continente</h3>
            <p className="text">{country.continents}</p>
            <h3 className="tittle">Area: </h3>
            <p className="text">{country.area}</p>
            <h3 className="tittle">Population</h3>
            <p className="text">{country.population}</p>
            <h3 className="tittle">Languages</h3>
           {languages.map(language =>{
                return (<p className="text">{language}</p>)
            })}
            
            {country.activities !== undefined && country.activities.length > 0 ?
             <h3 className="tittle">Activities</h3>: <></>}
           {country.activities && country.activities.map(activity =>{
                return(
                    <p className="text">{activity.name}</p>
                )
            })}
            
        </div>
    )
}