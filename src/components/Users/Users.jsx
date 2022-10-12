import React, {useEffect, useState} from 'react';
import User from "../User/User.jsx";
import {useSearchParams} from "react-router-dom";
import {userService} from "../service/service";

const Users = () => {

    const [searchParams] = useSearchParams();
    const [users, setUsers] = useState([])
    const genderParameter = searchParams.get('gender')
    const nationalityParameter = searchParams.get('nat')

    useEffect(()=> {
        userService(genderParameter, nationalityParameter).then(value => setUsers(value.data.results))
    } ,[searchParams])

    return (
        <div className={'usersBlock'}>
            {users.map((user, index) => <User key={index} user={user}/>)}
        </div>
    );
};

export default Users;
