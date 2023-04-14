import {useAuth} from './AuthProvider'
// import './login.css'

function Logout()
{
    const loginInfo = useAuth()
    loginInfo.signout();
    return(
        <div className="logoutmsg"> you have been logged out. Come back soon!</div>
    )
}

export default Logout