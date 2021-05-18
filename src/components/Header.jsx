import React from 'react';
import cat from '../assets/cat.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

const Header = () =>{
    return (
    <header className="header">
    <Link to="/profile">
    <img className="logo" alt="Logo" width='70px' height="80px" src={cat}/>
    </Link>
    <Link to="/profile">
    <h2 className="main-title">Catstagram</h2>
    </Link>
    </header>
    )
}

export default Header;