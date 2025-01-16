import React from "react";
import CartWidget from "./CartWidget"

const NavBar = ()=>{
    return (
        <nav className="navbar">
            <div className="nav-content">
                <h1>Mi tienda</h1>
                <ul className="nav-links">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="cart-widget">
                    <CartWidget/>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;