import React from "react";
import dp from "../images/RKS_8738a.png";
import { Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Sidebar.css"
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
  return (
    <div className='sidebar'><center>  <Avatar
    alt='Remy Sharp'
    src={dp}
    sx={{ height: "290px", width: "290px" }}
  /></center>
    
      <div className='socials'>
        <div className='social'>
          <LinkedInIcon  className="icon"/>
          <a href="https://www.linkedin.com/in/aaron-mathew-8a66761b4/">My linkedin page</a>
        </div>
        <div className='social'>
          <InstagramIcon  className="icon"/>
          <a href="https://www.instagram.com/aaron_mathew_11/">My Instagram Account</a>
        </div>
        <div className='social'>
          <MailOutlineIcon  className="icon"/> 
          aaronstone11.2001@gmail.com
        </div>
        <div className='social'>
          <GitHubIcon className="icon"/> 
         <a href="https://github.com/AaronMathew11">My Github Account</a> 
        </div>
        <div className='social'>
          <PhoneIcon className="icon"/> 
         +9523341927 
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
