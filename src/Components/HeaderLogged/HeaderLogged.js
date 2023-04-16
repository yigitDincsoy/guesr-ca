import "./HeaderLogged.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import { Link } from 'react-router-dom';
import { useAuth } from "../Auth/AuthProvider";


function HeaderLogged() {
  const localGlobal = useContext(GlobalContext);
  const loginInfo = useAuth;

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
      <h4>{loginInfo.currentUser}</h4>
      <h4>500 💵</h4>
      </div>
      <div className="header_mid">
        <h1>guesr</h1>
      </div>

      <div className="header_right">
        
      <Link to="/guessHistory">
        <button className="buttonTop minibutton" >📖</button>
        </Link>

        <button className="buttonTop" onClick={() => loginInfo.signout()}>Logout</button> 
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
