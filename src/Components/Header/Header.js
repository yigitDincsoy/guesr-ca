import "./Header.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";
import { Link } from 'react-router-dom';


function Header() {
  const localGlobal = useContext(GlobalContext);

  function bottomMenuActivation(arg1) {

    
    if (localGlobal.bottomUIopen == false) {
      localGlobal.set_loginUIopen(false);
      document.getElementById("guessButton").style.borderWidth = "0 0 1px";
      localGlobal.set_bottomUIopen(true);
    } else {
      localGlobal.set_bottomUIopen(false);
      document.getElementById("guessButton").style.borderWidth = "0 0 4px";
    }
  }

  function loginMenuActivation(arg1) {
    localGlobal.set_bottomUIopen(false);

    if (localGlobal.loginUIopen == false) {
      localGlobal.set_loginUIopen(true);
    } else {
      localGlobal.set_loginUIopen(false);
    }


  
  
  }

  return (
    <header>
      <div className="header_left">
      <button
          className="buttonTop"
          id="loginButton"
          onClick={
      () => loginMenuActivation()
          
          }
        >login</button>
       
      </div>
      <div className="header_mid">
  
        <h1>guesr</h1>

        {/* <p>
          we steal your time & data for our own profit, since 2023
        </p> */}
      </div>

      <div className="header_right">

     
      <button
          className="buttonTop"
          id="guessButton"
          onClick={() => bottomMenuActivation()}
        >sign up</button>


       
      </div>
    </header>
  );
}

export default Header;

//640 360

// F3EEDF
// CB884E
// 8E858B
// 945C57
