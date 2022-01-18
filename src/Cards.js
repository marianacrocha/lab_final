import React from 'react'
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>
                Check out the weather in these 3 cities!
            </h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                        src="imagens/aveiro.jpg"
                        text="Aveiro 💕 Temperatura:"
                        label='Aveiro'
                        path='/services'
                        />
                    </ul>

                    <ul className='cards_items'>
                        <CardItem
                            src="imagens/aveiro.jpg"
                            text="Vem explorar a ria! Temparatura: {api.metereologia}"
                            label='Ria'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards