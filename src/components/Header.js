import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        Simmi-Foundation Assignment
      </div>
      <div className='header__right'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/profile'>Profile</Link>
      </div>
    </div>
  );
}

export default Header;
