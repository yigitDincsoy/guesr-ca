import "./Header.css";
import React, { useState, useContext } from "react";
import { GlobalContext } from "../../App";

function Header() {
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
      <button
          className="buttonTop"
          id="guessButton"
          onClick={() => bottomMenuActivation()}
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

<button
          className="buttonTop minibutton"
          id="guessButton"
          onClick={() => bottomMenuActivation()}
        >?</button>
       
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
