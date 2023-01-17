import React from 'react'
import data from "../data.json"
import Card from './Card';
import "./cardrow.css"

function CardRow() {

    const cards=data.card;

    console.log(cards)

  return (
    <div className='cardRow'>
             {cards.map((card) => (
        <Card brief={card.brief} title={card.title} time={card.time} id={card.id} />
      ))}
    </div>
  )
}

export default CardRow