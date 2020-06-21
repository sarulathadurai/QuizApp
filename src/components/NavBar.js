import React from 'react';

const NavBar = ({min,seconds,score}) => {
  return(
    <ul class="navbar navbar-light bg-dark">
  <li class="nav-item">
    <a style={{color:"white"}} href="#"> SCORE: {score}</a>
  </li>
  <li class="nav-item">
    <a style={{color:"white"}} href="#">{min}:{seconds<10 ? `0${seconds}`: seconds }</a>
  </li>
   </ul>

     )
}

export default NavBar;