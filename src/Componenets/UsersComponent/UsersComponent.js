import React from 'react';
import User from "./User/User";

const UsersComponent = ({users,setUserId}) => {
    return (

        <div>
            {users.map((user)=> <User key={user.id} user={user} setUserId={setUserId}/>)}

        </div>
    );
};

export default UsersComponent;