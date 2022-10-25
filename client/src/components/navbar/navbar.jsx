import React from "react";
import { SearchBar } from "./searchBar/searchBar";
import { NavLink} from "react-router-dom";
import "./navbar.scss"


export const NavBar =()=>{



    return (
        <div className="navbar">
            <div className="links">
                <NavLink to="/">
                    <p>Landing</p>  
                </NavLink>
                <NavLink to="/home">  
                    <p>Home</p>    
                </NavLink>   
                <NavLink to="/newActivity">
                    <p>Create</p>  
                </NavLink >
            </div>
            <SearchBar />
        </div>
    )
}