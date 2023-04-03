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
                <h3>sign up</h3>
                <label for="email">email:</label>
                <input type="text" placeholder="email" ref={userRef}></input><br />
                <label  for="password">password:</label>
                <input id="password1" type="password" placeholder="password" ref={pwdRef}></input><br />
                <label  for="password2">enter password again:</label>
                <input id="password2" type="password"></input><br/>
                <label for="birthday">birthday:</label>
                <input type="date" id="birthday" name="birthday"></input>

                <label for="gender">gender:</label>
                <select id="gender" name="gender">
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                    <option value="nondisclose">prefer not to Disclose</option>
                </select><br />
                <button onClick={checkPasswords}>sign up</button>
            </form>
        </div>
    )
}


export default Signup