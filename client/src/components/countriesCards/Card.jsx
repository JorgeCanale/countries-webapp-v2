import React from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { countryByName } from "../../redux/actions/countriesActions";
import './Card.scss'


export const Card = ({name, flag, continent,languages, population,cid}) =>{

    let countryLanguages = languages !== undefined && languages !== null ? [] : null

    if(countryLanguages !== null ) for(let key in languages) countryLanguages.push(languages[key])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick=()=>{
        navigate(`/detail/${cid}`)
    }

    const handlerMouseOver =()=>{
        dispatch(countryByName(name))
    }

    return(
        <div className="cardContainer">
            <div className="Card" onMouseOver={handlerMouseOver} onClick={handleClick}>
                <img className="flag" src={flag} alt='flag not found'/>
                <h3 className="name">{name}</h3>
                <p className="continet">{`Continent: ${continent}`}</p>
                <p className="population">{`Population: ${population}`}</p>
                <span>Languages</span>
                { countryLanguages && countryLanguages.slice(0,2).map((language) =>{
                  return (<p className="language">{ language}</p>)
                })}
            </div>
        </div>

    )

}