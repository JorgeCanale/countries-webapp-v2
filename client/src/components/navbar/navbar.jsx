import React from "react";
import { SearchBar } from "./searchBar/searchBar";
import { Link } from "react-router-dom";
import "./navbar.scss"


export const NavBar =()=>{
    return (
        <div className="navbar">
            <Link to="/">
            <h4>Landing</h4>
            </Link>
            <Link to="/home">
            <h4>home</h4>
            </Link>
            <Link to="/newActivity">
            <h4>Create</h4>
            </Link>
            <SearchBar />
        </div>
    )
}