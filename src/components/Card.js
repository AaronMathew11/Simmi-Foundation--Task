import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ title, time, brief, id }) {

  return (
    <Link to={`card-view/${id}` } style={{ textDecoration: 'none' }}>
    <div className='card' >
      <div className='card__head'>
        <h3>{title}</h3>
        <p>{time}</p>
      </div>
      <div className='card__body'>
        <p>{brief}</p>
      </div>
    </div>
    </Link>
  );
}

export default Card;
