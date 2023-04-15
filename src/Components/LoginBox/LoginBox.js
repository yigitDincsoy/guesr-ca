import React, { useContext } from "react";
import "./LoginBox.css";
import { GlobalContext } from "../../App";
import { useRef } from "react";


function LoginBox(props) {

  function loginButtonClicked(e) {
    localGlobal.set_loggedIn(true)
    localGlobal.set_loginUIopen(false)
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
      
                  placeholder="email"
                  ></input>
                <br />
                <input
                  id="password1"
                  type="password"

                  placeholder="password"
                ></input>
                <br />

                <br />
                <br />
                </form>
                {/*  localGlobal.set_loginUIopen(false) */}
                <button onClick={() =>  loginButtonClicked()}>
                  login
                </button>

                <button onClick={() => localGlobal.set_loginUIopen(false)}>
                  cancel
                </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
