import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries,  getFilterByPopulation,filteredByAlphabetical,  getFilterByAlphabeticalOrder, filteredByPopulation, getFilterByContinents, filteredByActivities } from "../../redux/actions/countriesActions"
import { useState } from "react";
import "./filters.scss"


export const FilterSelector= ()=>{
    const [combinadeFilters, setCombinadeFilters] = useState(false)
    const activities = useSelector(state => state.activities.activities)
    const dispatch = useDispatch()


    function handleChange(e){
        e.preventDefault()
        if(e.target.value === "Population") {
                
        }else if(e.target.value === "Ascendente"){ 
            if(combinadeFilters){
                dispatch(filteredByPopulation("asc"))
            }else{
                dispatch(getFilterByPopulation("asc"))
            }
        }else{
            if(combinadeFilters){
                dispatch(filteredByPopulation("desc"))
            }else{
                dispatch(getFilterByPopulation("desc"))
            }
        }
    }

    function combinadeHandler(e){
        e.preventDefault()
        if(e.target.value === "Ascendente" ){
           if(combinadeFilters){
            dispatch(filteredByAlphabetical("asc"))
        }else{
            dispatch(getFilterByAlphabeticalOrder("asc"))
        }

        }else if(e.target.value === "Descendente"){
            if(combinadeFilters){
                dispatch(filteredByAlphabetical("desc"))
            }else{
                dispatch(getFilterByAlphabeticalOrder("desc"))
            }
        }
    }


    function handleContinetsFilter(e){
        e.preventDefault()
        if(e.target.value !== "Continents"){
            
        setCombinadeFilters(true)
        dispatch(getFilterByContinents(e.target.value))
        }else{
            setCombinadeFilters(false)
        }
    }

    function handleClick(){
        dispatch(getCountries())
    }

    function handleActivities(e){
        e.preventDefault()
        if(e.target.value !== "Activities"){
            
            dispatch(filteredByActivities(e.target.value))
        }
    }
    return(
        <div className="filters">
            <select className="population" onChange={(e)=>handleChange(e)}>
             {["Population","Ascendente","Descendente"].map(filter =>{
                    return(
                         <option value={filter}>{filter}</option>)
            })}
            </select>
  
            <select className="alphabetical" onChange={(e)=> combinadeHandler(e)}>
                    {["Alphabetical","Ascendente","Descendente"].map((o) =>{
                        return(
                            <option value={o}>{o}</option>
                        )
                })}
            </select>


            <select className="continents" onChange={(e)=> handleContinetsFilter(e)}>
                {["Continents","Oceania","Asia", "North America","South America",
                "Africa","Europe","Antartica"].map( op =>{
                    return(<option value={op}>{op}</option>)
                })
                }
            </select>

            <select className="activities" onChange={e => handleActivities(e)}>
                <option>Activities</option>
                {activities  &&  activities.map(activity =>{
                  return (<option value={activity.name}>{activity.name}</option>)
                })}
            </select>

            <button onClick={handleClick}>Refresh</button>
        </div>
    )
}