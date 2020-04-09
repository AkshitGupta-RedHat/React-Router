import React from 'react'
import { Link,NavLink, withRouter } from "react-router-dom";
const Navbar = (props) => {
 //Link to used so that react can intercept the request and prevent the defalut behaviour of refrehing the page
 // NavLink class of active i applied to it which can be useful in making the styling changes

// props is empty because route is not avaliable Navbar 
// we can pass this by using te higher order Component by importing withRouter
 console.log(props)

 // setTimeout(()=>{
    
// })
 return (
    <nav className="nav-wrapper red darken-3">
        <div className = "container">
            <a className="brand-logo">Poke'Times</a>
            <ul className="right">
          {/* React Router automatically applies props to these routes automatically */}
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

    </nav>
)
}

export default withRouter(Navbar)