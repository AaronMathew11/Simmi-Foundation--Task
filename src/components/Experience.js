import React from "react";
import data from "../data.json";
import ExperienceCards from "./ExperienceCards";
import "./Experience.css";
import ScoreCards from "./ScoreCards";

function Experience() {
  const exps = data.experience;
  const edu = data.education;

  return (
    <div className='experience'>
      <p>Aaron K Mathew</p>


      {/* exp cards */}
    <div className="cards">
    {exps.map((exp) => (
        <ExperienceCards
          brief={exp.brief}
          pos={exp.position}
          skills={exp.Skills}
          place={exp.place}
        />
      ))}
   
  <p>Education :</p> 
        
      {/* score cards */}
    {edu.map((edu) => (
        <ScoreCards
          course={edu.course}
          score={edu.score}
          loc={edu.location}
        />
      ))}
       </div>
    </div>
  );
}

export default Experience;
