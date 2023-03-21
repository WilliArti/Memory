import React from "react";
import Card from "./Card";
import './Grid.css'


function createArray( minValue, maxValue) {
    let randomNumberArray = [];
    let duplicatescheck = []
    let c=0
    let i = 0
    while (c<2){
        while(i<36) {
          let randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
          if (!duplicatescheck.includes(randomNumber)) {
            randomNumberArray[i] = randomNumber;
            duplicatescheck.push(randomNumber)
            i = i+2
          }
        }
        i=1
        c++
        duplicatescheck =[]
    }
    return randomNumberArray;
}





function Grid() {
    const cards= createArray(1,18)

    const cardelements = cards.map(card => (
    
        <Card
            key = {card}
            imgnumber = {card}
        />
    ) )

    return(
        <div className="grid">
            {cardelements}
        </div>
    )
}

export default Grid;
