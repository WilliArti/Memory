import React from "react";
import './Card.css'

export default function Card(props) {

    return (
        <div>
            <img src={`/src/components/imgs/img${props.imgnumber}.png`} alt="" className="card" />
        </div>
    )

}