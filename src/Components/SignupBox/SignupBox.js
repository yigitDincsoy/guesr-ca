import React, { useContext } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { useRef } from "react";

import "./SignupBox.css";

function BottomDynamic(props)
{
  const authContext = useAuth();
  const userRef = useRef();
  const pwdRef = useRef();
  
  function onAttemptSignup(e)
  {
      e.preventDefault();
      authContext.signup(userRef.current.value,pwdRef.current.value)
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
                <input id="user" ref={userRef} type="text" placeholder="user"></input><br />
                <input id="password1" ref={pwdRef} type="password" placeholder="password"></input><br />
                <button id="SignUp" onClick={onAttemptSignup}>sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomDynamic;
