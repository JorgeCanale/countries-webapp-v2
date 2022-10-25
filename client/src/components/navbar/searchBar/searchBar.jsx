import React,{useState} from "react";
import { useSelector } from "react-redux";
import { countryByName } from "../../../redux/actions/countriesActions";
import { useDispatch } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import "./search.scss"


export const SearchBar =()=>{
    const [country, setCountry] = useState('')
    const countryDetail = useSelector(state=> state.countries.Country)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = ()=>{
        if(country?.length > 0){
            dispatch(countryByName(country))
        }
    }

    const KeyDown =(e)=>{
        if(e.keyCode === 13 && country.length > 0){
            dispatch(countryByName(country))
        }
    }

    const keyUp =(e)=>{

        if(e.keyCode === 13){
            if(countryDetail.name !== undefined){
                navigate(`/detail/${countryDetail.id}`)
            }else{

            }}
    }

    return (
        <div className="search">
            <input value={country} onChange={e => setCountry(e.target.value)} type="text"
             onKeyDown={e=> KeyDown(e)} onKeyUp={e=>keyUp(e)}/>
        <Link to={`/detail/${countryDetail?.id}`}>
            <button  disabled={ country.length < 3 } onclick={handleClick} >buscar</button>
        </Link>
        </div>)
}