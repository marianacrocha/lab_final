import './App.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/Pagina" className="linknav">  Cidades </Link>
            <Link to="/Sobre" className="linknav">  Sobre </Link>

        </div>
    </nav>
  );
}

export default Nav;
