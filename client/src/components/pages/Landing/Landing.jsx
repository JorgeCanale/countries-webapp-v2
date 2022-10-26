import React from "react";
import {useNavigate} from "react-router-dom"

import "./Landing.scss"

export const LandingPage = ()=>{    

    const navigate = useNavigate()
    
    const clickHandler=()=>{
        navigate("/home")
    }

    return(
        <div className="LandingContainer">
            <h1 className="tittle">Find your place</h1>
            <button onClick={clickHandler}> go to the home choom</button>
        </div>
    )
}