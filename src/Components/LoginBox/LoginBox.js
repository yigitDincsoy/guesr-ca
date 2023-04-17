import React, { useContext } from "react";
import "./LoginBox.css";
import { GlobalContext } from "../../App";
import { useAuth } from "../Auth/AuthProvider";
import { useRef } from "react";


function LoginBox(props) {
  const localGlobal = useContext(GlobalContext);
  const authContex = useAuth();
  const userRef = useRef();
  const pwdRef = useRef();

  // function loginButtonClicked(e) {
  //   localGlobal.set_loggedIn(true)
  //   localGlobal.set_loginUIopen(false)
  // }
  function onAttemptLogin(e) {
    e.preventDefault();
    localGlobal.set_loginUIopen(false);
    let myValue = authContex.signin(userRef.current.value, pwdRef.current.value)
    console.log(authContex.currentUser)
    localGlobal.set_userLoggedIn(authContex.currentUser.email)
    //wait until we get a response
    //check if login worked
    //if it did, then we create do a get from mongodb
    //the id for that user should be currentuser.uid
    //then we have all the data we want
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
                <h3>login</h3>

                <input
                  id="email"
                  type="text"
                  ref={userRef}
                  placeholder="email"
                ></input>
                <br />
                <input
                  id="password1"
                  type="password"
                  ref={pwdRef}
                  placeholder="password"
                ></input>
                <br />

                <br />
                <br />
              </form>
              <button onClick={onAttemptLogin}>
                login
                {/* {authContex.currentUser.email} */}
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
