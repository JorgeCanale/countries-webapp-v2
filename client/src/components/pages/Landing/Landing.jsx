import React from "react";
import {Link} from "react-router-dom"

import "./Landing.scss"

export const LandingPage = ()=>{    
    return(
        <div className="LandingContainer">
            <h1>Find your place</h1>
                <Link to='/home'>
                     <button> go to the home choom</button>
                 </Link>
        </div>
    )
}