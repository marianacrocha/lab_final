import CardItem from "./CardItem";
import './Cards.css'
import React, {useState, useEffect}from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function CardsDetails(props) {

    const [distrito, setDistrito] = useState([])
    const [temp, setTemp] = useState([])

    //  const [mostrarConteudo, setMostrarConteudo] = useState(false);
    const [carregando, setCarregando] = useState([]);



    useEffect(() =>{
        fetch('https://api.ipma.pt/open-data/distrits-islands.json')
            .then((res) => res.json())
            .then((json) => {
                let distritos = json.data.map((item)=> {
                    //     console.log(item)
                    return   item;
                })
                setDistrito(distritos);

            });

        /*       distritos.map((it)=> {
         fetch("https://goweather.herokuapp.com/weather/"+it.local)
                  .then((res) => res.json())
                  .then((weather) => {
                      if (weather.temperature === undefined) {
                          temp2.push("não disponível")
                      } else {
                          temp2.push(weather.temperature)


                      }
                      console.log(temp2)
                      setTemp(temp2)

                  });

              // console.log(distritos)

        return it;

       });  */

    }, []);

    // let cidade = distrito[2]
    //  console.log("sim")

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
    }, [distrito, temp])


    if (distrito.length>3 || temp.length>3) {

        let arr = distrito.slice(0,1).map((dist, index)=>{
            let imagem = "imagens/" + dist.local + ".jpg"
            // console.log(temp.length)
            //console.log (temp[index])
            return(
                <div className="col-xl-4 col-md-6 p-0">
                    <img src={imagem}> </img>
                </div>

            )})

        return (    <div className='cards'>
            <div className='container-fluid'>
               oi
            </div>
        </div>)
    }
    else {
        return (<div>loading</div>)
    }
}

export default CardsDetails