import React, { useCallback, useState } from "react";
import { useEffect } from "react";
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


const cards= createArray(1,18)




function Grid() {
    const cardslist = cards.map((card,index)=> ({ 
        value : card, 
        flipped: false, 
        id: `${(index)}${card}${index}`,
        matched: false 
    }) )

    const[cardflip, setcardflip] = useState(cardslist)
    const[cardflipped, setcardflipped] = useState([])
    const[cardcountflipped, setcardcountflipped] = useState(0)
    

    //make it stop the code and finish everything
    useEffect(()=>{
        if(cardcountflipped===2){
            setcardcountflipped(0)
            
                setTimeout(function()
                {
                    if (!(cardflipped[0].value===cardflipped[1].value)){
                        setcardflip(prevcardflip => {
                            return prevcardflip.map((card) => {  
                                return (cardflipped.some((el)=> el.id == card.id)) ? {...card, flipped: !card.flipped } : card
                            })
                        })
                        
                    }else{
                        console.log('you matched')
                        setcardflip(prevcardflip => {
                            return prevcardflip.map((card) => {  
                                return (cardflipped.some((el)=> el.id == card.id)) ? {...card, matched: true } : card
                            })
                        })
                    }
                    setcardflipped([])
                },1000)
            }
        
    },[cardcountflipped])

    useEffect(()=>{

        if(cardflip.every((el)=> el.matched == true)){
            console.log('Youwon')
        }

    },[cardflip])


    
    

    
    
    /* function flip(id) {
        console.log('clicked')
        setcardflip(prevcardflip => {
            return prevcardflip.map((card) => {   
                return card.id === id ? {...card, flipped: !card.flipped } : card
            })
        })
    } */
    const flip = useCallback((id) => {    
        setcardflip((prevcard) =>
            prevcard.map((card) => {
            if (card.id === id) {
                setcardflipped(prev => [...prev, card])
                //setcountcardturnt
                setcardcountflipped(prev => prev+1)
                return { ...card, flipped: true };

            }else{
                return card;
            }
            
          })
        );
      },[setcardflip]);
    
    
 
    
    const cardelements = cardflip.map((card) => (
        React.Children.toArray(
            
            <Card

                key = {card.id}
                id = {card.id} 
                className = {`card-container ${card.flipped ? 'flip' : ''}`} 
                imgnumber = {card.value}
                flipped = {card.flipped}
                flip = {!(card.matched) ? ()=> flip(card.id) : null}
                
            />
            
            )
        ) 
    )
    
    return(
        <div className="grid">
            {cardelements}
        </div>
    )
}

export default Grid;
