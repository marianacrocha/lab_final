import logo from './logo.svg';
import './App.css';
import Pagina from "./Pagina";
import Footer from "./Footer";
import Nav from "./Nav";

function Index() {
  return (
    <div className="App">
        <Nav></Nav>
        <Pagina></Pagina>
        <Footer></Footer>
    </div>
  );
}

export default Index;
