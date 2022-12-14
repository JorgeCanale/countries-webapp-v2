import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom"
import { cleanErrorState } from "../../../redux/actions/countriesActions";
import "./errorPage.scss"

export const  ErrorPage =()=>{

    const error = useSelector(store=> store.countries.error)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick =()=>{
        dispatch(cleanErrorState())
        navigate("/home")
    }

    return (
        <div className="container">
            <video src="https://videos.pond5.com/3d-stylized-world-map-flying-footage-084821302_main_xxl.mp4" autoPlay muted loop />
            <div className="error">
                <h1>
                {error ? error: "something went wrong  😥"}
                </h1>
                <button onClick={handleClick}>Home Page</button>
            </div>
        </div>
    )
}