import React from 'react';

const UserAddress = ({address}) => {
    const{street, suite, city}=address
    return (
        <div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </div>
    );
};

export default UserAddress;