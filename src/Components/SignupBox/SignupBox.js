import React, { useContext } from "react";
import { useRef } from "react";

import "./SignupBox.css";

function BottomDynamic(props)
{



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
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="email"></input>
      
                <br />
                <input
                  id="password1"
                  type="password"
                  placeholder="password"
                ></input>
                <br />
              
                <br />
                <button id="SignUp">let's go</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDynamic;
