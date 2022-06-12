import './style.css'
import User from './User'
function UserList({Users}) {

    return (
        <div className="Userslist-component">
            <h1>All users</h1>
            <div style={{display:"flex", flexWrap:"wrap", padding:"10px" }}>
                {Users.map(user=>(<User user={user} />))}
            </div>

        </div>
    )
}

export default UserList