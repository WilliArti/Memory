import React from "react";
import './Card.css'


export default function Card(props) {

    return (
        <div className={props.className} onClick={props.flip}>
            <img src={`/src/components/imgs/img${props.imgnumber}.png`}  className="card-front" />
            <img src="/src/components/imgs/images.jpg" alt="" className="card-back"/>
            <p>{props.flipped.toString()}</p>
        </div>
    )

}