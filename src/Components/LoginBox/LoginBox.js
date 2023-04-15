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
                {/* <label for="email">email:</label> */}
                <input type="text" placeholder="email"></input>
                <br />
                {/* <label for="password">password:</label> */}
                <input
                  id="password1"
                  type="password"
                  placeholder="password"
                ></input>
                <br />
                {/* <label for="password2">comfirm password:</label> */}
                <input id="password2" type="password" placeholder="confirm password"></input>
                <br />
                <br />
                <button 
                onClick={() => localGlobal.set_loginUIopen(false)}
                >login</button>

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBox;
