import React from "react";
import "./Navbar.css";
import * as Unicons from "@iconscout/react-unicons";

function Navbar()
{
    return(
        <div className = "Navbar align-items">
            <Unicons.UilCompass />
            <Unicons.UilHome />
            <Unicons.UilShoppingCart />
        </div>
    );
}

export default Navbar;