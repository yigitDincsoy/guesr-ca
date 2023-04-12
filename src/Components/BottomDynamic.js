import React, { useEffect, useContext } from "react";
import qData from "./FakeData";
import { GlobalContext } from "../App";
import "./BottomDynamic.css";

function BottomDynamic() {
  const localGlobal = useContext(GlobalContext);

  let toRender_choosenGuesses = [];

  for (let i = 0; i < localGlobal.userGuessCart.length; i++) {
    let nextInLine = localGlobal.userGuessCart[i];
    toRender_choosenGuesses.push(
      <UNIT_GUESSMADE title={qData[nextInLine]["title"]} />
    );
  }

  function UNIT_GUESSMADE(props) {
    return (
      <>
        <p>{props.title}</p>
      </>
    );
  }

  return (
    <div className="BI_Wrapper">
      <div className="BI_Content">
        <div class="container">
          <div class="top"></div>
          <div class="bottom"></div>
          <div class="center">
            <div>
              <form>
                <h3>Sign Up</h3>
                <label for="email">Email:</label>
                <input type="text" placeholder="Email"></input>
                <br />
                <label for="password">Password:</label>
                <input
                  id="password1"
                  type="password"
                  placeholder="Password"
                ></input>
                <br />
                <label for="password2">Enter Password Again:</label>
                <input id="password2" type="password"></input>
                <br />
               

             
                <br />
                <button>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDynamic;
