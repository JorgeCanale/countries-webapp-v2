import React from "react";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Pagination } from "../pagination/pagination";
import './Cards.scss'


export const Cards = ({countries})=>{

    const Countries = useSelector(store => store.countries.countries)
    const [page,setPage] = useState(1)
    const [countriesPerPage ,setCountriesPerPage] = useState(6)
    const max = Math.ceil(Countries.length / countriesPerPage)



    return(
        <div className="cards">
            {
                countries && countries.slice((page-1) * countriesPerPage,
                 (page - 1) *  countriesPerPage + countriesPerPage).map(country =>{
                    return (                      
                        <Card
                        key={country.id}
                        name={country.name}
                        flag={country.flags}
                        languages={country.languages}
                        continent={country.continents}
                        population={country.population}
                        cid={country.id}
                        />
                    )
                })
            }
            <Pagination page={page} setPage={setPage} max={max}/>
        </div>
    )
}