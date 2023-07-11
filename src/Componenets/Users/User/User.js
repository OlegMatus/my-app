import React from 'react';
import UserAddress from "./UserAddress/UserAddress";
import UserDetails from "./UserDetails/UserDetails";
import Company from "./Company/Company";

const User = ({user}) => {
    return (
        <div>
            <UserDetails user={user}/>
            <UserAddress address={user.address}/>
            <Company company={user.company}/>
        </div>
    );
};

export default User;