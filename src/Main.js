import './App.css';
import {BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import Pagina from "./Pagina";
import Footer from "./Footer";
import Nav from "./Nav";
import Sobre from "./Sobre";

function Main() {
  return (

        <Router>
        <Nav></Nav>
        <Routes>
            <Route path='/Pagina' element={<Pagina/>}/>
            <Route path='/Sobre' element={<Sobre/>}/>

        </Routes>

        <Footer></Footer>

        </Router>

  );
}

export default Main;
