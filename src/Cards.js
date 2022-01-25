
import CardItem from "./CardItem";
import './Cards.css'
import React, {useState, useEffect}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Cards() {

    const [distrito, setDistrito] = useState([])
    const [mostrarConteudo, setMostrarConteudo] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [temperaturaCidade, setTemperaturaCidade] = useState();
    const [ventoCidade, setVentoCidade] = useState();


    useEffect(() =>{
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then((res) => res.json())
            .then((json) => {
                let distritos = json.data.map((item)=> item)
                setDistrito(distritos);
                console.log(distritos)
            });

    }, []);

    if (distrito.length>0) {
        const url = "https://goweather.herokuapp.com/weather/${dist.local}"
        const response = fetch(url);
        const weather = response.json();

        setTemperaturaCidade(weather.temperature);
        console.log(weather.temperature)
        setVentoCidade(weather.wind);

        setCarregando(false);
        setMostrarConteudo(true);


        let arr = distrito.map((dist)=>{


            return(

                        <div className="col-xl-4 col-md-6 p-0">
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>

                            <CardItem
                                src="imagens/aveiro.jpg"
                                text={dist.local}
                                label={dist.local}
                                path='/services'
                            />
                        </ul>

                    </div>
                        </div>

            )})

        return (    <div className='cards'>
            <div className='container-fluid'>
                <div className="row mt-5 ">
                {arr}
                </div>
            </div>
                    </div>)
    }
    else {
        return (<div></div>)
    }
}

export default Cards