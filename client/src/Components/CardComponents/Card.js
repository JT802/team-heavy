import React from 'react';
import "./card.css"

function Card(props) {
    return (
        //card style
        <div className= "Card">
           { /*takes card component based on card number because props*/}
           <h4 className="PosterText" >{props.text}</h4>
           <img  src ={props.card_number} alt="posters"/>
        </div>
    )
}

//enables react to not render elements that do not need to be rerendered
export default React.memo(Card)