import './login.css'
import {useAuth} from './AuthProvider'
import {useRef} from 'react'

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value)
    }

    return(
        <div className="loginform">
            <form>
            <h3>Sign Up</h3>
                <input type="text" placeholder="Email" required pattern=".*(.com|.net|.org|.ca)$"ref={userRef}></input><br/>
                <input type="password" placeholder="Password" minlength="4" ref={pwdRef}></input><br/>
                <button onClick={onAttemptSignup}>Sign Up</button>
            </form>
        </div>
    )
}


export default Signup