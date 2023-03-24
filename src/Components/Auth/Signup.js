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

    function checkPasswords() {
        let password1data = document.getElementById("password1").value;
        console.log(password1data)
        let password2data = document.getElementById("password2").value;
        if (password1data == password2data) {
            alert("yay")
        }
    }

    return(
        <div className="loginform">
            <form>
                <h3>Sign Up</h3>
                <label for="email">Email:</label>
                <input type="text" placeholder="Email" ref={userRef}></input><br />
                <label  for="password">Password:</label>
                <input id="password1" type="password" placeholder="Password" ref={pwdRef}></input><br />
                <label  for="password2">Enter Password Again:</label>
                <input id="password2" type="password"></input><br/>
                <label for="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday"></input>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-Binary</option>
                    <option value="nondisclose">Prefer not to Disclose</option>
                </select><br />
                <button onClick={checkPasswords}>Sign Up</button>
            </form>
        </div>
    )
}


export default Signup