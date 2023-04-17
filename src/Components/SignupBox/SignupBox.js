import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { useAuth } from "../Auth/AuthProvider";
import { useRef } from "react";

import "./SignupBox.css";

function BottomDynamic(props)
{
  const localGlobal = useContext(GlobalContext);
  const authContext = useAuth();
  const userRef = useRef();
  const pwdRef = useRef();
  
  function onAttemptSignup(e)
  {

      e.preventDefault();
      authContext.signup(userRef.current.value,pwdRef.current.value)
      localGlobal.set_bottomUIopen(false); 
      localGlobal.set_userLoggedIn(false); 
      //wait until we get a response
      //check if signup worked
      //if it did, then we create a user on mongo db
      //the id for thet user should be currentuser.uid
      //everything else we already have
      //
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
