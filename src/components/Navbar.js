import React from "react"
import {Link} from "react-router-dom"
import logo from "../logo.svg"
const Navbar=()=>
{
    return(
        <div>
            <nav className="Navbar">
                <ul>
               { /* 
                https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                <li><img src={logo} alt="store"/></li>
                </Link>
                <Link to="/details">
                <li>Products</li>
                </Link>
                <Link to="/cart">
                <li className="NavRight"><button><i className="fas fa-cart-plus"/>Cart</button></li>                    
                </Link>
                   
                </ul>
            </nav>
        </div>
    )
}
export default Navbar