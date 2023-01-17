import React from 'react'
import "./ScoreCard.css"

function ScoreCards({course,score,loc}) {
  return (
    <div className='scoreCards'>
                    <div className='pos'>{course}</div>
        <p className='place'>{score}</p>
        <p className='brief'>{loc}</p>
    </div>
  )
}

export default ScoreCards