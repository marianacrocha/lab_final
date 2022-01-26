import CardItem from "./CardItem";
import './Cards.css'
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from "./Pagina";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function Cards() {

    const [distrito, setDistrito] = useState([])
    const [mostrarConteudo, setMostrarConteudo] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [temperaturaCidade, setTemperaturaCidade] = useState();

    useEffect(() => {
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then((res) => res.json())
            .then((json) => {
                let distritos = json.data.map((item) => item)
                setDistrito(distritos);
                // console.log(distritos)
            });

    }, []);

    useEffect(() => {
        fetch(`https://goweather.herokuapp.com/weather/aveiro`)
            .then((res) => res.json())
            .then((weather) => {
                setTemperaturaCidade(weather.temperature);
                console.log(weather.temperature)
                console.log(distrito.data.local)
                setCarregando(false);
                setMostrarConteudo(true);
            });
    }, []);


    if (distrito.length > 0) {


        let arr = distrito.slice(0, 3).map((dist) => {

            return (
                <div className="col-xl-4 col-md-6 p-0">
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>

                            <CardItem
                                src="imagens/aveiro.jpg"
                                text={dist.local}
                                label={temperaturaCidade}
                                path='/services'
                            />
                        </ul>

                    </div>
                </div>

            )
        })

        return (<div className='cards'>
            <div className='container-fluid'>
                <div className="row mt-5 ">
                    {arr}
                </div>

                <Link to="/Pagina" className='a'>  Todas as Cidades </Link>

            </div>
        </div>)
    } else {
        return (<div></div>)
    }
}

export default Cards