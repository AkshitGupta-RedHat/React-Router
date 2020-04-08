import React from 'react'
import { Link,NavLink } from "react-router-dom";
const Navbar = () => {
 //Link to used so that react can intercept the request and prevent the defalut behaviour of refrehing the page
 // NavLink class of active i applied to it which can be useful in making the styling changes
return (
    <nav className="nav-wrapper red darken-3">
        <div className = "container">
            <a className="brand-logo">Poke'Times</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

    </nav>
)
}

export default Navbar