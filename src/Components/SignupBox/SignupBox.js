import React, { useContext } from "react";
import "./SignupBox.css";

function BottomDynamic(props) {
  if (props.type == "login") {
    console.log("Login Selected");
  }
  if (props.type == "register") {
    console.log("Register Selected");
  }

  return (
    <div className="BI_Wrapper">
      <div className="BI_Content">
        <div className="container">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="center">
            <div>
              <form>
                <h3>sign up</h3>
                <input type="text" placeholder="email"></input>
                <br />
                <input
                  id="password1"
                  type="password"
                  placeholder="password"
                ></input>
                <br />
                <input id="password2" type="password" placeholder="confirm password"></input>
                <br />
                <br />
                <button id="SignUp">sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDynamic;
