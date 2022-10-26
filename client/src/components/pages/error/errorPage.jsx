import React from "react";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom"
import "./errorPage.scss"

export const  ErrorPage =()=>{

    const error = useSelector(store=> store.countries.error)
    const error2 = useSelector(store => store.activities.error)

    const navigate = useNavigate()

    const handleClick =()=>{
        navigate("/home")
    }

    return (
        <div className="container">
            <video src="https://videos.pond5.com/3d-stylized-world-map-flying-footage-084821302_main_xxl.mp4" autoPlay muted loop />
            <div className="error">
                <h1>
                {error ? error: error2}
                </h1>
                <button onClick={handleClick}>Home Page</button>
            </div>
        </div>
    )
}