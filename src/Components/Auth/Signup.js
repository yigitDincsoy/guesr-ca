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
                <label for="email">Email:</label>
                <input type="text" placeholder="Email" ref={userRef}></input><br />
                <label for="password">Password:</label>
                <input type="password" placeholder="Password" ref={pwdRef}></input><br />
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"></input>

                <label for="gender">Gender:</label>
                <select id="cars" name="cars">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="null">Prefer not to Disclose</option>
                </select><br />
                <button onClick={onAttemptSignup}>Sign Up</button>
            </form>
        </div>
    )
}


export default Signup