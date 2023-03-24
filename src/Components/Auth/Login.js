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
        <div className="loginform">
            <form>
            <h3>Login</h3>
                <input type="text" placeholder="Email" required pattern=".*(.com|.net|.org|.ca)$"ref={userRef}></input><br/>
                <input type="password" placeholder="Password" minlength="4" ref={pwdRef}></input><br/>
                <input type=""
                <button onClick={onAttemptLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;
