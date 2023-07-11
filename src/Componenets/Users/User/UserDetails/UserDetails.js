import React from 'react';

const UserDetails = ({user}) => {
    const {id,name,username,email,phone,website} = user
    return (

        <div>
            <h4>Id: {id}</h4>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default UserDetails;