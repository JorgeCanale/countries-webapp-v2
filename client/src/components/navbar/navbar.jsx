import React from "react";
import { SearchBar } from "./searchBar/searchBar";
import { useNavigate} from "react-router-dom";
import "./navbar.scss"


export const NavBar =()=>{

    const navigate = useNavigate()

    const handleClick =(e)=>{
        const path = e.target.value
        navigate(`/${path}`)
    }

    return (
        <div className="navbar">
            <div className="links">              
                    <button className="link" onClick={handleClick} value="">Landing</button>   
                    <button className="link" onClick={handleClick} value="home">Home</button>    
                    <button className="link" onClick={handleClick} value="newActivity">Create</button>  
            </div>
            <SearchBar />
        </div>
    )
}