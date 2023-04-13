import "./HeaderLogged.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";

function HeaderLogged() {
  const localGlobal = useContext(GlobalContext);

  function bottomMenuActivation(arg1) {
    if (localGlobal.bottomUIopen == false) {
      document.getElementById("guessButton").style.borderWidth = "0 0 1px";
      localGlobal.set_bottomUIopen(true);
    } else {
      localGlobal.set_bottomUIopen(false);
      document.getElementById("guessButton").style.borderWidth = "0 0 4px";
    }

    console.log(localGlobal.bottomUIopen);
  }

  return (
    <header>
      <div className="header_left">
      <h4>Hello, gamer2000</h4>
      <h4>500 💵</h4>
      </div>
      <div className="header_mid">
        <h1>guesr</h1>
        {/* <p>
          we steal your time & data for our own profit, since 2023
        </p> */}
      </div>

      <div className="header_right">
        
        <button className="buttonTop minibutton">📖</button>
        <button className="buttonTop" onClick={() => localGlobal.set_loggedIn(false)}>Logout</button> 
      </div>
    </header>
  );
}

export default HeaderLogged;

//640 360

// F3EEDF
// CB884E
// 8E858B
// 945C57