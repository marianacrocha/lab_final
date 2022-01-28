import CidadeItem from "./CidadeItem";
import './Cards.css'
import axios from 'axios';
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function Pagina() {

    const [distrito, setDistrito] = useState([])
    const [carregando, setCarregando] = useState(false);
    const [temp, setTemp] = useState([])
    const [search, setSearch] = useState('')



    useEffect(() => {
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then((res) => res.json())
            .then((json) => {
                let distritos = json.data.map((item)=> {
                    //     console.log(item)
                    return   item;
                })
                setDistrito(distritos);

            });

    }, []);


    useEffect(()=> {
        console.log("olá")
        let temp2 =[];
        distrito.forEach((it)=>{
            fetch("https://goweather.herokuapp.com/weather/"+it.local)
                .then((res) => res.json())
                .then((weather) => {

                    if (weather.temperature === undefined) {
                        temp.push("não disponível")
                    } else {
                        temp.push(weather.temperature)

                    }


                }).then(()=>{

                setTemp(temp)
                console.log(temp)
                if(temp.length==35){
                    setCarregando(temp);
                }

            });

            // console.log(distritos)

            return it; })
    }, [distrito])




    if (distrito.length > 3|| temp.length>3) {


        let arr = distrito.filter((dist) =>{
            if (search==""){ return dist;}
            else if(dist.local.toLowerCase().includes(search.toLowerCase())){return dist;}
        }).map((dist, index) => {

            return (
                <div className="col-xl-4 col-md-6 p-0">
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>
                            <CidadeItem
                                src="imagens/aveiro.jpg"
                                text={dist.local}
                                label={temp[index]}
                                path='/services'
                            />
                        </ul>
                    </div>
                </div>
            )
        })

        return (<div className='cards'>
            <div className='container-fluid'>
                <div className="row justify-content-center mt-5 ">
                    <h1> Observa a metereologia em todas as cidades de Portugal!</h1>
                   <input className="textarea" type="text" placeholder="Pesquisa por uma cidade..." onChange={event =>{setSearch(event.target.value)} } />
                </div>
                <div className="row mt-5 ">
                    {arr}
                </div>

            </div>
        </div>)
    } else {
        return (<div></div>)
    }
}

export default Pagina;