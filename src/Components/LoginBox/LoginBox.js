import React, { useContext } from "react";
import "./LoginBox.css";
import { GlobalContext } from "../../App";

function LoginBox(props) {
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

                <input id="username" type="text" placeholder="username"></input>
                <br />

                <input
                  id="password1"
                  type="password"
                  placeholder="password"
                ></input>
                <br />

                <br />
                <br />
                <button onClick={() => localGlobal.set_loginUIopen(false)}>
                  let me in
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
