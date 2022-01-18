import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Pagina from "./Pagina";
import Footer from "./Footer";
import Nav from "./Nav";
import Sobre from "./Sobre";
import Home from "./Home";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var{isLoaded, items} = this.state;

        if(!isLoaded){
            return  <div>Loading...</div>
        }

        else {return (
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.idRegiao}>
                            Local: {item.local}
                        </li>
                    ))}
                </ul>
            </div>
        );

        }

    }
}


function Main() {
    return (

        <Router>
            <Nav></Nav>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Pagina' element={<Pagina/>}/>
                <Route path='/Sobre' element={<Sobre/>}/>
            </Routes>
            <Footer></Footer>
        </Router>

    );
}



export default Main;