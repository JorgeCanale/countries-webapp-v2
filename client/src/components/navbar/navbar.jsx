import React from "react";
import { SearchBar } from "./searchBar/searchBar";
import { Link } from "react-router-dom";
import "./navbar.scss"


export const NavBar =()=>{
    return (
        <div className="navbar">
                <Link to="/" >
                Landing
                </Link>
                <Link to="/home">
                home
                </Link>
                <Link to="/newActivity">
                Create
                </Link>
            <SearchBar />
        </div>
    )
}