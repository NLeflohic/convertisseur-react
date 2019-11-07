import React from "react";
import Dollar from "./Images/dollar-sign.svg";

const Header = () => {
    return (
        <header className="header">
            <img src={Dollar} alt="dollar" />
            <h1>EUR to USD</h1>
            <img src={Dollar} alt="dollar" />
        </header>
    );
};

export default Header;