import React from "react";
import {Link} from "react-router-dom";
import "./Cards.css"


function CardItem(props) {
    return (

            <li className="cards_item">
                <div className="cards_item_link" >
                    <div>
                        <figure className="cards_item_pic-wrap" data-category={props.label}>
                            <img src={props.src} alt='City Image' className='cards_item_img'/>
                        </figure>
                    </div>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">{props.text} temperatura</h5>
                    </div>
                </div>
            </li>

    );
}

export default CardItem;