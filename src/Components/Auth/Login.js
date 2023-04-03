import "./login.css";
import { useAuth } from "./AuthProvider";
import { useRef } from "react";

function Login() {
  const authContext = useAuth();
  const userRef = useRef();
  const pwdRef = useRef();

  function onAttemptLogin(e) {
    e.preventDefault();
    authContext.signin(userRef.current.value, pwdRef.current.value);
  }

    return(
      <div class="container">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="center"></div>
        <div className="loginform">
            <form>
            <h3>login</h3>
                <label for="email">email:</label>
                <input type="text" placeholder="Email" required pattern=".*(.com|.net|.org|.ca)$"ref={userRef}></input><br/>
                <input type="password" placeholder="Password" minlength="4" ref={pwdRef}></input><br/>
                <button onClick={onAttemptLogin}>login</button>
            </form>
        </div>
      </div>
    )
}

export default Login;
