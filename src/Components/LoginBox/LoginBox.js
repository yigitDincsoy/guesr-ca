import React, { useContext } from "react";
import "./LoginBox.css";
import { GlobalContext } from "../../App";
import { useAuth } from "../Auth/AuthProvider";
import { useRef } from "react";


function LoginBox(props) {
  const authContex = useAuth();
  const userRef = useRef();
  const pwdRef = useRef();

  function loginButtonClicked(e) {
    localGlobal.set_loggedIn(true)
    localGlobal.set_loginUIopen(false)
  }
  function onAttemptLogin(e)
  {
    e.preventDefault();
    authContex.signin(userRef.current.value, pwdRef.current.value)
  }

  const localGlobal = useContext(GlobalContext);
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
                {/*  localGlobal.set_loginUIopen(false) */}
                <button onClick= {() => onAttemptLogin}>
                  login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
