import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../services/user.apiService";
import User from "../components/User";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const users = useLoaderData()
    // const [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     getAllUsers().then(value => setUsers([...value]))
    // }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;