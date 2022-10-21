import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterByAlphabeticalOrder } from "../../redux/actions/countriesActions";
import { postActivity } from "../../redux/actions/activitiesAction";
import { useLocation } from "react-router-dom";
import { NavBar } from "../navbar/navbar";
import "./form.scss"

export const ActivityForm = () =>{
    const countries = useSelector(store => store.countries.countries)
    const dispatch = useDispatch()
    const [activity, setActivity] = useState("")
    const [activitySeason, setActivitySeason] = useState("")
    const [activityDifficulty, setActivityDifficulty] = useState("")
    const [activityDuration ,setActivityDuration] = useState(0.00)
    const [activityCountries, setActivityCountries] = useState("")

    const path = useLocation()

    useEffect(()=>{
        dispatch(getFilterByAlphabeticalOrder("asc"))
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(postActivity({name:activity,
                            season: activitySeason,
                            duration: activityDuration,
                            difficulty: activityDifficulty,
                            countries: activityCountries}))
    }

    return (
        <div className="formContainer">
        {path.pathname !== "/landing" ? <NavBar/>: <></>}
        <form onSubmit={e =>handleSubmit(e)}>
                <input type="text" name="name" value={activity} onChange={e => setActivity(e.target.value)}
                placeholder="ingresa el nombre" autoComplete="none" />
                <select type="form-select" onChange={e =>setActivitySeason(e.target.value)}>
                    {['season','summer','autum','winter','spring'].map(season =>{
                      return(
                          <option value={season} key={season}>{season}</option>
                       )
                  })}
                </select>
            <div>
                <p className="tittle">duration</p>
                <input type="float" value={activityDuration} onChange={e => setActivityDuration(e.target.value)}/>
            </div>
            <div>
                <p className="tittle">difficulty</p>
                <input type="range" min="1" max="5" step="1"  list="tickmarks"
                onChange={e => setActivityDifficulty(e.target.value)}/>
                <datalist id="tickmarks">
                   {['1','2','3','4','5'].map(num =>{
                     return (
                          <option value={num}>{num}</option>
                            )
                        })}
                </datalist>
            </div>
                <select onChange={e => setActivityCountries(e.target.value)}>
                    <option>countries</option>
                    {countries && countries.map(country =>{
                        return (
                            <option value={country.name} key={country.id}>{country.name}</option>
                        )
                    })}
                </select>
            <button type="submit">creat activity</button>
        </form>
        </div>
    )
}