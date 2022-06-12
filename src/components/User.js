import React from 'react'
import {Link} from "react-router-dom";
export default function User({user}) {
    return (
            <div className="userCard" >
                <img  src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="profilePhoto"/>
                <div className="user_Info_Div">
                    <h2>{user.name}</h2>
                    <p>
                        {user.address.city}  
                    </p>
                <Link to={`/userInfo/${user.id}`}> <button variant="primary">Get more informations</button></Link>
                </div>
            </div>
    )
}