import React from 'react'
import "./ExperienceCard.css"

function ExperienceCards({pos, place, skills, brief}) {
  return (
    <div className='experienceCards'>
    
              <div className='pos'>{pos}</div>
        <p className='place'>{place}</p>
        <p className='brief'>{brief}</p>
        <p className='skills'>{skills}</p>

    </div>
  )
}

export default ExperienceCards