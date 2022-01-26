import CidadeItem from "./CidadeItem";
import './Cards.css'
import React, {useState, useEffect}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function Pagina() {

    const [distrito, setDistrito] = useState([])
  //  const [mostrarConteudo, setMostrarConteudo] = useState(false);
  //  const [carregando, setCarregando] = useState(false);
    const [temperaturaCidade, setTemperaturaCidade] = useState();



    useEffect(() =>{
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then((res) => res.json())
            .then((json) => {
                let distritos = json.data.map((item)=> item)
                setDistrito(distritos);
                // console.log(distritos)
            });

    }, []);


    useEffect(() =>{

        fetch('https://goweather.herokuapp.com/weather/aveiro')
            .then((res) => res.json())
            .then((weather) => {

                setTemperaturaCidade(weather.temperature);
                console.log(weather.temperature)

            }); }, []);




    if (distrito.length>0) {


        let arr = distrito.map((dist)=>{

            return(

                <div className="col-xl-4 col-md-6 p-0">
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>

                            <CidadeItem
                                src="imagens/aveiro.jpg"
                                text={dist.local}
                                label={temperaturaCidade}
                                path='/services'
                            />
                        </ul>

                    </div>
                </div>

            )})

        return (    <div className='cards'>
            <div className='container-fluid'>
                <div className="row justify-content-center mt-5 ">
                    <h1> Observa a metereologia em todas as cidades de Portugal!</h1>
                    <textarea placeholder="Pesquisa por uma cidade..." className="col-6">

            </textarea>
                </div>
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

export default Pagina;