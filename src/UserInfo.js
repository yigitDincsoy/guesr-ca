

function UserInfo()
{
    console.log("User VALUE",user)
    return(
        <b>{user.currentUser?user.currentUser.email:null}</b>
    )
}

export default UserInfo