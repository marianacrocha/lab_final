import './App.css';
import React from 'react';
import Pagina from "./Pagina";
import Footer from "./Footer";
import Nav from "./Nav";

function Main() {
  return (
    <div className="App">
        <Nav></Nav>
        <Pagina></Pagina>
        <Footer></Footer>
    </div>
  );
}

export default Main;
