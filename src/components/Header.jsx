import React from 'react';
import cat from '../assets/cat.png';

const Header = () =>{
    return (
    <header className="header">
    <a href="#">
    <img className="logo" alt="Logo" width='70px' height="80px" src={cat}/>
    </a>
    <a href="#">
    <h2 className="main-title">Catstagram</h2>
    </a>
    </header>
    )
}

export default Header;