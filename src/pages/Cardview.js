import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import data from "../data.json"
import "../components/cardview.css"

function Cardview() {

const [id,setId]=useState(1);

  useEffect(()=>{
    const  key= window.location.pathname.split("/");
    setId(key[2]);

  },[])

  const card= data.card;
  // console.log(card)

  console.log(id)

  return (
    <div className="cardView">
      <Header />
      <div className="cardview_infocard">
    
        <div className="cardview_center">
        <img src={card[id-1].image} alt="not available"/>
     <h1>{card[id-1].title}</h1>
     <p>{card[id-1].time}</p>
     <p>{card[id-1].long}</p>
     </div>
      </div>
  
     
      
    </div>
  );
}

export default Cardview;
