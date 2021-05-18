import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const Navbar = () =>{
   return (
<nav className="navbar">
        <div>
        <NavLink to="/profile"
        activeClassName="active"
        >
          Profile
        </NavLink>
        </div>
         <div>
        <NavLink to="/messages"
         activeClassName="active"
        >
          Messages
        </NavLink>
        </div>
         <div>
        <NavLink to="/news"
         activeClassName="active"
        >
          News
        </NavLink>
        </div>
         <div>
        <NavLink to="/music"
         activeClassName="active"
        >
          Music
        </NavLink>
        </div>
        <div>
        <NavLink to="/settings"
         activeClassName="active"
        >
          Settings
        </NavLink>
        </div>
      </nav>
   )
}

export default Navbar;