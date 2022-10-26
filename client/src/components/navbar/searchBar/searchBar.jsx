import React,{useState} from "react";
import { useSelector } from "react-redux";
import { countryByName } from "../../../redux/actions/countriesActions";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom"
import "./search.scss"


export const SearchBar =()=>{
    const [country, setCountry] = useState('')
    const countryDetail = useSelector(store=> store.countries.Country)
    const error = useSelector(store => store.countries.error)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onMouseOver = ()=>{
        if(country?.length > 0){
            dispatch(countryByName(country))
        }
    }

    const handleClick =()=>{
        if(countryDetail.id !== undefined){
            navigate(`/detail/${countryDetail.id}`)
        }else if(error){
            navigate("/error")
        }
    }

    const keyDown =(e)=>{
        if(e.keyCode === 13 && country.length > 0){
            dispatch(countryByName(country))
        }
    }
    
    const keyUp =(e)=>{

        if(e.keyCode === 13){
            if(countryDetail.id !== undefined){
                navigate(`/detail/${countryDetail.id}`)
            }else if(error){
                navigate("/error")
            }}
    }

    return (
        <div className="search">
            <input value={country} onChange={e => setCountry(e.target.value)} type="text"
             onKeyDown={e=> keyDown(e)} onKeyUp={e=>keyUp(e)} onMouseLeave={onMouseOver}/>
            <button className="searchButton" disabled={ country.length < 3 } onMouseOver={onMouseOver} onClick={e=>handleClick(e)}>search</button>
        </div>)
}