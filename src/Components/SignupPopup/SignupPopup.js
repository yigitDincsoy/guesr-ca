import React, {useContext } from "react";
import "./SignupPopup.css";

function SignupPopup(props) {
  if (props.type=="login") {console.log("Login Selected")}
  if (props.type=="register") {console.log("Register Selected")}

  return (
    <div className="BI_Wrapper">
      <div className="BI_Content">
        <div className="container">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="center">
            <div>
              <form>
                <h3>Sign Up</h3>
                <br />
                <label for="email">Nickname:</label>
                <input type="text" placeholder="Email"></input>
                <br />
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

export default SignupPopup;
