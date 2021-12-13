import React from "react";
import { useSelector } from "react-redux";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar({logout}) {
    const cartItems = useSelector(store => store.cartItems);
    const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);
  
  
    return (

        <div className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <Link className="navbar-brand  m-3 h1" to="/">Shoply</Link>
        <div className="navbar-nav xtra-margin">
            <div className="nav-item mr-4">
                <NavLink className="nav-link" to="/">Products</NavLink>
            </div>
            <div className="nav-item mr-4">
                <NavLink className="nav-link" to="/cart">Cart ({totalItems})</NavLink>
            </div>
        </div>
        </div>
    );
}

export default Navbar;