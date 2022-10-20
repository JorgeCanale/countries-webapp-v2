import React,{useState} from "react";
import { useSelector } from "react-redux";
import { countryByName } from "../../../redux/actions/countriesActions";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import "./search.scss"


export const SearchBar =()=>{
    const [country, setCountry] = useState('')
    const countryDetail = useSelector(state=> state.countries.Country)
    const dispatch = useDispatch()

    console.log('country detail ---->',countryDetail.name)



    const onHooverButton = ()=>{
        if(country?.length > 0){dispatch(countryByName(country))}
    }

    console.log(country)
    return (
        <div className="search">
            <input value={country} onChange={e => setCountry(e.target.value)} type="search"  />
        <Link to={`/detail/${countryDetail?.id}`} state={countryDetail}>
            <button onMouseOver={onHooverButton} disabled={countryDetail.name === undefined}>buscar</button>
        </Link>
        </div>)
}