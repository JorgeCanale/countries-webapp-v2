import React from "react";
import './Card.scss'


export const Card = ({name, flag, continent,languages, population}) =>{

    let countryLanguages = languages !== undefined && languages !== null ? [] : null

    if(countryLanguages !== null ) for(let key in languages) countryLanguages.push(languages[key])

    return(
        <div className="cardContainer">
            <div className="Card" >
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