import React, {useContext } from "react";
import "./BottomDynamic.css";

function BottomDynamic(props) {
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
                <label for="password2">Enter Password Again:</label>
                <input id="password2" type="password"></input>
                <br />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"></input>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="non-binary">Non-Binary</option>
                  <option value="nondisclose">Prefer not to Disclose</option>
                </select>
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

export default BottomDynamic;
