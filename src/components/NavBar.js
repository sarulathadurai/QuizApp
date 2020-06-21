import React from 'react';

const NavBar = ({min,seconds,score}) => {
  return(
    <ul class="navbar navbar-light bg-dark">
  <li class="nav-item">
    <h3 style={{color:"white"}} > SCORE: {score}</h3>
  </li>
  <li class="nav-item">
    <h3 style={{color:"white"}} >{min}:{seconds<10 ? `0${seconds}`: seconds }</h3>
  </li>
   </ul>

     )
}

export default NavBar;